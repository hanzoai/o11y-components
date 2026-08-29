import { Code, Settings } from '@signozhq/icons';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ResizablePanel> = {
	title: 'Primitive Components/Resizable/ResizablePanel',
	component: ResizablePanel,
	argTypes: {
		defaultSize: {
			control: 'text',
			description:
				'Default size of Panel within its parent group; default is auto-assigned based on the total number of Panels.',
			table: { category: 'Layout', type: { summary: 'string | number' } },
		},
		minSize: {
			control: 'text',
			description: 'Minimum size of Panel within its parent group; defaults to 0%.',
			table: { category: 'Layout', type: { summary: 'string | number' } },
		},
		maxSize: {
			control: 'text',
			description: 'Maximum size of Panel within its parent group; defaults to 100%.',
			table: { category: 'Layout', type: { summary: 'string | number' } },
		},
		collapsible: {
			control: 'boolean',
			description:
				"This panel can be collapsed. ℹ️ A collapsible panel will collapse when it's size is less than of the specified minSize.",
			table: {
				category: 'Behavior',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		collapsedSize: {
			control: 'text',
			description: 'Panel size when collapsed; defaults to 0%.',
			table: { category: 'Layout', type: { summary: 'string | number' } },
		},
		disabled: {
			control: 'boolean',
			description:
				'When disabled, a panel cannot be resized either directly or indirectly (by resizing another panel).',
			table: {
				category: 'Behavior',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		groupResizeBehavior: {
			control: 'select',
			options: ['preserve-relative-size', 'preserve-pixel-size'],
			description:
				'How should this Panel behave if the parent Group is resized? Defaults to preserve-relative-size. ⚠️ A Group must contain at least one Panel with preserve-relative-size resize behavior.',
			table: {
				category: 'Behavior',
				type: { summary: "'preserve-relative-size' | 'preserve-pixel-size'" },
				defaultValue: { summary: 'preserve-relative-size' },
			},
		},
		onResize: {
			control: false,
			description:
				'Called when panel sizes change. Receives panelSize (both as a percentage of the parent Group and in pixels), id (if one was provided as a prop), and prevPanelSize (will be undefined on mount).',
			table: {
				category: 'Events',
				type: {
					summary:
						'(panelSize: PanelSize, id: string | number | undefined, prevPanelSize: PanelSize | undefined) => void',
				},
			},
		},
		panelRef: {
			control: false,
			description:
				'Exposes the following imperative API: collapse(): void, expand(): void, getSize(): number, isCollapsed(): boolean, resize(size: number): void. The usePanelRef and usePanelCallbackRef hooks are exported for convenience use in TypeScript projects.',
			table: { category: 'Advanced', type: { summary: 'Ref<PanelImperativeHandle | null>' } },
		},
		style: {
			control: false,
			description:
				'CSS properties. ⚠️ Style is applied to nested HTMLDivElement to avoid styles that interfere with Flex layout.',
			table: { category: 'Styling', type: { summary: 'CSSProperties' } },
		},
		id: {
			control: 'text',
			description:
				'Uniquely identifies this panel within the parent group. Falls back to useId when not provided. This prop is used to associate persisted group layouts with the original panel. This value will also be assigned to the data-panel attribute.',
			table: { category: 'Accessibility', type: { summary: 'string' } },
		},
		className: {
			control: 'text',
			description:
				'CSS class name. ⚠️ Class is applied to nested HTMLDivElement to avoid styles that interfere with Flex layout.',
			table: { category: 'Styling', type: { summary: 'string' } },
		},
		children: {
			control: false,
			description: 'The content to be rendered inside the panel.',
			table: { category: 'Content', type: { summary: 'ReactNode' } },
		},
		testId: {
			control: 'text',
			description: 'The testId associated with the panel for testing purposes.',
			table: { category: 'Testing', type: { summary: 'string' } },
		},
	},
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResizablePanel>;

export const Default: Story = {
	args: {
		defaultSize: '50%',
		collapsible: false,
	},
	render: (args) => (
		<div
			style={{
				height: 400,
				borderStyle: 'solid',
				borderWidth: 1,
				borderRadius: 4,
				overflow: 'hidden',
				margin: 24,
			}}
		>
			<ResizablePanelGroup orientation="horizontal">
				<ResizablePanel {...args}>
					<div
						style={{
							display: 'flex',
							height: '100%',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'var(--muted)',
						}}
					>
						<div style={{ textAlign: 'center' }}>
							<Code
								style={{
									marginInline: 'auto',
									marginBottom: 8,
									height: 24,
									width: 24,
									color: 'var(--muted-foreground)',
								}}
							/>
							<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
								Resizable Panel
							</span>
							<p
								style={{
									fontSize: 12,
									lineHeight: 1.33333,
									color: 'var(--muted-foreground)',
									marginTop: 4,
								}}
							>
								50% default size
							</p>
						</div>
					</div>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize="50%">
					<div
						style={{
							display: 'flex',
							height: '100%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>Fixed Panel</span>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	),
};

export const WithMinMaxConstraints: Story = {
	args: {
		defaultSize: '30%',
		minSize: '20%',
		maxSize: '60%',
		collapsible: false,
	},
	render: (args) => (
		<div style={{ margin: 24 }}>
			<div
				style={{ marginBottom: 16, padding: 16, backgroundColor: 'var(--muted)', borderRadius: 4 }}
			>
				<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Size Constraints:</h3>
				<ul
					className="stack-4"
					style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}
				>
					<li>• Default: 30%</li>
					<li>• Minimum: 20%</li>
					<li>• Maximum: 60%</li>
					<li>• Try resizing - it won't go beyond these limits!</li>
				</ul>
			</div>
			<div
				style={{
					height: 400,
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4,
					overflow: 'hidden',
				}}
			>
				<ResizablePanelGroup orientation="horizontal">
					<ResizablePanel {...args}>
						<div
							className="panel-blue"
							style={{
								display: 'flex',
								height: '100%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<div style={{ textAlign: 'center' }}>
								<Settings
									style={{
										marginInline: 'auto',
										marginBottom: 8,
										height: 24,
										width: 24,
										color: '#155dfc',
									}}
								/>
								<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
									Constrained Panel
								</span>
								<div
									style={{
										fontSize: 12,
										lineHeight: 1.33333,
										color: 'var(--muted-foreground)',
										marginTop: 8,
									}}
								>
									<div>Min: 20% • Max: 60%</div>
								</div>
							</div>
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize="70%">
						<div
							style={{
								display: 'flex',
								height: '100%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
								Flexible Panel
							</span>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</div>
	),
};

export const Collapsible: Story = {
	args: {
		defaultSize: '25%',
		minSize: '15%',
		maxSize: '40%',
		collapsible: true,
	},
	render: (args) => (
		<div style={{ margin: 24 }}>
			<div
				style={{ marginBottom: 16, padding: 16, backgroundColor: 'var(--muted)', borderRadius: 4 }}
			>
				<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Collapsible Panel:</h3>
				<ul
					className="stack-4"
					style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}
				>
					<li>• Drag the left panel to its minimum size to collapse it</li>
					<li>• Click the resize handle to restore it</li>
					<li>• Great for sidebars and tool panels!</li>
				</ul>
			</div>
			<div
				style={{
					height: 400,
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4,
					overflow: 'hidden',
				}}
			>
				<ResizablePanelGroup orientation="horizontal">
					<ResizablePanel {...args}>
						<div
							className="panel-green"
							style={{ display: 'flex', height: '100%', flexDirection: 'column', padding: 16 }}
						>
							<Code style={{ height: 20, width: 20, marginBottom: 8, color: '#00a544' }} />
							<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Collapsible Sidebar</h3>
							<p style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}>
								Drag me to the edge!
							</p>
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize="75%">
						<div
							style={{
								display: 'flex',
								height: '100%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<div style={{ textAlign: 'center' }}>
								<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
									Main Content
								</span>
								<p
									style={{
										fontSize: 12,
										lineHeight: 1.33333,
										color: 'var(--muted-foreground)',
										marginTop: 4,
									}}
								>
									Expands when sidebar collapses
								</p>
							</div>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</div>
	),
};

export const MultipleCollapsiblePanels: Story = {
	render: () => (
		<div style={{ margin: 24 }}>
			<div
				style={{ marginBottom: 16, padding: 16, backgroundColor: 'var(--muted)', borderRadius: 4 }}
			>
				<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Both side panels are collapsible:</h3>
				<p style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}>
					Drag either side panel to its edge to collapse it
				</p>
			</div>
			<div
				style={{
					height: 400,
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4,
					overflow: 'hidden',
				}}
			>
				<ResizablePanelGroup orientation="horizontal">
					<ResizablePanel defaultSize="20%" minSize="15%" maxSize="35%" collapsible={true}>
						<div
							style={{
								display: 'flex',
								height: '100%',
								flexDirection: 'column',
								padding: 16,
								backgroundColor: 'var(--muted)',
							}}
						>
							<Settings
								style={{ height: 20, width: 20, marginBottom: 8, color: 'var(--muted-foreground)' }}
							/>
							<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Left Sidebar</h3>
							<p style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}>
								Collapsible
							</p>
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize="60%">
						<div
							style={{
								display: 'flex',
								height: '100%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<div style={{ textAlign: 'center' }}>
								<Code
									style={{
										marginInline: 'auto',
										marginBottom: 8,
										height: 32,
										width: 32,
										color: 'var(--muted-foreground)',
									}}
								/>
								<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
									Main Editor
								</span>
								<p
									style={{
										fontSize: 12,
										lineHeight: 1.33333,
										color: 'var(--muted-foreground)',
										marginTop: 4,
									}}
								>
									Always visible
								</p>
							</div>
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize="20%" minSize="15%" maxSize="35%" collapsible={true}>
						<div
							style={{
								display: 'flex',
								height: '100%',
								flexDirection: 'column',
								padding: 16,
								backgroundColor: 'var(--muted)',
							}}
						>
							<Settings
								style={{ height: 20, width: 20, marginBottom: 8, color: 'var(--muted-foreground)' }}
							/>
							<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Right Sidebar</h3>
							<p style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}>
								Collapsible
							</p>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</div>
	),
};

export const VerticalPanels: Story = {
	args: {
		defaultSize: '30%',
		minSize: '20%',
		collapsible: true,
	},
	render: (args) => (
		<div style={{ margin: 24 }}>
			<div
				style={{ marginBottom: 16, padding: 16, backgroundColor: 'var(--muted)', borderRadius: 4 }}
			>
				<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Vertical collapsible panel:</h3>
				<p style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}>
					Drag the bottom panel down to collapse it
				</p>
			</div>
			<div
				style={{
					height: 500,
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4,
					overflow: 'hidden',
				}}
			>
				<ResizablePanelGroup orientation="vertical">
					<ResizablePanel defaultSize="70%">
						<div
							style={{
								display: 'flex',
								height: '100%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<div style={{ textAlign: 'center' }}>
								<Code
									style={{
										marginInline: 'auto',
										marginBottom: 8,
										height: 32,
										width: 32,
										color: 'var(--muted-foreground)',
									}}
								/>
								<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
									Editor Area
								</span>
							</div>
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel {...args}>
						<div
							style={{
								display: 'flex',
								height: '100%',
								flexDirection: 'column',
								padding: 16,
								backgroundColor: 'var(--muted)',
							}}
						>
							<Settings
								style={{ height: 20, width: 20, marginBottom: 8, color: 'var(--muted-foreground)' }}
							/>
							<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Terminal</h3>
							<p style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}>
								Drag down to collapse
							</p>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
		</div>
	),
};
