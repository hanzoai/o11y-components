import { getTransformedColorTokens } from '../utils.js';

const colors = getTransformedColorTokens();

// Function to calculate luminance and determine if we should use light or dark text
function getContrastTextColor(hexColor: string): string {
	const hex = hexColor.replace('#', '');
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	// brightness calculation
	const brightness = (r + g + b) / 3;

	return brightness > 127 ? '#000000' : '#ffffff';
}

function ColorPalette() {
	// Accent colors configuration
	const primaryAccents = ['robin'];
	const secondaryAccents = ['forest', 'amber', 'cherry', 'aqua', 'sakura', 'sienna'];

	// Get accent color data
	const getAccentColor = (colorName: string) => {
		const color = colors.find((c) => c.name.toLowerCase() === colorName.toLowerCase());
		if (!color) return null;
		const shade500 = color.shades.find((s) => s.name === '500');
		return shade500 ? { name: color.name, value: shade500.value } : null;
	};

	return (
		<div style={{ padding: 20 }}>
			<h1
				style={{
					marginBottom: 20,
					fontSize: 18,
					lineHeight: 1.55556,
					fontWeight: 700,
					color: 'var(--card-foreground)',
				}}
			>
				Pallette
			</h1>

			{/* Regular colors */}
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
					gap: 20,
					marginBottom: 48,
				}}
			>
				{colors
					.filter((item) => item.name !== 'Gradient')
					.map((color) => (
						<div key={color.name}>
							<h3
								style={{
									marginTop: 16,
									fontSize: 16,
									lineHeight: 1.5,
									fontWeight: 700,
									textTransform: 'capitalize',
									color: 'var(--card-foreground)',
								}}
							>
								{color.name}
							</h3>
							<div
								style={{
									overflow: 'hidden',
									borderRadius: 4,
									boxShadow:
										'0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a',
								}}
							>
								{color.shades.map((shade) => (
									<div
										key={shade.name}
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											width: '100%',
											height: 48,
											paddingInline: 16,
											fontWeight: 600,
											color: getContrastTextColor(shade.value),
											backgroundColor: shade.value,
										}}
									>
										<span>{shade.name}</span>
										<span style={{ textTransform: 'uppercase' }}>{shade.value}</span>
									</div>
								))}
							</div>
						</div>
					))}
			</div>

			{/* Accents */}
			<div style={{ marginBottom: 48 }}>
				<h1
					style={{
						marginBottom: 20,
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 700,
						color: 'var(--card-foreground)',
					}}
				>
					Accents
				</h1>

				{/* Primary Accents */}
				<div style={{ marginBottom: 32 }}>
					<h2
						style={{
							marginBottom: 16,
							fontSize: 12,
							lineHeight: 1.33333,
							fontWeight: 600,
							textTransform: 'uppercase',
							letterSpacing: 'var(--letter-spacing-wider)',
							color: 'var(--card-foreground)',
							opacity: 0.7,
						}}
					>
						PRIMARY
					</h2>
					<div style={{ display: 'flex', gap: 16 }}>
						{primaryAccents.map((accentName) => {
							const accent = getAccentColor(accentName);
							if (!accent) return null;
							return (
								<div
									key={accent.name}
									style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
								>
									<div
										style={{
											height: 70,
											width: 150,
											borderRadius: 4,
											boxShadow:
												'0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a',
											backgroundColor: accent.value,
										}}
									/>
									<p
										style={{
											fontSize: 12,
											lineHeight: 1.33333,
											fontWeight: 600,
											textTransform: 'uppercase',
											letterSpacing: 'var(--letter-spacing-wider)',
											color: 'var(--card-foreground)',
											opacity: 0.7,
										}}
									>
										{accent.name}
									</p>
								</div>
							);
						})}
					</div>
				</div>

				{/* Secondary Accents */}
				<div>
					<h2
						style={{
							marginBottom: 16,
							fontSize: 12,
							lineHeight: 1.33333,
							fontWeight: 600,
							textTransform: 'uppercase',
							letterSpacing: 'var(--letter-spacing-wider)',
							color: 'var(--card-foreground)',
							opacity: 0.7,
						}}
					>
						SECONDARY
					</h2>
					<div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
						{secondaryAccents.map((accentName) => {
							const accent = getAccentColor(accentName);
							if (!accent) return null;
							return (
								<div
									key={accent.name}
									style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
								>
									<div
										style={{
											height: 70,
											width: 150,
											borderRadius: 4,
											boxShadow:
												'0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a',
											backgroundColor: accent.value,
										}}
									/>
									<p
										style={{
											fontSize: 12,
											lineHeight: 1.33333,
											fontWeight: 600,
											textTransform: 'uppercase',
											letterSpacing: 'var(--letter-spacing-wider)',
											color: 'var(--card-foreground)',
											opacity: 0.7,
										}}
									>
										{accent.name}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{/* Gradients */}
			{colors
				.filter((item) => item.name === 'Gradient')
				.map((color) => (
					<div key={color.name}>
						<h1
							style={{
								marginBottom: 20,
								fontSize: 18,
								lineHeight: 1.55556,
								fontWeight: 700,
								color: 'var(--bg-vanilla-100)',
							}}
						>
							Gradients
						</h1>

						<div
							style={{
								display: 'grid',
								gridTemplateColumns: 'repeat(6,minmax(0,1fr))',
								gap: 20,
								marginBottom: 48,
							}}
						>
							{color.shades.map((shade) => (
								<div
									style={{
										boxShadow:
											'0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a',
									}}
									key={shade.name}
								>
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'space-between',
											width: '100%',
											height: 80,
											paddingInline: 16,
											fontWeight: 600,
											overflow: 'hidden',
											borderRadius: 'var(--radius)',
											backgroundImage: shade.value,
										}}
									></div>
									<span style={{ color: 'var(--bg-vanilla-100)' }}>{shade.name}</span>
								</div>
							))}
						</div>
					</div>
				))}
		</div>
	);
}

export default ColorPalette;
