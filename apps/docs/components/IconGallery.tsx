import { Check, Copy } from '@signozhq/icons';
import { Button, ButtonColor, ButtonSize, ButtonVariant, Input } from '@signozhq/ui';
import React, { useMemo, useState } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeGrid as Grid } from 'react-window';
import { iconsManifest } from '../data/icons-manifest.js';

interface IconGalleryProps {
	size?: number;
	strokeWidth?: number;
	color?: string;
}

// Separate component for individual icon cell
const IconCell = React.memo(
	({
		columnIndex,
		rowIndex,
		style,
		data,
	}: {
		columnIndex: number;
		rowIndex: number;
		style: React.CSSProperties;
		data: {
			icons: typeof iconsManifest;
			size: number;
			strokeWidth: number;
			color: string;
			copiedIcon: string | null;
			onCopy: (name: string) => void;
		};
	}) => {
		const { icons, size, strokeWidth, color, copiedIcon, onCopy } = data;
		const index = rowIndex * 6 + columnIndex; // 6 columns
		const icon = icons[index];

		if (!icon) return null;

		const { name, component: Icon } = icon;

		return (
			<div style={{ padding: 8, ...style }}>
				<div className="icon-tile">
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							width: 64,
							height: 64,
							marginBottom: 8,
						}}
					>
						<Icon size={size} strokeWidth={strokeWidth} color={color} />
					</div>
					<span style={{ fontSize: 14, lineHeight: 1.42857, textAlign: 'center', marginBottom: 8 }}>
						{name}
					</span>
					<Button
						variant={ButtonVariant.Ghost}
						color={ButtonColor.None}
						size={ButtonSize.SM}
						onClick={() => onCopy(name)}
						prefix={
							copiedIcon === name ? (
								<Check style={{ width: 16, height: 16 }} />
							) : (
								<Copy style={{ width: 16, height: 16 }} />
							)
						}
					>
						{copiedIcon === name ? 'Copied!' : 'Copy'}
					</Button>
				</div>
			</div>
		);
	}
);

IconCell.displayName = 'IconCell';

function IconGallery({ size = 24, strokeWidth = 2, color = 'currentColor' }: IconGalleryProps) {
	const [search, setSearch] = useState('');
	const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

	const filteredIcons = useMemo(() => {
		return iconsManifest.filter((icon) => {
			const matchesSearch =
				icon.name.toLowerCase().includes(search.toLowerCase()) ||
				icon.tags.some((tag) => tag.includes(search.toLowerCase()));
			return matchesSearch;
		});
	}, [search]);

	const copyToClipboard = async (iconName: string) => {
		await navigator.clipboard.writeText(`<${iconName} />`);
		setCopiedIcon(iconName);
		setTimeout(() => setCopiedIcon(null), 2000);
	};

	const COLUMN_WIDTH = 230; // Base width for each column
	const ROW_HEIGHT = 180; // Height for each row

	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 100px)' }}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 16 }}>
				<Input
					placeholder="Search icons..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<div style={{ flex: 1 }}>
				<AutoSizer>
					{({ height, width }) => {
						const columnCount = Math.max(1, Math.floor(width / COLUMN_WIDTH));
						const rowCount = Math.ceil(filteredIcons.length / columnCount);

						return (
							<Grid
								columnCount={columnCount}
								columnWidth={COLUMN_WIDTH}
								height={height}
								rowCount={rowCount}
								rowHeight={ROW_HEIGHT}
								width={width}
								itemData={{
									icons: filteredIcons,
									size,
									strokeWidth,
									color,
									copiedIcon,
									onCopy: copyToClipboard,
								}}
							>
								{IconCell}
							</Grid>
						);
					}}
				</AutoSizer>
			</div>
		</div>
	);
}

export default IconGallery;
