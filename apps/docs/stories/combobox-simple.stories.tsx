import { Code, Database, GitBranch, Terminal } from '@signozhq/icons';
import { ComboboxSimple } from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof ComboboxSimple> = {
	title: 'Composed Components/Combobox/ComboboxSimple',
	component: ComboboxSimple,
	argTypes: {
		testId: {
			control: 'text',
			description: 'Test ID for the combobox.',
			table: { category: 'Testing', type: { summary: 'string' } },
		},
		id: {
			control: 'text',
			description: 'A unique identifier for the combobox.',
			table: { category: 'Accessibility', type: { summary: 'string' } },
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes for custom styling.',
			table: { category: 'Styling', type: { summary: 'string' } },
		},
		items: {
			control: 'object',
			description: 'List of items to display (flat). Ignored when groups is provided.',
			table: { category: 'Content', type: { summary: 'ComboboxSimpleItem[]' } },
		},
		groups: {
			control: false,
			description: 'Grouped items with optional headings. When provided, items is ignored.',
			table: { category: 'Content', type: { summary: 'ComboboxSimpleGroup[]' } },
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text when no value is selected.',
			table: { category: 'Content', type: { summary: 'string' } },
		},
		inputPlaceholder: {
			control: 'text',
			description:
				'Placeholder text for the search input inside the popover. Falls back to placeholder.',
			table: { category: 'Content', type: { summary: 'string' } },
		},
		emptyPlaceholder: {
			control: 'text',
			description: 'Text shown when there are no results (e.g. after filtering).',
			table: { category: 'Content', type: { summary: 'string' } },
		},
		value: {
			control: 'text',
			description: 'Controlled selected value. Array when `multiple` is true.',
			table: { category: 'State', type: { summary: 'string | string[]' } },
		},
		defaultValue: {
			control: 'text',
			description: 'Initial value when uncontrolled. Array when `multiple` is true.',
			table: { category: 'State', type: { summary: 'string | string[]' } },
		},
		onChange: {
			control: false,
			description: 'Callback when selection changes.',
			table: { category: 'Events', type: { summary: '(value: string | string[]) => void' } },
		},
		multiple: {
			control: 'boolean',
			description: 'Enable multi-select mode. Values shown as removable pills.',
			table: {
				category: 'Behavior',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		allowCreate: {
			control: 'boolean',
			description:
				'Allow creating new items by typing. Pass a function to customize the create option text.',
			table: {
				category: 'Behavior',
				type: { summary: 'boolean | ((inputValue: string) => ReactNode)' },
				defaultValue: { summary: 'false' },
			},
		},
		maxDisplayedPills: {
			control: 'number',
			description:
				'Maximum number of pills to display in multi-select mode. Overflow shown as "+N".',
			table: { category: 'Display', type: { summary: 'number' } },
		},
		withPortal: {
			control: 'boolean',
			description: 'Set to false when inside a popover to avoid z-index issues.',
			table: {
				category: 'Behavior',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		disableTooltipProvider: {
			control: 'boolean',
			description: 'Disable internal TooltipProvider when already inside one.',
			table: {
				category: 'Behavior',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		loading: {
			control: 'boolean',
			description: 'Show loading state instead of items.',
			table: {
				category: 'State',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		loadingPlaceholder: {
			control: 'text',
			description: 'Content shown while loading. Can be string or ReactNode.',
			table: {
				category: 'Content',
				type: { summary: 'ReactNode' },
				defaultValue: { summary: "'Loading...'" },
			},
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the combobox is disabled.',
			table: {
				category: 'State',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
	},
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComboboxSimple>;

const defaultItems = [
	{ value: 'react', label: 'React' },
	{ value: 'vue', label: 'Vue' },
	{ value: 'angular', label: 'Angular' },
	{ value: 'svelte', label: 'Svelte' },
];

export const Default: Story = {
	args: {
		items: defaultItems,
		placeholder: 'Select a framework...',
	},
	render: (args) => (
		<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
			<ComboboxSimple {...args} />
		</div>
	),
};

export const Controlled: Story = {
	args: {
		items: defaultItems,
		placeholder: 'Select a framework...',
	},
	render: (args) => {
		const [value, setValue] = useState('');

		return (
			<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
				<ComboboxSimple {...args} value={value} onChange={(v) => setValue(v?.toString())} />
				<p
					style={{
						marginTop: 16,
						fontSize: 14,
						lineHeight: 1.42857,
						color: 'var(--muted-foreground)',
					}}
				>
					Selected: {value || 'none'}
				</p>
			</div>
		);
	},
};

export const WithDefaultValue: Story = {
	args: {
		items: defaultItems,
		placeholder: 'Select a framework...',
		defaultValue: 'react',
	},
	render: (args) => (
		<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
			<ComboboxSimple {...args} />
		</div>
	),
};

const groups = [
	{
		heading: 'Frameworks',
		items: [
			{ value: 'react', label: 'React' },
			{ value: 'vue', label: 'Vue' },
			{ value: 'angular', label: 'Angular' },
			{ value: 'svelte', label: 'Svelte' },
		],
	},
	{
		heading: 'Languages',
		items: [
			{ value: 'javascript', label: 'JavaScript' },
			{ value: 'typescript', label: 'TypeScript' },
			{ value: 'python', label: 'Python' },
			{ value: 'go', label: 'Go' },
			{ value: 'rust', label: 'Rust' },
		],
	},
];

export const WithGroups: Story = {
	args: {
		groups,
		placeholder: 'Select a technology...',
	},
	render: (args) => (
		<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
			<ComboboxSimple {...args} />
		</div>
	),
};

const itemsWithIcons = [
	{
		value: 'react',
		label: (
			<>
				<Code style={{ marginRight: 8, height: 16, width: 16 }} />
				React
			</>
		),
	},
	{
		value: 'nodejs',
		label: (
			<>
				<Terminal style={{ marginRight: 8, height: 16, width: 16 }} />
				Node.js
			</>
		),
	},
	{
		value: 'postgres',
		label: (
			<>
				<Database style={{ marginRight: 8, height: 16, width: 16 }} />
				PostgreSQL
			</>
		),
	},
	{
		value: 'git',
		label: (
			<>
				<GitBranch style={{ marginRight: 8, height: 16, width: 16 }} />
				Git
			</>
		),
	},
];

export const WithIcons: Story = {
	args: {
		items: itemsWithIcons,
		placeholder: 'Select a tool...',
	},
	render: (args) => (
		<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
			<ComboboxSimple {...args} />
		</div>
	),
};

export const WithGroupsAndIcons: Story = {
	args: {
		groups: [
			{
				heading: 'Frameworks',
				items: [
					{
						value: 'react',
						label: (
							<>
								<Code style={{ marginRight: 8, height: 16, width: 16 }} />
								React
							</>
						),
					},
					{
						value: 'vue',
						label: (
							<>
								<Code style={{ marginRight: 8, height: 16, width: 16 }} />
								Vue
							</>
						),
					},
				],
			},
			{
				heading: 'Databases',
				items: [
					{
						value: 'postgres',
						label: (
							<>
								<Database style={{ marginRight: 8, height: 16, width: 16 }} />
								PostgreSQL
							</>
						),
					},
					{
						value: 'redis',
						label: (
							<>
								<Database style={{ marginRight: 8, height: 16, width: 16 }} />
								Redis
							</>
						),
					},
				],
			},
		],
		placeholder: 'Select a technology...',
	},
	render: (args) => (
		<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
			<ComboboxSimple {...args} />
		</div>
	),
};

export const Disabled: Story = {
	args: {
		items: defaultItems,
		placeholder: 'Select a framework...',
		disabled: true,
	},
	render: (args) => (
		<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
			<ComboboxSimple {...args} />
		</div>
	),
};
