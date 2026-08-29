import { ChevronDown, Moon, Palette, Sun } from '@signozhq/icons';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const THEMES = ['default', 'blue-demo'] as const;
type Theme = (typeof THEMES)[number];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModeDecorator = (Story: any, context: { title?: string }) => {
	const isDesignSystemPages = context?.title?.startsWith('Design System');
	const [isDarkMode, setIsDarkMode] = useState(true);
	const [theme, setTheme] = useState<Theme>('default');
	const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	const toggleMode = useCallback(() => {
		setIsDarkMode(!isDarkMode);
		document.documentElement.classList.toggle('dark', !isDarkMode);
	}, [isDarkMode]);

	const selectTheme = useCallback((newTheme: Theme) => {
		setTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		setIsThemeMenuOpen(false);
	}, []);

	useEffect(() => {
		document.documentElement.classList.add('dark');
		document.documentElement.setAttribute('data-theme', 'default');
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (!target.closest('[data-theme-selector]')) {
				setIsThemeMenuOpen(false);
			}
		};
		if (isThemeMenuOpen) {
			document.addEventListener('click', handleClickOutside);
			return () => document.removeEventListener('click', handleClickOutside);
		}
	}, [isThemeMenuOpen]);

	const buttonStyle = {
		backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
		borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
		color: isDarkMode ? '#ffffff' : '#000000',
		padding: '0.375rem',
	};

	const controls = (
		<div
			style={{
				position: 'fixed',
				top: 16,
				right: 16,
				zIndex: 50,
				display: 'flex',
				alignItems: 'center',
				gap: 8,
			}}
		>
			<div style={{ position: 'relative' }} data-theme-selector>
				<button
					type="button"
					onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
					className="toolbar-button"
					aria-label="Select theme"
					title="Select Theme"
					style={buttonStyle}
				>
					<Palette style={{ width: 12, height: 12 }} />
					<span style={{ fontSize: 12, lineHeight: 1.33333, textTransform: 'capitalize' }}>
						{theme}
					</span>
					<ChevronDown style={{ width: 12, height: 12 }} />
				</button>
				{isThemeMenuOpen && (
					<div
						style={{
							position: 'absolute',
							top: '100%',
							right: 0,
							marginTop: 4,
							borderRadius: 4,
							borderStyle: 'solid',
							borderWidth: 1,
							boxShadow:
								'0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a',
							overflow: 'hidden',
							minWidth: 120,
							backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
							borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
						}}
					>
						{THEMES.map((t) => (
							<button
								type="button"
								key={t}
								onClick={() => selectTheme(t)}
								style={{
									width: '100%',
									paddingInline: 12,
									paddingBlock: 8,
									textAlign: 'left',
									fontSize: 12,
									lineHeight: 1.33333,
									textTransform: 'capitalize',
									transitionProperty:
										'color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to',
									transitionTimingFunction: 'cubic-bezier(.4, 0, .2, 1)',
									transitionDuration: '.15s',
									cursor: 'pointer',
									backgroundColor:
										theme === t ? (isDarkMode ? '#374151' : '#e5e7eb') : 'transparent',
									color: isDarkMode ? '#ffffff' : '#000000',
								}}
							>
								{t}
							</button>
						))}
					</div>
				)}
			</div>
			<button
				type="button"
				onClick={toggleMode}
				className="toolbar-button"
				aria-label="Toggle dark mode"
				title="Toggle Dark Mode"
				style={buttonStyle}
			>
				{isDarkMode ? (
					<Sun style={{ width: 12, height: 12 }} />
				) : (
					<Moon style={{ width: 12, height: 12 }} />
				)}
			</button>
		</div>
	);

	return (
		<>
			{mounted && !isDesignSystemPages && createPortal(controls, document.body)}
			<Story />
		</>
	);
};
