import { ChartBar, Code, Database, FileText, Settings, Terminal } from '@signozhq/icons';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
	useDefaultLayout,
} from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof ResizablePanelGroup> = {
	title: 'Primitive Components/Resizable',
	component: ResizablePanelGroup,
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		orientation: {
			control: 'select',
			options: ['horizontal', 'vertical'],
			description:
				'Specifies the resizable orientation ("horizontal" or "vertical"); defaults to "horizontal"',
			table: {
				category: 'Layout',
				type: { summary: "'horizontal' | 'vertical'" },
				defaultValue: { summary: 'horizontal' },
			},
		},
		defaultLayout: {
			control: false,
			description:
				'Default layout for the Group. This value allows layouts to be remembered between page reloads.',
			table: { category: 'Layout', type: { summary: 'Layout' } },
		},
		onLayoutChange: {
			control: false,
			description:
				"Called when the Group's layout is changing. ⚠️ For layout changes caused by pointer events, this method is called each time the pointer is moved. For most cases, it is recommended to use the `onLayoutChanged` callback instead.",
			table: { category: 'Events', type: { summary: '(layout: Layout) => void' } },
		},
		onLayoutChanged: {
			control: false,
			description:
				"Called after the Group's layout has been changed. For layout changes caused by pointer events, this method is not called until the pointer has been released. This method is recommended when saving layouts to some storage api.",
			table: { category: 'Events', type: { summary: '(layout: Layout) => void' } },
		},
		disabled: {
			control: 'boolean',
			description: 'Disable resize functionality.',
			table: {
				category: 'Behavior',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		disableCursor: {
			control: 'boolean',
			description:
				'This library sets custom mouse cursor styles to indicate drag state. Use this prop to disable that behavior for Panels and Separators in this group.',
			table: {
				category: 'Behavior',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		resizeTargetMinimumSize: {
			control: false,
			description:
				'Minimum size of the resizable hit target area (either Separator or Panel edge). This threshold ensures are large enough to avoid mis-clicks.',
			table: { category: 'Behavior', type: { summary: '{ coarse: number; fine: number }' } },
		},
		groupRef: {
			control: false,
			description:
				'Exposes the following imperative API: getLayout(): Layout and setLayout(layout: Layout): void. The useGroupRef and useGroupCallbackRef hooks are exported for convenience use in TypeScript projects.',
			table: { category: 'Advanced', type: { summary: 'Ref<GroupImperativeHandle | null>' } },
		},
		style: {
			control: false,
			description:
				'CSS properties. ⚠️ The following styles cannot be overridden: display, flex-direction, flex-wrap, and overflow.',
			table: { category: 'Styling', type: { summary: 'CSSProperties' } },
		},
		id: {
			control: 'text',
			description:
				'Uniquely identifies this group within an application. Falls back to useId when not provided. This value will also be assigned to the data-group attribute.',
			table: { category: 'Accessibility', type: { summary: 'string' } },
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes to apply to the panel group',
			table: { category: 'Styling', type: { summary: 'string' } },
		},
		children: {
			control: false,
			description: 'Panel and Separator components that comprise this group.',
			table: { category: 'Content', type: { summary: 'ReactNode' } },
		},
		testId: {
			control: 'text',
			description: 'The testId associated with the panel group for testing purposes.',
			table: { category: 'Testing', type: { summary: 'string' } },
		},
	},
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
	render: () => (
		<div className="stack-32" style={{ padding: 24, backgroundColor: 'var(--background)' }}>
			<div>
				<h2
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 16,
						color: 'var(--foreground)',
					}}
				>
					Horizontal Layout
				</h2>
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
						<ResizablePanel defaultSize="25%" minSize="20%">
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
									<FileText
										style={{
											marginInline: 'auto',
											marginBottom: 8,
											height: 32,
											width: 32,
											color: 'var(--muted-foreground)',
										}}
									/>
									<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
										File Explorer
									</span>
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
										Code Editor
									</span>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="25%" minSize="20%">
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
									<Settings
										style={{
											marginInline: 'auto',
											marginBottom: 8,
											height: 32,
											width: 32,
											color: 'var(--muted-foreground)',
										}}
									/>
									<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
										Properties
									</span>
								</div>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>

			<div>
				<h2
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 16,
						color: 'var(--foreground)',
					}}
				>
					Vertical Layout
				</h2>
				<div
					style={{
						height: 400,
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
									<ChartBar
										style={{
											marginInline: 'auto',
											marginBottom: 8,
											height: 32,
											width: 32,
											color: 'var(--muted-foreground)',
										}}
									/>
									<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
										Main Dashboard
									</span>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="30%" minSize="25%">
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
									<Terminal
										style={{
											marginInline: 'auto',
											marginBottom: 8,
											height: 32,
											width: 32,
											color: 'var(--muted-foreground)',
										}}
									/>
									<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
										Console Output
									</span>
								</div>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>
		</div>
	),
};

export const HorizontalLayout: Story = {
	render: () => (
		<div className="stack-24" style={{ padding: 24, backgroundColor: 'var(--background)' }}>
			<div>
				<h2
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 16,
						color: 'var(--foreground)',
					}}
				>
					Two Panel Layout
				</h2>
				<div
					style={{
						height: 300,
						borderStyle: 'solid',
						borderWidth: 1,
						borderRadius: 4,
						overflow: 'hidden',
					}}
				>
					<ResizablePanelGroup orientation="horizontal">
						<ResizablePanel defaultSize="30%" minSize="20%" maxSize="50%">
							<div
								style={{
									display: 'flex',
									height: '100%',
									flexDirection: 'column',
									padding: 16,
									backgroundColor: 'var(--muted)',
								}}
							>
								<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Sidebar</h3>
								<p style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}>
									Navigation and tools
								</p>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="70%">
							<div
								style={{ display: 'flex', height: '100%', flexDirection: 'column', padding: 16 }}
							>
								<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Main Content</h3>
								<p style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}>
									Primary workspace area
								</p>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>

			<div>
				<h2
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 16,
						color: 'var(--foreground)',
					}}
				>
					Three Panel Layout
				</h2>
				<div
					style={{
						height: 300,
						borderStyle: 'solid',
						borderWidth: 1,
						borderRadius: 4,
						overflow: 'hidden',
					}}
				>
					<ResizablePanelGroup orientation="horizontal">
						<ResizablePanel defaultSize="25%" minSize="15%" maxSize="40%">
							<div
								style={{
									display: 'flex',
									height: '100%',
									flexDirection: 'column',
									padding: 16,
									backgroundColor: 'var(--muted)',
								}}
							>
								<FileText
									style={{
										height: 20,
										width: 20,
										marginBottom: 8,
										color: 'var(--muted-foreground)',
									}}
								/>
								<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Explorer</h3>
								<div
									className="stack-4"
									style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}
								>
									<div>📁 src/</div>
									<div style={{ marginLeft: 12 }}>📄 index.ts</div>
									<div style={{ marginLeft: 12 }}>📄 app.tsx</div>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="50%">
							<div
								style={{ display: 'flex', height: '100%', flexDirection: 'column', padding: 16 }}
							>
								<Code
									style={{
										height: 20,
										width: 20,
										marginBottom: 8,
										color: 'var(--muted-foreground)',
									}}
								/>
								<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Editor</h3>
								<div
									style={{
										flex: 1,
										backgroundColor: '#020618',
										borderRadius: 4,
										color: '#05df72',
										padding: 12,
										fontFamily:
											'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
										fontSize: 12,
										lineHeight: 1.33333,
									}}
								>
									<div>function App() {'{'}</div>
									<div style={{ marginLeft: 8 }}>return &lt;h1&gt;Hello World&lt;/h1&gt;;</div>
									<div>{'}'}</div>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="25%" minSize="20%" maxSize="40%">
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
									style={{
										height: 20,
										width: 20,
										marginBottom: 8,
										color: 'var(--muted-foreground)',
									}}
								/>
								<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Properties</h3>
								<div
									className="stack-8"
									style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}
								>
									<div>Type: Component</div>
									<div>Props: 3</div>
									<div>State: Active</div>
								</div>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>

			<div>
				<h2
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 16,
						color: 'var(--foreground)',
					}}
				>
					Dashboard Layout
				</h2>
				<div
					style={{
						height: 300,
						borderStyle: 'solid',
						borderWidth: 1,
						borderRadius: 4,
						overflow: 'hidden',
					}}
				>
					<ResizablePanelGroup orientation="horizontal">
						<ResizablePanel defaultSize="20%" minSize="15%" maxSize="30%">
							<div
								style={{
									display: 'flex',
									height: '100%',
									flexDirection: 'column',
									padding: 16,
									backgroundColor: 'var(--muted)',
								}}
							>
								<ChartBar
									style={{
										height: 20,
										width: 20,
										marginBottom: 8,
										color: 'var(--muted-foreground)',
									}}
								/>
								<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Metrics</h3>
								<div
									className="stack-4"
									style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}
								>
									<div>CPU: 45%</div>
									<div>Memory: 2.1GB</div>
									<div>Disk: 67%</div>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle />
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
									<div
										style={{
											backgroundImage:
												'linear-gradient(to bottom right in oklab, #54a2ff, #ac4bff)',
											height: 128,
											width: 128,
											marginInline: 'auto',
											marginBottom: 16,
											borderRadius: 4,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										<span style={{ color: '#fff', fontWeight: 700 }}>CHART</span>
									</div>
									<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
										Performance Graph
									</span>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle />
						<ResizablePanel defaultSize="20%" minSize="15%" maxSize="30%">
							<div
								style={{
									display: 'flex',
									height: '100%',
									flexDirection: 'column',
									padding: 16,
									backgroundColor: 'var(--muted)',
								}}
							>
								<Database
									style={{
										height: 20,
										width: 20,
										marginBottom: 8,
										color: 'var(--muted-foreground)',
									}}
								/>
								<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Status</h3>
								<div
									className="stack-4"
									style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}
								>
									<div>🟢 API Online</div>
									<div>🟢 DB Connected</div>
									<div>🟡 Cache Warming</div>
								</div>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>
		</div>
	),
};

export const VerticalLayout: Story = {
	render: () => (
		<div className="stack-24" style={{ padding: 24, backgroundColor: 'var(--background)' }}>
			<div>
				<h2
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 16,
						color: 'var(--foreground)',
					}}
				>
					Application Layout
				</h2>
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
						<ResizablePanel defaultSize="15%" minSize="10%" maxSize="25%">
							<div
								style={{
									display: 'flex',
									height: '100%',
									alignItems: 'center',
									justifyContent: 'space-between',
									paddingInline: 24,
									paddingBlock: 12,
									backgroundColor: 'var(--muted)',
									borderBottomStyle: 'solid',
									borderBottomWidth: 1,
								}}
							>
								<h3 style={{ fontWeight: 500 }}>Navigation Bar</h3>
								<div style={{ display: 'flex', gap: 8 }}>
									<div
										style={{ width: 8, height: 8, backgroundColor: '#00c758', borderRadius: 9999 }}
									></div>
									<div
										style={{ width: 8, height: 8, backgroundColor: '#edb200', borderRadius: 9999 }}
									></div>
									<div
										style={{ width: 8, height: 8, backgroundColor: '#fb2c36', borderRadius: 9999 }}
									></div>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="65%">
							<div
								style={{ display: 'flex', height: '100%', flexDirection: 'column', padding: 24 }}
							>
								<h3 style={{ fontWeight: 500, marginBottom: 16 }}>Main Content Area</h3>
								<div
									className="panel-slate"
									style={{
										flex: 1,
										borderRadius: 4,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<span
										style={{ fontSize: 18, lineHeight: 1.55556, color: 'var(--muted-foreground)' }}
									>
										Primary workspace content
									</span>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="20%" minSize="15%" maxSize="30%">
							<div
								style={{
									display: 'flex',
									height: '100%',
									flexDirection: 'column',
									padding: 16,
									backgroundColor: 'var(--muted)',
									borderTopStyle: 'solid',
									borderTopWidth: 1,
								}}
							>
								<Terminal
									style={{
										height: 20,
										width: 20,
										marginBottom: 8,
										color: 'var(--muted-foreground)',
									}}
								/>
								<h3 style={{ fontWeight: 500, marginBottom: 12 }}>Footer / Status Bar</h3>
								<div
									className="stack-4"
									style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}
								>
									<div>Ready • Line 42, Col 12</div>
									<div>UTF-8 • TypeScript • Git:main</div>
								</div>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>

			<div>
				<h2
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 16,
						color: 'var(--foreground)',
					}}
				>
					Chat Interface
				</h2>
				<div
					style={{
						height: 400,
						borderStyle: 'solid',
						borderWidth: 1,
						borderRadius: 4,
						overflow: 'hidden',
					}}
				>
					<ResizablePanelGroup orientation="vertical">
						<ResizablePanel defaultSize="75%">
							<div
								style={{ display: 'flex', height: '100%', flexDirection: 'column', padding: 16 }}
							>
								<h3 style={{ fontWeight: 500, marginBottom: 12 }}>Messages</h3>
								<div className="stack-12" style={{ flex: 1 }}>
									<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
										<div
											style={{
												backgroundColor: 'var(--muted)',
												paddingInline: 12,
												paddingBlock: 8,
												borderRadius: 4,
												maxWidth: 320,
											}}
										>
											<p style={{ fontSize: 14, lineHeight: 1.42857 }}>
												Hello! How can I help you today?
											</p>
										</div>
									</div>
									<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
										<div
											style={{
												backgroundColor: 'var(--primary)',
												color: 'var(--primary-foreground)',
												paddingInline: 12,
												paddingBlock: 8,
												borderRadius: 4,
												maxWidth: 320,
											}}
										>
											<p style={{ fontSize: 14, lineHeight: 1.42857 }}>
												I need help with the resizable panels.
											</p>
										</div>
									</div>
									<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
										<div
											style={{
												backgroundColor: 'var(--muted)',
												paddingInline: 12,
												paddingBlock: 8,
												borderRadius: 4,
												maxWidth: 320,
											}}
										>
											<p style={{ fontSize: 14, lineHeight: 1.42857 }}>
												Sure! You can drag the handles to resize panels.
											</p>
										</div>
									</div>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="25%" minSize="20%" maxSize="40%">
							<div
								style={{
									display: 'flex',
									height: '100%',
									flexDirection: 'column',
									padding: 16,
									backgroundColor: 'var(--muted)',
								}}
							>
								<h3 style={{ fontWeight: 500, marginBottom: 12 }}>Input Area</h3>
								<div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
									<div
										style={{
											flex: 1,
											backgroundColor: 'var(--background)',
											borderRadius: 4,
											borderStyle: 'solid',
											borderWidth: 1,
											padding: 8,
											fontSize: 14,
											lineHeight: 1.42857,
											color: 'var(--muted-foreground)',
										}}
									>
										Type your message...
									</div>
									<div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
										<button
											type="button"
											style={{
												backgroundColor: 'var(--primary)',
												color: 'var(--primary-foreground)',
												paddingInline: 12,
												paddingBlock: 4,
												borderRadius: 4,
												fontSize: 14,
												lineHeight: 1.42857,
											}}
										>
											Send
										</button>
									</div>
								</div>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>

			<div>
				<h2
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 16,
						color: 'var(--foreground)',
					}}
				>
					Development Environment
				</h2>
				<div
					style={{
						height: 400,
						borderStyle: 'solid',
						borderWidth: 1,
						borderRadius: 4,
						overflow: 'hidden',
					}}
				>
					<ResizablePanelGroup orientation="vertical">
						<ResizablePanel defaultSize="60%">
							<div
								style={{ display: 'flex', height: '100%', flexDirection: 'column', padding: 16 }}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
									<Code style={{ height: 16, width: 16, color: 'var(--muted-foreground)' }} />
									<h3 style={{ fontWeight: 500 }}>Code Editor</h3>
									<span
										style={{
											fontSize: 12,
											lineHeight: 1.33333,
											backgroundColor: 'var(--muted)',
											paddingInline: 8,
											paddingBlock: 4,
											borderRadius: 4,
										}}
									>
										main.tsx
									</span>
								</div>
								<div
									style={{
										flex: 1,
										backgroundColor: '#020618',
										borderRadius: 4,
										color: '#05df72',
										padding: 16,
										fontFamily:
											'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
										fontSize: 14,
										lineHeight: 1.42857,
										overflow: 'auto',
									}}
								>
									<div style={{ color: '#6a7282' }}>1</div>
									<div style={{ color: '#6a7282' }}>2</div>
									<div style={{ color: '#6a7282' }}>3</div>
									<div style={{ color: '#6a7282' }}>4</div>
									<div style={{ color: '#6a7282' }}>5</div>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="25%" minSize="20%">
							<div
								style={{
									display: 'flex',
									height: '100%',
									flexDirection: 'column',
									padding: 16,
									backgroundColor: 'var(--muted)',
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
									<Terminal style={{ height: 16, width: 16, color: 'var(--muted-foreground)' }} />
									<h3 style={{ fontWeight: 500 }}>Terminal</h3>
								</div>
								<div
									style={{
										flex: 1,
										backgroundColor: '#020618',
										borderRadius: 4,
										color: '#05df72',
										padding: 12,
										fontFamily:
											'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
										fontSize: 12,
										lineHeight: 1.33333,
									}}
								>
									<div>$ npm run dev</div>
									<div style={{ color: '#54a2ff' }}>Server running on http://localhost:3000</div>
									<div style={{ animation: 'pulse 2s cubic-bezier(.4, 0, .6, 1) infinite' }}>█</div>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="15%" minSize="10%" maxSize="25%">
							<div
								style={{
									backgroundColor: 'var(--muted)',
									display: 'flex',
									height: '100%',
									alignItems: 'center',
									justifyContent: 'space-between',
									paddingInline: 16,
									paddingBlock: 8,
									borderTopStyle: 'solid',
									borderTopWidth: 1,
								}}
							>
								<div
									style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}
								>
									Problems: 0 • Warnings: 2 • Info: 5
								</div>
								<div
									style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}
								>
									Ln 42, Col 12
								</div>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>
		</div>
	),
};

export const CollapsiblePanels: Story = {
	render: () => (
		<div className="stack-24" style={{ padding: 24, backgroundColor: 'var(--background)' }}>
			<div>
				<h2
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 16,
						color: 'var(--foreground)',
					}}
				>
					Collapsible Sidebar
				</h2>
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
						<ResizablePanel defaultSize="25%" minSize="15%" maxSize="40%" collapsible={true}>
							<div
								style={{
									display: 'flex',
									height: '100%',
									flexDirection: 'column',
									padding: 16,
									backgroundColor: 'var(--muted)',
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
									<FileText style={{ height: 20, width: 20, color: 'var(--muted-foreground)' }} />
									<h3 style={{ fontWeight: 500 }}>File Explorer</h3>
								</div>
								<div
									className="stack-8"
									style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}
								>
									<div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
										<span>📁</span> src/
									</div>
									<div style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 16 }}>
										<span>📄</span> App.tsx
									</div>
									<div style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 16 }}>
										<span>📄</span> index.ts
									</div>
									<div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
										<span>📁</span> components/
									</div>
									<div style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 16 }}>
										<span>📄</span> Button.tsx
									</div>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="75%">
							<div
								style={{ display: 'flex', height: '100%', flexDirection: 'column', padding: 24 }}
							>
								<h3 style={{ fontWeight: 500, marginBottom: 16 }}>Code Editor</h3>
								<div
									style={{
										flex: 1,
										backgroundColor: '#020618',
										borderRadius: 4,
										color: '#05df72',
										padding: 16,
										fontFamily:
											'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
										fontSize: 14,
										lineHeight: 1.42857,
									}}
								>
									<div>import React from &apos;react&apos;;</div>
									<div></div>
									<div>function App() {'{'}</div>
									<div style={{ marginLeft: 16 }}>return &lt;div&gt;Hello World&lt;/div&gt;</div>
									<div>{'}'}</div>
									<div></div>
									<div>export default App;</div>
								</div>
								<p
									style={{
										fontSize: 14,
										lineHeight: 1.42857,
										color: 'var(--muted-foreground)',
										marginTop: 8,
									}}
								>
									Try dragging the left panel all the way to collapse it!
								</p>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>

			<div>
				<h2
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 16,
						color: 'var(--foreground)',
					}}
				>
					Collapsible Bottom Panel
				</h2>
				<div
					style={{
						height: 400,
						borderStyle: 'solid',
						borderWidth: 1,
						borderRadius: 4,
						overflow: 'hidden',
					}}
				>
					<ResizablePanelGroup orientation="vertical">
						<ResizablePanel defaultSize="70%">
							<div
								style={{ display: 'flex', height: '100%', flexDirection: 'column', padding: 24 }}
							>
								<h3 style={{ fontWeight: 500, marginBottom: 16 }}>Main Workspace</h3>
								<div
									className="panel-blue"
									style={{
										flex: 1,
										borderRadius: 4,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<div style={{ textAlign: 'center' }}>
										<ChartBar
											style={{
												marginInline: 'auto',
												marginBottom: 8,
												height: 48,
												width: 48,
												color: '#3080ff',
											}}
										/>
										<span style={{ fontSize: 18, lineHeight: 1.55556, fontWeight: 500 }}>
											Dashboard Content
										</span>
									</div>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize="30%" minSize="20%" maxSize="50%" collapsible={true}>
							<div
								style={{
									display: 'flex',
									height: '100%',
									flexDirection: 'column',
									padding: 16,
									backgroundColor: 'var(--muted)',
								}}
							>
								<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
									<Terminal style={{ height: 20, width: 20, color: 'var(--muted-foreground)' }} />
									<h3 style={{ fontWeight: 500 }}>Console</h3>
								</div>
								<div
									style={{
										flex: 1,
										backgroundColor: '#020618',
										borderRadius: 4,
										color: '#05df72',
										padding: 12,
										fontFamily:
											'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
										fontSize: 12,
										lineHeight: 1.33333,
									}}
								>
									<div>$ npm run dev</div>
									<div style={{ color: '#54a2ff' }}>✓ Local server running</div>
									<div style={{ color: '#fac800' }}>⚠ 2 warnings found</div>
									<div style={{ color: '#6a7282' }}>Watching for changes...</div>
									<div style={{ animation: 'pulse 2s cubic-bezier(.4, 0, .6, 1) infinite' }}>█</div>
								</div>
								<p
									style={{
										fontSize: 12,
										lineHeight: 1.33333,
										color: 'var(--muted-foreground)',
										marginTop: 8,
									}}
								>
									Drag this panel down to collapse it
								</p>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>

			<div>
				<h2
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 16,
						color: 'var(--foreground)',
					}}
				>
					Multiple Collapsible Panels
				</h2>
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
								<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
									<Settings style={{ height: 20, width: 20, color: 'var(--muted-foreground)' }} />
									<h3 style={{ fontWeight: 500 }}>Tools</h3>
								</div>
								<div
									className="stack-8"
									style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}
								>
									<div>🔧 Settings</div>
									<div>📊 Analytics</div>
									<div>🎨 Themes</div>
									<div>🔌 Plugins</div>
								</div>
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
											height: 48,
											width: 48,
											color: 'var(--muted-foreground)',
										}}
									/>
									<span style={{ fontSize: 18, lineHeight: 1.55556, fontWeight: 500 }}>
										Main Editor
									</span>
									<p
										style={{
											fontSize: 14,
											lineHeight: 1.42857,
											color: 'var(--muted-foreground)',
											marginTop: 8,
										}}
									>
										Both side panels can be collapsed
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
								<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
									<Database style={{ height: 20, width: 20, color: 'var(--muted-foreground)' }} />
									<h3 style={{ fontWeight: 500 }}>Inspector</h3>
								</div>
								<div
									className="stack-8"
									style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}
								>
									<div>🏷️ Properties</div>
									<div>🔍 Details</div>
									<div>📝 Metadata</div>
									<div>🔗 Relations</div>
								</div>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>
		</div>
	),
};

export const PanelGroupPlayground: Story = {
	parameters: {
		controls: { disable: false },
	},
	args: {
		orientation: 'horizontal',
	},
	argTypes: {
		orientation: {
			control: 'select',
			options: ['horizontal', 'vertical'],
			description: 'Layout orientation of the panel group',
		},
	},
	render: (args) => (
		<div style={{ padding: 24, backgroundColor: 'var(--background)' }}>
			<h2
				style={{
					fontSize: 18,
					lineHeight: 1.55556,
					fontWeight: 600,
					marginBottom: 16,
					color: 'var(--foreground)',
				}}
			>
				Interactive Panel Group
			</h2>
			<div
				style={{
					height: 400,
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4,
					overflow: 'hidden',
				}}
			>
				<ResizablePanelGroup {...args}>
					<ResizablePanel defaultSize="25%" minSize="20%">
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
								<FileText
									style={{
										marginInline: 'auto',
										marginBottom: 8,
										height: 32,
										width: 32,
										color: 'var(--muted-foreground)',
									}}
								/>
								<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>Panel 1</span>
								<p
									style={{
										fontSize: 12,
										lineHeight: 1.33333,
										color: 'var(--muted-foreground)',
										marginTop: 4,
									}}
								>
									25% default size
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
								<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>Panel 2</span>
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
					<ResizablePanel defaultSize="25%">
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
								<Settings
									style={{
										marginInline: 'auto',
										marginBottom: 8,
										height: 32,
										width: 32,
										color: 'var(--muted-foreground)',
									}}
								/>
								<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>Panel 3</span>
								<p
									style={{
										fontSize: 12,
										lineHeight: 1.33333,
										color: 'var(--muted-foreground)',
										marginTop: 4,
									}}
								>
									25% default size
								</p>
							</div>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
			<div style={{ marginTop: 16, padding: 16, backgroundColor: 'var(--muted)', borderRadius: 4 }}>
				<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Instructions:</h3>
				<ul
					className="stack-4"
					style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}
				>
					<li>• Change the orientation to see horizontal vs vertical layouts</li>
					<li>
						• Use useDefaultLayout with groupId for persistent layouts (see Persistent Layout story)
					</li>
					<li>• Drag the resize handles to adjust panel sizes</li>
				</ul>
			</div>
		</div>
	),
};

export const PanelPlayground: Story = {
	parameters: {
		controls: { disable: false },
	},
	args: {},
	argTypes: {},
	render: () => (
		<div style={{ padding: 24, backgroundColor: 'var(--background)' }}>
			<h2
				style={{
					fontSize: 18,
					lineHeight: 1.55556,
					fontWeight: 600,
					marginBottom: 16,
					color: 'var(--foreground)',
				}}
			>
				Interactive Panel Properties
			</h2>
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
					<ResizablePanel defaultSize="30%" minSize="20%" maxSize="60%" collapsible={false}>
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
								<ChartBar
									style={{
										marginInline: 'auto',
										marginBottom: 8,
										height: 32,
										width: 32,
										color: '#155dfc',
									}}
								/>
								<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
									Configurable Panel
								</span>
								<div
									className="stack-4"
									style={{
										fontSize: 12,
										lineHeight: 1.33333,
										color: 'var(--muted-foreground)',
										marginTop: 8,
									}}
								>
									<div>Default: 30%</div>
									<div>Min: 20%</div>
									<div>Max: 60%</div>
									<div>Collapsible: No</div>
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
									Fixed Panel
								</span>
								<p
									style={{
										fontSize: 12,
										lineHeight: 1.33333,
										color: 'var(--muted-foreground)',
										marginTop: 4,
									}}
								>
									Responds to left panel changes
								</p>
							</div>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
			<div style={{ marginTop: 16, padding: 16, backgroundColor: 'var(--muted)', borderRadius: 4 }}>
				<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Try these interactions:</h3>
				<ul
					className="stack-4"
					style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}
				>
					<li>• Adjust the sliders to see how constraints affect resizing</li>
					<li>• Enable collapsible and try dragging the panel to minimum size</li>
					<li>• Notice how minSize and maxSize limit the resize range</li>
				</ul>
			</div>
		</div>
	),
};

export const ResizeHandlePlayground: Story = {
	parameters: {
		controls: { disable: false },
	},
	args: {},
	argTypes: {},
	render: () => (
		<div style={{ padding: 24, backgroundColor: 'var(--background)' }}>
			<h2
				style={{
					fontSize: 18,
					lineHeight: 1.55556,
					fontWeight: 600,
					marginBottom: 16,
					color: 'var(--foreground)',
				}}
			>
				Interactive Resize Handle
			</h2>
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
					<ResizablePanel defaultSize="40%">
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
								<FileText
									style={{
										marginInline: 'auto',
										marginBottom: 8,
										height: 32,
										width: 32,
										color: 'var(--muted-foreground)',
									}}
								/>
								<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
									Left Panel
								</span>
								<p
									style={{
										fontSize: 12,
										lineHeight: 1.33333,
										color: 'var(--muted-foreground)',
										marginTop: 4,
									}}
								>
									Drag the handle to resize
								</p>
							</div>
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle={true} disabled={false} />
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
								<Settings
									style={{
										marginInline: 'auto',
										marginBottom: 8,
										height: 32,
										width: 32,
										color: 'var(--muted-foreground)',
									}}
								/>
								<span style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}>
									Right Panel
								</span>
								<div
									className="stack-4"
									style={{
										fontSize: 12,
										lineHeight: 1.33333,
										color: 'var(--muted-foreground)',
										marginTop: 8,
									}}
								>
									<div>Handle visible: Yes</div>
									<div>Disabled: No</div>
								</div>
							</div>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
			<div style={{ marginTop: 16, padding: 16, backgroundColor: 'var(--muted)', borderRadius: 4 }}>
				<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Handle Options:</h3>
				<ul
					className="stack-4"
					style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}
				>
					<li>
						• <strong>withHandle:</strong> Shows/hides the visual drag indicator
					</li>
					<li>
						• <strong>disabled:</strong> Prevents resizing when enabled
					</li>
					<li>• Handle is still functional even when visual indicator is hidden</li>
				</ul>
			</div>
		</div>
	),
};

function PersistentLayoutContent({ groupId }: { groupId: string }) {
	const { defaultLayout, onLayoutChange } = useDefaultLayout({
		groupId: groupId || 'demo-layout',
		storage: typeof localStorage !== 'undefined' ? localStorage : undefined,
	});
	return (
		<div style={{ padding: 24, backgroundColor: 'var(--background)' }}>
			<h2
				style={{
					fontSize: 18,
					lineHeight: 1.55556,
					fontWeight: 600,
					marginBottom: 16,
					color: 'var(--foreground)',
				}}
			>
				Persistent Layout Demo
			</h2>
			<div
				style={{
					height: 400,
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4,
					overflow: 'hidden',
				}}
			>
				<ResizablePanelGroup
					orientation="horizontal"
					defaultLayout={defaultLayout}
					onLayoutChange={onLayoutChange}
				>
					<ResizablePanel defaultSize="25%" collapsible>
						<div
							style={{
								display: 'flex',
								height: '100%',
								flexDirection: 'column',
								padding: 16,
								backgroundColor: 'var(--muted)',
							}}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
								<Database style={{ height: 20, width: 20, color: 'var(--muted-foreground)' }} />
								<h3 style={{ fontWeight: 500 }}>Persistent Sidebar</h3>
							</div>
							<div
								className="stack-8"
								style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}
							>
								<div>This layout persists!</div>
								<div>Resize panels and refresh the page</div>
								<div>Your layout will be restored</div>
							</div>
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize="50%">
						<div style={{ display: 'flex', height: '100%', flexDirection: 'column', padding: 16 }}>
							<h3 style={{ fontWeight: 500, marginBottom: 12 }}>Main Content</h3>
							<div
								className="panel-green"
								style={{
									flex: 1,
									borderRadius: 4,
									display: 'flex',
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
											color: '#00a544',
										}}
									/>
									<span style={{ fontWeight: 500 }}>Layout Memory</span>
									<p
										style={{
											fontSize: 14,
											lineHeight: 1.42857,
											color: 'var(--muted-foreground)',
											marginTop: 8,
										}}
									>
										groupId: &quot;{groupId || 'demo-layout'}&quot;
									</p>
								</div>
							</div>
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize="25%" collapsible>
						<div
							style={{
								display: 'flex',
								height: '100%',
								flexDirection: 'column',
								padding: 16,
								backgroundColor: 'var(--muted)',
							}}
						>
							<div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
								<Settings style={{ height: 20, width: 20, color: 'var(--muted-foreground)' }} />
								<h3 style={{ fontWeight: 500 }}>Properties Panel</h3>
							</div>
							<div
								className="stack-8"
								style={{ fontSize: 12, lineHeight: 1.33333, color: 'var(--muted-foreground)' }}
							>
								<div>Change the groupId to create different saved layouts</div>
								<div>Each ID maintains its own layout state</div>
							</div>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</div>
			<div style={{ marginTop: 16, padding: 16, backgroundColor: 'var(--muted)', borderRadius: 4 }}>
				<h3 style={{ fontWeight: 500, marginBottom: 8 }}>Persistence Features:</h3>
				<ul
					className="stack-4"
					style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}
				>
					<li>• Layout automatically saved to localStorage (useDefaultLayout)</li>
					<li>• Restore layout on page refresh or revisit</li>
					<li>• Different groupId values create separate saved layouts</li>
					<li>• Try resizing panels, then refresh the page to see persistence in action</li>
				</ul>
			</div>
		</div>
	);
}

export const PersistentLayout: StoryObj<typeof PersistentLayoutContent> = {
	parameters: {
		controls: { disable: false },
	},
	args: {
		groupId: 'demo-layout',
	},
	argTypes: {
		groupId: {
			control: 'text',
			description: 'Unique ID for saving layout to localStorage (useDefaultLayout)',
		},
	},
	render: (args) => <PersistentLayoutContent groupId={args.groupId} />,
};
