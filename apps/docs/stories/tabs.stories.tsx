import {
	CircleAlert,
	Clock,
	Component,
	History,
	LayoutGrid,
	List,
	Lock,
	Settings,
	Settings2,
	ShieldAlert,
} from '@signozhq/icons';
import { type TabItemProps, Tabs, type TabVariants } from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Tabs> = {
	title: 'Composed Components/Tabs/TabsSimple',
	component: Tabs,
	argTypes: {
		items: {
			control: false,
			description: 'Array of tab items to render.',
			table: { category: 'Content', type: { summary: 'TabItemProps[]' } },
		},
		variant: {
			control: 'select',
			options: ['primary', 'secondary'],
			description: 'The visual style variant of the tabs.',
			table: {
				category: 'Appearance',
				type: { summary: "'primary' | 'secondary'" },
				defaultValue: { summary: "'primary'" },
			},
		},
		defaultValue: {
			control: 'text',
			description:
				'The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs.',
			table: { category: 'State', type: { summary: 'string' } },
		},
		value: {
			control: 'text',
			description:
				'The controlled value of the tab to activate. Should be used in conjunction with onChange.',
			table: { category: 'State', type: { summary: 'string' } },
		},
		onChange: {
			control: false,
			description: 'Event handler called when the active tab changes.',
			table: { category: 'Events', type: { summary: '(key: string) => void' } },
		},
		orientation: {
			control: 'select',
			options: ['horizontal', 'vertical'],
			description: 'The orientation of the tabs.',
			table: { category: 'Layout', type: { summary: "'horizontal' | 'vertical'" } },
		},
		dir: {
			control: 'select',
			options: ['ltr', 'rtl'],
			description: 'The direction of navigation when using keyboard.',
			table: { category: 'Behavior', type: { summary: "'ltr' | 'rtl'" } },
		},
		activationMode: {
			control: 'select',
			options: ['automatic', 'manual'],
			description:
				'When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked.',
			table: {
				category: 'Behavior',
				type: { summary: "'automatic' | 'manual'" },
				defaultValue: { summary: "'automatic'" },
			},
		},
		id: {
			control: 'text',
			description: 'A unique identifier for the tabs.',
			table: { category: 'Accessibility' },
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes to apply to the tabs root.',
			table: { category: 'Styling', type: { summary: 'string' } },
		},
	},
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const playgroundItems: (TabItemProps & { variant?: TabVariants })[] = [
	{
		key: 'overview',
		label: 'Overview',
		children: 'Overview content panel',
		prefixIcon: <Settings2 style={{ width: 16, height: 16 }} />,
	},
	{
		key: 'issues',
		label: 'Issues (Disabled)',
		children: 'Issues content panel',
		disabled: true,
		disabledReason: 'Issues are temporarily unavailable',
		prefixIcon: <CircleAlert style={{ width: 16, height: 16 }} />,
	},
	{
		key: 'history',
		label: 'History',
		children: 'History content panel',
		suffixIcon: <History style={{ width: 16, height: 16 }} />,
	},
	{
		key: 'another',
		label: 'Another Tab',
		children: 'Another content panel',
	},
	{
		key: 'all-endpoints',
		label: 'All Endpoints',
		children: 'Endpoints list panel',
		variant: 'secondary',
	},
	{
		key: 'details',
		label: 'Endpoint Details',
		children: 'Details content panel',
		variant: 'secondary',
	},
	{
		key: 'settings',
		label: 'Settings',
		children: 'Settings content panel',
		variant: 'secondary',
		prefixIcon: <Settings style={{ width: 16, height: 16 }} />,
		disabled: true,
		disabledReason: 'You need admin privileges to access settings',
	},
];

const defaultItems: TabItemProps[] = [
	{
		key: 'overview',
		label: 'Overview',
		children: 'Overview content panel',
		prefixIcon: <Settings2 style={{ width: 16, height: 16 }} />,
	},
	{
		key: 'issues',
		label: 'Issues (Disabled)',
		children: 'Issues content panel',
		disabled: true,
		disabledReason: 'Issues are temporarily unavailable',
		prefixIcon: <CircleAlert style={{ width: 16, height: 16 }} />,
	},
	{
		key: 'history',
		label: 'History',
		children: 'History content panel',
		suffixIcon: <History style={{ width: 16, height: 16 }} />,
	},
	{
		key: 'another',
		label: 'Another Tab',
		children: 'Another content panel',
	},
];

export const Default: Story = {
	args: {
		items: defaultItems,
		variant: 'primary',
		defaultValue: 'overview',
	},
	render: (args) => <Tabs {...args} items={args.items} />,
};

export const AllVariants: Story = {
	render: () => (
		<div className="stack-32">
			<div>
				<h2 style={{ marginBottom: 16, fontSize: 18, lineHeight: 1.55556, fontWeight: 600 }}>
					Primary Variant
				</h2>
				<Tabs
					items={playgroundItems.filter((i) => i.variant !== 'secondary')}
					variant="primary"
					defaultValue="overview"
				/>
			</div>

			<div>
				<h2 style={{ marginBottom: 16, fontSize: 18, lineHeight: 1.55556, fontWeight: 600 }}>
					Secondary Variant
				</h2>
				<Tabs
					items={playgroundItems
						.filter((i) => i.variant === 'secondary')
						.map((i) => ({ ...i, variant: undefined }))}
					variant="secondary"
					defaultValue="all-endpoints"
				/>
			</div>

			<div>
				<h2 style={{ marginBottom: 16, fontSize: 18, lineHeight: 1.55556, fontWeight: 600 }}>
					With Icons
				</h2>
				<Tabs
					items={[
						{
							key: 'apps',
							label: 'Applications',
							children: 'Applications list',
							prefixIcon: <LayoutGrid style={{ width: 16, height: 16 }} />,
							suffixIcon: <List style={{ width: 16, height: 16 }} />,
						},
						{
							key: 'modules',
							label: 'Modules',
							children: 'Modules content',
							prefixIcon: <Component style={{ width: 16, height: 16 }} />,
						},
					]}
					variant="primary"
					defaultValue="apps"
				/>
			</div>

			<div>
				<h2 style={{ marginBottom: 16, fontSize: 18, lineHeight: 1.55556, fontWeight: 600 }}>
					Dashboard Navigation
				</h2>
				<Tabs
					items={[
						{
							key: 'overview',
							label: 'Overview',
							children: (
								<div style={{ paddingTop: 16 }}>
									<h1 style={{ fontSize: 24, lineHeight: 1.33333, fontWeight: 600 }}>Overview</h1>
								</div>
							),
						},
						{
							key: 'integrations',
							label: 'Integrations',
							children: (
								<div style={{ paddingTop: 16 }}>
									<h1 style={{ fontSize: 24, lineHeight: 1.33333, fontWeight: 600 }}>
										Integrations
									</h1>
								</div>
							),
						},
						{
							key: 'activity',
							label: 'Activity',
							children: (
								<div style={{ paddingTop: 16 }}>
									<h1 style={{ fontSize: 24, lineHeight: 1.33333, fontWeight: 600 }}>Activity</h1>
								</div>
							),
						},
						{
							key: 'domains',
							label: 'Domains',
							children: (
								<div style={{ paddingTop: 16 }}>
									<h1 style={{ fontSize: 24, lineHeight: 1.33333, fontWeight: 600 }}>Domains</h1>
								</div>
							),
						},
						{
							key: 'usage',
							label: 'Usage',
							children: (
								<div style={{ paddingTop: 16 }}>
									<h1 style={{ fontSize: 24, lineHeight: 1.33333, fontWeight: 600 }}>Usage</h1>
								</div>
							),
						},
						{
							key: 'monitoring',
							label: 'Monitoring',
							children: (
								<div style={{ paddingTop: 16 }}>
									<h1 style={{ fontSize: 24, lineHeight: 1.33333, fontWeight: 600 }}>Monitoring</h1>
								</div>
							),
						},
						{
							key: 'observability',
							label: 'Observability',
							children: (
								<div style={{ paddingTop: 16 }}>
									<h1 style={{ fontSize: 24, lineHeight: 1.33333, fontWeight: 600 }}>
										Observability
									</h1>
								</div>
							),
						},
						{
							key: 'storage',
							label: 'Storage',
							children: (
								<div style={{ paddingTop: 16 }}>
									<h1 style={{ fontSize: 24, lineHeight: 1.33333, fontWeight: 600 }}>Storage</h1>
								</div>
							),
						},
						{
							key: 'ai',
							label: 'AI',
							children: (
								<div style={{ paddingTop: 16 }}>
									<h1 style={{ fontSize: 24, lineHeight: 1.33333, fontWeight: 600 }}>AI</h1>
								</div>
							),
						},
						{
							key: 'support',
							label: 'Support',
							children: (
								<div style={{ paddingTop: 16 }}>
									<h1 style={{ fontSize: 24, lineHeight: 1.33333, fontWeight: 600 }}>Support</h1>
								</div>
							),
						},
						{
							key: 'settings',
							label: 'Settings',
							children: (
								<div style={{ paddingTop: 16 }}>
									<h1 style={{ fontSize: 24, lineHeight: 1.33333, fontWeight: 600 }}>Settings</h1>
								</div>
							),
						},
					]}
					variant="primary"
					defaultValue="observability"
				/>
			</div>
		</div>
	),
};

const primaryItems = [
	{
		key: 'overview',
		label: 'Overview',
		children: 'Overview content',
		prefixIcon: <Settings style={{ width: 16, height: 16 }} />,
	},
	{
		key: 'issues',
		label: 'Issues',
		children: 'Issues content',
		disabled: true,
		disabledReason: 'Issues feature is currently under maintenance',
		prefixIcon: <CircleAlert style={{ width: 16, height: 16 }} />,
	},
	{
		key: 'history',
		label: 'History',
		children: 'History content',
		suffixIcon: <History style={{ width: 16, height: 16 }} />,
	},
];

const secondaryItems = [
	{ key: 'all', label: 'All Endpoints', children: 'All endpoints content' },
	{
		key: 'details',
		label: 'Endpoint Details',
		children: 'Endpoint details content',
	},
	{
		key: 'advanced',
		label: 'Advanced Settings',
		children: 'Advanced settings content',
		disabled: true,
		disabledReason: 'Requires premium subscription',
	},
];

export const Primary: Story = {
	args: {
		items: primaryItems,
		variant: 'primary',
		defaultValue: 'overview',
	},
};

export const Secondary: Story = {
	args: {
		items: secondaryItems,
		variant: 'secondary',
		defaultValue: 'all',
	},
};

export const DisabledStates: Story = {
	render: () => (
		<div className="stack-32">
			<div>
				<h2 style={{ marginBottom: 16, fontSize: 18, lineHeight: 1.55556, fontWeight: 600 }}>
					Disabled Tabs with Custom Reasons
				</h2>
				<Tabs
					items={[
						{
							key: 'active',
							label: 'Active Tab',
							children: 'This tab is active and can be clicked',
						},
						{
							key: 'locked',
							label: 'Locked',
							children: 'Locked content',
							disabled: true,
							disabledReason: 'This feature is locked',
							prefixIcon: <Lock style={{ width: 16, height: 16 }} />,
						},
						{
							key: 'maintenance',
							label: 'Under Maintenance',
							children: 'Maintenance content',
							disabled: true,
							disabledReason: 'This section is under maintenance',
							prefixIcon: <Clock style={{ width: 16, height: 16 }} />,
						},
						{
							key: 'permissions',
							label: 'Insufficient Permissions',
							children: 'Permissions content',
							disabled: true,
							disabledReason: 'You do not have permission to access this area',
							prefixIcon: <ShieldAlert style={{ width: 16, height: 16 }} />,
						},
						{
							key: 'default',
							label: 'Default Disabled',
							children: 'Default disabled content',
							disabled: true,
							// No disabledReason provided, will show default message
						},
					]}
					variant="primary"
					defaultValue="active"
				/>
			</div>

			<div>
				<h2 style={{ marginBottom: 16, fontSize: 18, lineHeight: 1.55556, fontWeight: 600 }}>
					Secondary Variant Disabled States
				</h2>
				<Tabs
					items={[
						{
							key: 'active',
							label: 'Active Tab',
							children: 'This tab is active and can be clicked',
						},
						{
							key: 'premium',
							label: 'Premium Features',
							children: 'Premium content',
							disabled: true,
							disabledReason: 'Available only in premium tier',
						},
						{
							key: 'beta',
							label: 'Beta Features',
							children: 'Beta content',
							disabled: true,
							disabledReason: 'Coming soon - currently in beta testing',
						},
					]}
					variant="secondary"
					defaultValue="active"
				/>
			</div>
		</div>
	),
};
