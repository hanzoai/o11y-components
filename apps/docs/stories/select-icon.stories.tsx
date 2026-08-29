import { ChevronDown, ChevronsUpDown, ChevronUp } from '@signozhq/icons';
import { Select, SelectContent, SelectIcon, SelectItem, SelectTrigger } from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

const meta: Meta<typeof SelectIcon> = {
	title: 'Primitive Components/Select/SelectIcon',
	component: SelectIcon,
	argTypes: {
		asChild: {
			control: 'boolean',
			description: 'Render as child element instead of default.',
			table: {
				category: 'Behavior',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes.',
			table: { category: 'Styling', type: { summary: 'string' } },
		},
	},
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SelectIcon>;

const frameworks = [
	{ value: 'react', label: 'React' },
	{ value: 'vue', label: 'Vue' },
	{ value: 'angular', label: 'Angular' },
];

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState('');

		return (
			<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
				<p
					style={{
						marginBottom: 16,
						fontSize: 14,
						lineHeight: 1.42857,
						color: 'var(--muted-foreground)',
					}}
				>
					SelectIcon is typically used internally by SelectTrigger. This example shows the default
					chevron icon.
				</p>
				<Select value={value} onChange={(v) => setValue(v as string)}>
					<SelectTrigger placeholder="Select a framework..." />
					<SelectContent>
						{frameworks.map((f) => (
							<SelectItem key={f.value} value={f.value}>
								{f.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		);
	},
};

export const StandaloneUsage: Story = {
	render: () => {
		return (
			<div className="stack-24" style={{ padding: 32, width: '100%', maxWidth: 384 }}>
				<p style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}>
					SelectIcon is primarily an internal component used by SelectTrigger. These examples show
					the icon styling when rendered standalone.
				</p>

				<div className="stack-16">
					<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
						<span style={{ fontSize: 14, lineHeight: 1.42857, width: 128 }}>ChevronDown:</span>
						<SelectIcon asChild>
							<ChevronDown style={{ height: 16, width: 16 }} />
						</SelectIcon>
					</div>

					<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
						<span style={{ fontSize: 14, lineHeight: 1.42857, width: 128 }}>ChevronUp:</span>
						<SelectIcon asChild>
							<ChevronUp style={{ height: 16, width: 16 }} />
						</SelectIcon>
					</div>

					<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
						<span style={{ fontSize: 14, lineHeight: 1.42857, width: 128 }}>ChevronsUpDown:</span>
						<SelectIcon asChild>
							<ChevronsUpDown style={{ height: 16, width: 16 }} />
						</SelectIcon>
					</div>
				</div>
			</div>
		);
	},
};
