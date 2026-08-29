import { getTransformedSpacingTokens } from '../utils.js';

const spacing = getTransformedSpacingTokens();
const spacingKeys = Object.keys(spacing);

function Spacing() {
	return (
		<div style={{ padding: 16 }}>
			<h1
				style={{
					marginBottom: 20,
					fontSize: 18,
					lineHeight: 1.55556,
					fontWeight: 700,
					color: 'var(--bg-vanilla-100)',
				}}
			>
				Spacing Scale
			</h1>

			{spacingKeys.map((size) => {
				const value = spacing[size as keyof typeof spacing];

				return (
					<div key={size} style={{ marginBottom: 16 }}>
						<span style={{ color: 'var(--bg-vanilla-100)' }}>
							{size} - {value}
						</span>
						<div style={{ backgroundColor: 'var(--bg-slate-50)', height: 16, width: value }} />
					</div>
				);
			})}
		</div>
	);
}

export default Spacing;
