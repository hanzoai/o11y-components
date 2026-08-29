import {
	Button,
	ButtonColor,
	ButtonVariant,
	Popover,
	PopoverAnchor,
	PopoverContent,
	PopoverTrigger,
} from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { anchorArgTypes } from './shared/popover-arg-types.js';

const meta: Meta<typeof PopoverAnchor> = {
	title: 'Primitive Components/Popover/PopoverAnchor',
	component: PopoverAnchor,
	argTypes: anchorArgTypes,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PopoverAnchor>;

export const Default: Story = {
	args: {
		asChild: true,
	},
	render: (args) => (
		<Popover>
			<PopoverAnchor {...args}>
				<div
					style={{
						display: 'flex',
						gap: 8,
						alignItems: 'center',
						padding: 8,
						borderRadius: 4,
						borderStyle: 'solid',
						borderWidth: 1,
						borderColor: 'var(--border)',
						width: 'fit-content',
					}}
				>
					<span style={{ fontSize: 14, lineHeight: 1.42857 }}>Row as anchor</span>
					<PopoverTrigger asChild>
						<Button variant={ButtonVariant.Solid} color={ButtonColor.Secondary} size="sm">
							Trigger
						</Button>
					</PopoverTrigger>
				</div>
			</PopoverAnchor>
			<PopoverContent style={{ width: 224 }}>
				<p style={{ fontSize: 14, lineHeight: 1.42857 }}>
					Content positioned against the anchor row, not the trigger.
				</p>
			</PopoverContent>
		</Popover>
	),
};
