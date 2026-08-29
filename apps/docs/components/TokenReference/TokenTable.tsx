import type { TokenData } from './TokenRow.js';
import { TokenRow } from './TokenRow.js';

interface TokenTableProps {
	tokens: TokenData[];
	title?: string;
}

export function TokenTable({ tokens, title }: TokenTableProps) {
	if (tokens.length === 0) {
		return (
			<div style={{ textAlign: 'center', paddingBlock: 32, color: 'var(--l3-foreground)' }}>
				No tokens found
			</div>
		);
	}

	return (
		<div
			style={{
				borderRadius: 4,
				borderStyle: 'solid',
				borderWidth: 1,
				borderColor: 'var(--l2-border)',
				backgroundColor: 'var(--l1-background)',
				overflow: 'hidden',
			}}
		>
			{title && (
				<div
					style={{
						paddingInline: 16,
						paddingBlock: 12,
						borderBottomStyle: 'solid',
						borderBottomWidth: 1,
						borderColor: 'var(--l2-border)',
						backgroundColor: 'var(--l2-background)',
					}}
				>
					<h3
						style={{
							fontSize: 14,
							lineHeight: 1.42857,
							fontWeight: 600,
							color: 'var(--l1-foreground)',
							textTransform: 'capitalize',
						}}
					>
						{title}
					</h3>
				</div>
			)}

			<div className="token-table-head">
				<span style={{ width: 48 }}>Preview</span>
				<span>Token</span>
				<span className="at-sm">CSS Variable</span>
				<span className="at-lg">Category</span>
			</div>

			<div>
				{tokens.map((token) => (
					<TokenRow key={token.name} token={token} showDetails={true} />
				))}
			</div>
		</div>
	);
}
