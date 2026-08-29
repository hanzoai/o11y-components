interface ColorSwatchProps {
	value: string;
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}

export function ColorSwatch({ value, size = 'md', className = '' }: ColorSwatchProps) {
	const box = { sm: 24, md: 32, lg: 48 }[size];

	const isColorValue =
		value.startsWith('var(--') ||
		value.startsWith('#') ||
		value.startsWith('rgb') ||
		value.startsWith('hsl') ||
		value.startsWith('color-mix');

	if (!isColorValue) {
		return (
			<div
				className={className}
				style={{
					width: box,
					height: box,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					borderRadius: 4,
					border: '1px solid var(--l2-border)',
					backgroundColor: 'var(--l2-background)',
				}}
			>
				<span style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--l3-foreground)' }}>—</span>
			</div>
		);
	}

	return (
		<div
			className={className}
			style={{
				width: box,
				height: box,
				borderRadius: 4,
				border: '1px solid var(--l2-border)',
				boxShadow: '0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a',
				backgroundColor: value,
			}}
			title={value}
		/>
	);
}
