import { ColorSwatch } from './ColorSwatch.js';
import { CopyButton } from './CopyButton.js';

export interface TokenData {
	name: string;
	value: string;
	description?: string;
	usage?: string;
	dontUse?: string;
	category?: string;
	group?: string;
}

interface TokenRowProps {
	token: TokenData;
	showDetails?: boolean;
}

export function TokenRow({ token, showDetails = false }: TokenRowProps) {
	const cssVariable = `--${token.name}`;

	return (
		<div className="token-row">
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: 16,
					paddingInline: 16,
					paddingBlock: 12,
				}}
			>
				<div style={{ width: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<ColorSwatch value={token.value} />
				</div>

				<div style={{ flex: 1, minWidth: 0 }}>
					<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
						<code
							style={{
								fontSize: 14,
								lineHeight: 1.42857,
								fontFamily:
									'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
								fontWeight: 500,
								color: 'var(--l1-foreground)',
							}}
						>
							{token.name}
						</code>
						<CopyButton text={cssVariable} />
					</div>
					{token.description && (
						<p
							style={{
								fontSize: 12,
								lineHeight: 1.33333,
								color: 'var(--l3-foreground)',
								marginTop: 2,
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
							}}
						>
							{token.description}
						</p>
					)}
				</div>

				<div className="at-sm-row">
					<code
						style={{
							fontSize: 12,
							lineHeight: 1.33333,
							fontFamily:
								'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
							backgroundColor: 'var(--l2-background)',
							paddingInline: 8,
							paddingBlock: 4,
							borderRadius: 4,
							color: 'var(--l2-foreground)',
						}}
					>
						{cssVariable}
					</code>
					<CopyButton text={cssVariable} />
				</div>

				{token.category && <span className="at-lg-tag">{token.category}</span>}
			</div>

			{showDetails && (token.usage || token.dontUse) && (
				<div
					style={{
						paddingInline: 16,
						paddingBottom: 12,
						paddingTop: 0,
						display: 'flex',
						flexDirection: 'column',
						gap: 8,
					}}
				>
					{token.usage && (
						<div
							style={{
								display: 'flex',
								alignItems: 'flex-start',
								gap: 8,
								fontSize: 12,
								lineHeight: 1.33333,
							}}
						>
							<span style={{ color: 'var(--accent-forest)', fontWeight: 500, flexShrink: 0 }}>
								Use:
							</span>
							<span style={{ color: 'var(--l2-foreground)' }}>{token.usage}</span>
						</div>
					)}
					{token.dontUse && (
						<div
							style={{
								display: 'flex',
								alignItems: 'flex-start',
								gap: 8,
								fontSize: 12,
								lineHeight: 1.33333,
							}}
						>
							<span style={{ color: 'var(--accent-cherry)', fontWeight: 500, flexShrink: 0 }}>
								Avoid:
							</span>
							<span style={{ color: 'var(--l2-foreground)' }}>{token.dontUse}</span>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
