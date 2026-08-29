import {
	Button,
	ButtonColor,
	ButtonVariant,
	Input,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { popoverArgTypes } from './shared/popover-arg-types.js';

const meta: Meta<typeof Popover> = {
	title: 'Primitive Components/Popover/Popover',
	component: Popover,
	argTypes: popoverArgTypes,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
	args: {
		defaultOpen: false,
	},
	render: (args) => {
		const [open, setOpen] = React.useState<boolean | undefined>(args.open ?? args.defaultOpen);

		return (
			<Popover
				{...args}
				open={args.open ?? open}
				onOpenChange={(next) => {
					setOpen(next);
					args.onOpenChange?.(next);
				}}
			>
				<PopoverTrigger asChild>
					<Button variant={ButtonVariant.Solid} color={ButtonColor.Primary}>
						Open popover
					</Button>
				</PopoverTrigger>
				<PopoverContent style={{ width: 320 }}>
					<div style={{ display: 'grid', gap: 16 }}>
						<div className="stack-8">
							<h4 style={{ lineHeight: 1, fontWeight: 500, marginTop: 0 }}>Dimensions</h4>
							<p style={{ color: 'var(--muted-foreground)', fontSize: 14, lineHeight: 1.42857 }}>
								Set the dimensions for the layer.
							</p>
						</div>
						<div style={{ display: 'grid', gap: 8 }}>
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
									alignItems: 'center',
									gap: 16,
								}}
							>
								<label htmlFor="width">Width</label>
								<Input
									id="width"
									defaultValue="100%"
									style={{ gridColumn: 'span 2/span 2', height: 32 }}
								/>
							</div>
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
									alignItems: 'center',
									gap: 16,
								}}
							>
								<label htmlFor="maxWidth">Max. width</label>
								<Input
									id="maxWidth"
									defaultValue="300px"
									style={{ gridColumn: 'span 2/span 2', height: 32 }}
								/>
							</div>
						</div>
					</div>
				</PopoverContent>
			</Popover>
		);
	},
};
