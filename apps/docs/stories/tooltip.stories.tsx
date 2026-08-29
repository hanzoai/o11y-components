import {
	Button,
	ButtonColor,
	ButtonVariant,
	TooltipContent,
	TooltipProvider,
	TooltipRoot,
	TooltipSimple,
	TooltipTrigger,
} from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const SIDES = ['top', 'right', 'bottom', 'left'] as const;
const ALIGNS = ['start', 'center', 'end'] as const;

const meta: Meta<typeof TooltipRoot> = {
	title: 'Primitive Components/Tooltip',
	component: TooltipRoot,
	argTypes: {
		open: {
			control: 'boolean',
			description: 'The controlled open state of the tooltip.',
			table: { category: 'State', type: { summary: 'boolean' } },
		},
		defaultOpen: {
			control: 'boolean',
			description: 'The open state of the tooltip when it is initially rendered.',
			table: { category: 'State', type: { summary: 'boolean' } },
		},
		onOpenChange: {
			control: false,
			description: 'Event handler called when the open state of the tooltip changes.',
			table: { category: 'Events', type: { summary: '(open: boolean) => void' } },
		},
		delayDuration: {
			control: 'number',
			description:
				'The duration from when the pointer enters the trigger until the tooltip gets opened. This will override the prop with the same name passed to Provider.',
			table: {
				category: 'Behavior',
				type: { summary: 'number' },
				defaultValue: { summary: '700' },
			},
		},
		disableHoverableContent: {
			control: 'boolean',
			description:
				'When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.',
			table: {
				category: 'Behavior',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		testId: {
			control: 'text',
			description: 'The test id of the tooltip root.',
			table: { category: 'Testing', type: { summary: 'string' } },
		},
	},
	parameters: {
		layout: 'fullscreen',
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/egMidgk6VJDXTumxcCYUl1/Periscope---Primitives?node-id=12-746&m=dev',
		},
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TooltipRoot>;

export const Default: Story = {
	render: () => (
		<TooltipProvider delayDuration={0}>
			<div style={{ padding: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<TooltipSimple title="I'm a basic tooltip" arrow>
					<Button variant={ButtonVariant.Solid} color={ButtonColor.Secondary}>
						Hover me
					</Button>
				</TooltipSimple>
			</div>
		</TooltipProvider>
	),
};

export const TooltipShowcase: Story = {
	parameters: {
		docs: { story: { autoplay: true } },
	},
	render: () => (
		<TooltipProvider delayDuration={0}>
			<div
				style={{
					backgroundColor: 'var(--background)',
					padding: 32,
					borderRadius: 4,
					minHeight: 600,
				}}
			>
				<div className="stack-64">
					<div className="stack-16">
						<h2
							style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, color: 'var(--foreground)' }}
						>
							Positions
						</h2>
						<div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
							{SIDES.map((side) => (
								<TooltipRoot key={side}>
									<TooltipTrigger asChild>
										<Button
											variant={ButtonVariant.Solid}
											color={ButtonColor.Secondary}
											style={{ textTransform: 'capitalize' }}
										>
											{side}
										</Button>
									</TooltipTrigger>
									<TooltipContent side={side} arrow>
										Tooltip on {side}
									</TooltipContent>
								</TooltipRoot>
							))}
						</div>
					</div>

					<div className="stack-16">
						<h2
							style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, color: 'var(--foreground)' }}
						>
							Align variations
						</h2>
						<div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
							{ALIGNS.map((align) => (
								<TooltipRoot key={align}>
									<TooltipTrigger asChild>
										<Button
											variant={ButtonVariant.Solid}
											color={ButtonColor.Secondary}
											style={{ textTransform: 'capitalize' }}
										>
											{align}
										</Button>
									</TooltipTrigger>
									<TooltipContent side="top" align={align} arrow>
										Align {align}
									</TooltipContent>
								</TooltipRoot>
							))}
						</div>
					</div>

					<div className="stack-16">
						<h2
							style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, color: 'var(--foreground)' }}
						>
							With / without arrow
						</h2>
						<div style={{ display: 'flex', gap: 16 }}>
							<TooltipSimple title="No arrow" arrow={false}>
								<Button variant={ButtonVariant.Solid} color={ButtonColor.Secondary}>
									Without arrow
								</Button>
							</TooltipSimple>
							<TooltipSimple title="With arrow" arrow>
								<Button variant={ButtonVariant.Solid} color={ButtonColor.Secondary}>
									With arrow
								</Button>
							</TooltipSimple>
						</div>
					</div>

					<div className="stack-16">
						<h2
							style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, color: 'var(--foreground)' }}
						>
							Delay variations
						</h2>
						<div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
							<TooltipSimple title="No delay (0ms)" delayDuration={0}>
								<Button variant={ButtonVariant.Solid} color={ButtonColor.Secondary}>
									0ms
								</Button>
							</TooltipSimple>
							<TooltipSimple title="300ms delay" delayDuration={300}>
								<Button variant={ButtonVariant.Solid} color={ButtonColor.Secondary}>
									300ms
								</Button>
							</TooltipSimple>
							<TooltipSimple title="500ms delay" delayDuration={500}>
								<Button variant={ButtonVariant.Solid} color={ButtonColor.Secondary}>
									500ms
								</Button>
							</TooltipSimple>
							<TooltipSimple title="700ms delay (default)" delayDuration={700}>
								<Button variant={ButtonVariant.Solid} color={ButtonColor.Secondary}>
									700ms
								</Button>
							</TooltipSimple>
						</div>
					</div>

					<div className="stack-16">
						<h2
							style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, color: 'var(--foreground)' }}
						>
							Default open
						</h2>
						<TooltipSimple defaultOpen title="I am open by default">
							<Button variant={ButtonVariant.Solid} color={ButtonColor.Secondary}>
								Hover or focus to see tooltip
							</Button>
						</TooltipSimple>
					</div>

					<div className="stack-16">
						<h2
							style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, color: 'var(--foreground)' }}
						>
							Custom content (composition)
						</h2>
						<TooltipRoot>
							<TooltipTrigger asChild>
								<Button variant={ButtonVariant.Solid} color={ButtonColor.Primary}>
									Rich content
								</Button>
							</TooltipTrigger>
							<TooltipContent side="top" arrow>
								<span style={{ fontWeight: 500 }}>Custom tooltip</span>
								<br />
								<span style={{ fontSize: 14, lineHeight: 1.42857, opacity: 0.9 }}>
									With multiple lines
								</span>
							</TooltipContent>
						</TooltipRoot>
					</div>
				</div>
			</div>
		</TooltipProvider>
	),
};
