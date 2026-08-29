import { Check, ChevronLeft, ChevronRight, Code, Star, Trash } from '@signozhq/icons';
import { Button, ButtonBackground, ButtonColor, ButtonSize, ButtonVariant } from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { buttonArgTypes, COLORS, VARIANTS } from './shared/button-arg-types.js';

const meta: Meta<typeof Button> = {
	title: 'Primitive Components/Button',
	component: Button,
	decorators: [],
	args: {
		onClick: fn(),
		onDoubleClick: fn(),
		variant: ButtonVariant.Solid,
		size: ButtonSize.MD,
		loading: false,
		disabled: false,
		type: 'button',
	},
	argTypes: buttonArgTypes,
	parameters: {
		layout: 'fullscreen',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/...',
		},
		backgrounds: {
			disable: true,
		},
		controls: { disable: false },
		docs: {
			source: {
				type: 'code',
			},
		},
		test: { dangerouslyIgnoreUnhandledErrors: true },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	parameters: {
		docs: { story: { autoplay: true } },
	},
	argTypes: {
		prefix: {
			control: 'select',
			options: ['chevron-left', 'chevron-right', 'star', 'code'],
			description:
				'The prefix for the button, will be displayed before the button text, can be anything such as an icon or a text. For this playground, the only options are icons.',
			table: {
				type: { summary: 'React.ReactElement' },
			},
		},
		suffix: {
			control: 'select',
			options: ['trash', 'check', 'star', 'code'],
			description:
				'The suffix for the button, will be displayed after the button text, can be anything such as an icon or a text. For this playground, the only options are icons.',
			table: {
				type: { summary: 'React.ReactElement' },
			},
		},
	},
	render: ({ prefix, suffix, ...args }) => {
		if (args.asChild) {
			return (
				<div>
					<Button asChild {...args}>
						<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
							Go to Google
						</a>
					</Button>
				</div>
			);
		}

		switch (prefix?.toString()) {
			case 'chevron-left':
				prefix = <ChevronLeft />;
				break;
			case 'chevron-right':
				prefix = <ChevronRight />;
				break;
			case 'star':
				prefix = <Star />;
				break;
			case 'code':
				prefix = <Code />;
				break;
			default:
				prefix = undefined;
				break;
		}

		switch (suffix?.toString()) {
			case 'trash':
				suffix = <Trash />;
				break;
			case 'check':
				suffix = <Check />;
				break;
			case 'star':
				suffix = <Star />;
				break;
			case 'code':
				suffix = <Code />;
				break;
			default:
				suffix = undefined;
				break;
		}

		return (
			<Button testId="default-button" prefix={prefix} suffix={suffix} {...args}>
				Click Me
			</Button>
		);
	},
};

// Main showcase of all button styles
export const ButtonShowcase: Story = {
	parameters: {
		docs: { story: { autoplay: true } },
	},
	render: () => (
		<div style={{ backgroundColor: 'var(--background)', padding: 32, borderRadius: 4 }}>
			<div className="stack-48">
				{COLORS.map((color) => (
					<div key={color} className="stack-16">
						<h2
							style={{
								fontSize: 16,
								lineHeight: 1.5,
								fontWeight: 600,
								textTransform: 'capitalize',
								color: 'var(--foreground)',
							}}
						>
							{color}
						</h2>
						<div style={{ display: 'flex', gap: 16 }}>
							{/* Filter variants based on color */}
							{VARIANTS.filter(
								(variant) =>
									// Only show outlined and dashed for secondary
									color === 'secondary' || !(variant === 'outlined' || variant === 'dashed')
							).map((variant) => (
								<div
									key={variant}
									style={{
										display: 'grid',
										gridTemplateColumns: 'repeat(1,minmax(0,1fr))',
										gap: 16,
									}}
								>
									<Button
										variant={variant}
										color={color}
										prefix={<Star />}
										suffix={<Star />}
										title={`${variant} ${color}`}
									>
										{variant}
									</Button>
									<Button
										variant={variant}
										color={color}
										prefix={<Star />}
										suffix={<Star />}
										disabled
										title={`${variant} disabled`}
									>
										{variant} disabled
									</Button>
									<Button
										variant={variant}
										color={color}
										prefix={<Star />}
										suffix={<Star />}
										loading
										title={`${variant} loading`}
									>
										{variant} loading
									</Button>
									<Button
										variant={variant}
										color={color}
										size="icon"
										title={`${variant} icon only`}
									>
										{<Star />}
									</Button>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	),
};

// Size Variations
export const Sizes: Story = {
	parameters: {
		controls: { disable: false },
	},
	args: {
		variant: ButtonVariant.Solid,
		color: ButtonColor.Primary,
	},
	argTypes: {
		variant: {
			control: 'select',
			options: VARIANTS,
		},
		color: {
			control: 'select',
			options: COLORS,
		},
	},
	render: (args) => (
		<div className="stack-32" style={{ padding: 32 }}>
			<div className="stack-16">
				<h2 style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600 }}>Size Variations</h2>
				<div className="stack-32">
					{[ButtonSize.SM, ButtonSize.MD].map((size) => (
						<div key={size} className="stack-16">
							<h3
								style={{
									fontSize: 14,
									lineHeight: 1.42857,
									fontWeight: 500,
									textTransform: 'capitalize',
								}}
							>
								{size}
							</h3>
							<Button {...args} size={size} prefix={<ChevronLeft />} suffix={<ChevronRight />}>
								{size} Button
							</Button>
						</div>
					))}
				</div>
			</div>
		</div>
	),
};

// Icon Only Buttons
export const IconButtons: Story = {
	parameters: {
		controls: { disable: false },
	},
	args: {
		variant: ButtonVariant.Solid,
		color: ButtonColor.Primary,
	},
	argTypes: {
		variant: {
			control: 'select',
			options: VARIANTS,
		},
		color: {
			control: 'select',
			options: COLORS,
		},
	},
	render: (args) => (
		<div
			className="stack-32"
			style={{ padding: 32, borderRadius: 4, backgroundColor: 'var(--background)' }}
		>
			<div className="stack-16">
				<h2 style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, color: 'var(--foreground)' }}>
					Icon Only Buttons
				</h2>
				<p>
					Icon only buttons are buttons that only have an icon as their content. These buttons are
					useful when you need to display an icon in a button without any text. You can just specify
					the button as:
					<pre>&lt;Button suffix=&#123;&lt;Code /&gt;&#125; size=&quot;icon&quot;/&gt;</pre>
				</p>
				<div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
					{VARIANTS.map((variant) => (
						<Button
							{...args}
							key={variant}
							variant={variant}
							suffix={<Code size={32} />}
							size="icon"
						/>
					))}
				</div>
			</div>
			<div className="stack-16">
				<h2 style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, color: 'var(--foreground)' }}>
					Icon Button Sizes
				</h2>
				<p>
					By default, the icon will be displayed at the size of the button. You can also specify the
					size of the icon by passing the "size" prop to the icon.
				</p>
				<div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
					{[ButtonSize.SM, ButtonSize.MD, ButtonSize.Icon].map((size) => (
						<Button {...args} key={size} size={size} prefix={<Code />} />
					))}
				</div>
			</div>
		</div>
	),
};

// Add Action Button Story
export const ActionButtons: Story = {
	parameters: {
		controls: { disable: false },
	},
	argTypes: {
		background: {
			control: 'select',
			options: [
				ButtonBackground.Ink500,
				ButtonBackground.Ink400,
				ButtonBackground.Vanilla100,
				ButtonBackground.Vanilla200,
			],
			description: 'The background context for the action button',
		},
	},
	args: {
		variant: ButtonVariant.Action,
		background: ButtonBackground.Ink500,
	},
	render: () => (
		<div className="stack-32">
			<div>
				<h2 style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, marginBottom: 16 }}>
					Action Buttons
				</h2>
				<p style={{ fontSize: 14, lineHeight: 1.42857, marginBottom: 16 }}>
					Action buttons adapt their style based on the background they`re placed on.
				</p>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 32 }}>
					{/* ink-500 background */}
					<div style={{ padding: 24, backgroundColor: 'var(--bg-ink-500)', borderRadius: 4 }}>
						<p style={{ color: 'var(--bg-vanilla-100)', marginBottom: 16 }}>
							On ink-500 background
						</p>
						<Button
							variant={ButtonVariant.Action}
							background={ButtonBackground.Ink500}
							prefix={<ChevronLeft />}
							suffix={<ChevronRight />}
						>
							Action Button
						</Button>
					</div>

					{/* ink-400 background */}
					<div style={{ padding: 24, backgroundColor: 'var(--bg-ink-400)', borderRadius: 4 }}>
						<p style={{ color: 'var(--bg-vanilla-100)', marginBottom: 16 }}>
							On ink-400 background
						</p>
						<Button
							variant={ButtonVariant.Action}
							background={ButtonBackground.Ink400}
							prefix={<ChevronLeft />}
							suffix={<ChevronRight />}
						>
							Action Button
						</Button>
					</div>

					{/* vanilla-100 background */}
					<div style={{ padding: 24, backgroundColor: 'var(--bg-vanilla-100)', borderRadius: 4 }}>
						<p style={{ color: 'var(--bg-slate-500)', marginBottom: 16 }}>
							On vanilla-100 background
						</p>
						<Button
							variant={ButtonVariant.Action}
							background={ButtonBackground.Vanilla100}
							prefix={<ChevronLeft />}
							suffix={<ChevronRight />}
						>
							Action Button
						</Button>
					</div>

					{/* vanilla-200 background */}
					<div style={{ padding: 24, backgroundColor: 'var(--bg-vanilla-200)', borderRadius: 4 }}>
						<p style={{ color: 'var(--bg-slate-500)', marginBottom: 16 }}>
							On vanilla-200 background
						</p>
						<Button
							variant={ButtonVariant.Action}
							background={ButtonBackground.Vanilla200}
							prefix={<ChevronLeft />}
							suffix={<ChevronRight />}
						>
							Action Button
						</Button>
					</div>
				</div>
			</div>

			<div>
				<h3 style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500, marginBottom: 12 }}>
					Disabled Action Buttons
				</h3>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 32 }}>
					{/* Disabled examples */}
					<div style={{ padding: 24, backgroundColor: 'var(--bg-ink-500)', borderRadius: 4 }}>
						<Button
							variant={ButtonVariant.Action}
							background={ButtonBackground.Ink500}
							disabled
							prefix={<ChevronLeft />}
							suffix={<ChevronRight />}
						>
							Disabled Action Button
						</Button>
					</div>
					<div style={{ padding: 24, backgroundColor: 'var(--bg-vanilla-100)', borderRadius: 4 }}>
						<Button
							variant={ButtonVariant.Action}
							background={ButtonBackground.Vanilla100}
							disabled
							prefix={<ChevronLeft />}
							suffix={<ChevronRight />}
						>
							Disabled Action Button
						</Button>
					</div>
				</div>
			</div>
		</div>
	),
};
