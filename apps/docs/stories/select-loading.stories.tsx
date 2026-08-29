import { Select, SelectContent, SelectItem, SelectLoading, SelectTrigger } from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';

const meta: Meta<typeof SelectLoading> = {
	title: 'Primitive Components/Select/SelectLoading',
	component: SelectLoading,
	argTypes: {
		children: {
			control: 'text',
			description: 'Loading message displayed to the user.',
			table: { category: 'Content', type: { summary: 'React.ReactNode' } },
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes.',
			table: { category: 'Styling', type: { summary: 'string' } },
		},
		style: {
			control: 'object',
			description: 'Inline styles for the loading container.',
			table: { category: 'Styling', type: { summary: 'React.CSSProperties' } },
		},
		id: {
			control: 'text',
			description: 'Unique identifier for the element.',
			table: { category: 'Accessibility', type: { summary: 'string' } },
		},
		testId: {
			control: 'text',
			description: 'Test identifier for testing libraries.',
			table: { category: 'Testing', type: { summary: 'string' } },
		},
	},
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectLoading>;

const frameworks = [
	{ value: 'react', label: 'React' },
	{ value: 'vue', label: 'Vue' },
	{ value: 'angular', label: 'Angular' },
];

export const Default: Story = {
	args: {
		children: 'Loading options...',
	},
	render: (args) => (
		<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
			<Select defaultOpen>
				<SelectTrigger placeholder="Select a framework..." />
				<SelectContent>
					<SelectLoading {...args} />
				</SelectContent>
			</Select>
		</div>
	),
};

export const Variations: Story = {
	render: () => (
		<div className="stack-32" style={{ padding: 32, width: '100%', maxWidth: 672 }}>
			<div>
				<h3 style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500, marginBottom: 8 }}>
					Infinite Loading
				</h3>
				<InfiniteLoadingExample />
			</div>
			<div>
				<h3 style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500, marginBottom: 8 }}>
					Loading with Delay (5s)
				</h3>
				<DelayedLoadingExample />
			</div>
		</div>
	),
};

function InfiniteLoadingExample() {
	return (
		<Select>
			<SelectTrigger placeholder="Select a framework..." />
			<SelectContent>
				<SelectLoading>Fetching options...</SelectLoading>
			</SelectContent>
		</Select>
	);
}

function DelayedLoadingExample() {
	const [isLoading, setIsLoading] = useState(true);
	const [items, setItems] = useState<typeof frameworks>([]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setItems(frameworks);
			setIsLoading(false);
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Select>
			<SelectTrigger placeholder="Select a framework..." />
			<SelectContent>
				{isLoading ? (
					<SelectLoading>Loading options...</SelectLoading>
				) : (
					items.map((f) => (
						<SelectItem key={f.value} value={f.value}>
							{f.label}
						</SelectItem>
					))
				)}
			</SelectContent>
		</Select>
	);
}
