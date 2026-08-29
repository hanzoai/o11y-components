import { ChevronDown } from '@signozhq/icons';
import {
	Button,
	ButtonColor,
	ButtonVariant,
	Calendar,
	Input,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { popoverArgTypes } from './shared/popover-arg-types.js';

const SIDES = ['top', 'right', 'bottom', 'left'] as const;
const ALIGNS = ['start', 'center', 'end'] as const;

const meta: Meta<typeof Popover> = {
	title: 'Primitive Components/Popover',
	component: Popover,
	argTypes: popoverArgTypes,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
	args: {
		defaultOpen: false,
	},
	render: (args) => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
			<Popover {...args}>
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
							<div
								style={{
									display: 'grid',
									gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
									alignItems: 'center',
									gap: 16,
								}}
							>
								<label htmlFor="height">Height</label>
								<Input
									id="height"
									defaultValue="25px"
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
								<label htmlFor="maxHeight">Max. height</label>
								<Input
									id="maxHeight"
									defaultValue="none"
									style={{ gridColumn: 'span 2/span 2', height: 32 }}
								/>
							</div>
						</div>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	),
};

const fixedDate = 1771949360343;

export const DateAndTimePicker: Story = {
	render: () => {
		const [date, setDate] = React.useState<Date | undefined>(new Date(fixedDate));
		const [open, setOpen] = React.useState(false);
		const [time, setTime] = React.useState('10:30:00');

		return (
			<div style={{ width: '100%', maxWidth: 1536, display: 'flex', gap: 16 }}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
					<label
						htmlFor="date-picker"
						style={{ paddingInline: 4, fontSize: 12, lineHeight: 1.33333 }}
					>
						Date
					</label>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant={ButtonVariant.Solid}
								color={ButtonColor.Primary}
								id="date-picker"
								style={{ width: 360, justifyContent: 'space-between', fontWeight: 400 }}
							>
								{date ? `${date.toLocaleDateString()} : ${time}` : 'Select date'}
								<ChevronDown size={16} />
							</Button>
						</PopoverTrigger>
						<PopoverContent style={{ width: 'auto', overflow: 'hidden', padding: 0 }} align="start">
							<Calendar
								mode="single"
								selected={date}
								onSelect={(d) => {
									setDate(d);
									setOpen(false);
								}}
							/>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									gap: 12,
									padding: 12,
									borderTopStyle: 'solid',
									borderTopWidth: 1,
								}}
							>
								<label
									htmlFor="time-picker"
									style={{ paddingInline: 4, fontSize: 12, lineHeight: 1.33333 }}
								>
									Time
								</label>
								<Input
									type="time"
									value={time}
									onChange={(e) => setTime(e.target.value)}
									id="time-picker"
									step="1"
									className="date-input"
								/>
							</div>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		);
	},
};

export const PopoverShowcase: Story = {
	parameters: {
		layout: 'fullscreen',
		docs: { story: { autoplay: true } },
	},
	render: () => (
		<div
			style={{ backgroundColor: 'var(--background)', padding: 32, borderRadius: 4, minHeight: 600 }}
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
							<Popover key={side}>
								<PopoverTrigger asChild>
									<Button
										variant={ButtonVariant.Solid}
										color={ButtonColor.Secondary}
										style={{ textTransform: 'capitalize' }}
									>
										{side}
									</Button>
								</PopoverTrigger>
								<PopoverContent side={side} arrow>
									<p style={{ fontSize: 14, lineHeight: 1.42857 }}>Popover on {side}</p>
								</PopoverContent>
							</Popover>
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
							<Popover key={align}>
								<PopoverTrigger asChild>
									<Button
										variant={ButtonVariant.Solid}
										color={ButtonColor.Secondary}
										style={{ textTransform: 'capitalize' }}
									>
										{align}
									</Button>
								</PopoverTrigger>
								<PopoverContent side="top" align={align} arrow>
									<p style={{ fontSize: 14, lineHeight: 1.42857 }}>Align {align}</p>
								</PopoverContent>
							</Popover>
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
						<Popover>
							<PopoverTrigger asChild>
								<Button variant={ButtonVariant.Solid} color={ButtonColor.Secondary}>
									Without arrow
								</Button>
							</PopoverTrigger>
							<PopoverContent arrow={false}>
								<p style={{ fontSize: 14, lineHeight: 1.42857 }}>No arrow</p>
							</PopoverContent>
						</Popover>
						<Popover>
							<PopoverTrigger asChild>
								<Button variant={ButtonVariant.Solid} color={ButtonColor.Secondary}>
									With arrow
								</Button>
							</PopoverTrigger>
							<PopoverContent arrow>
								<p style={{ fontSize: 14, lineHeight: 1.42857 }}>With arrow</p>
							</PopoverContent>
						</Popover>
					</div>
				</div>

				<div className="stack-16">
					<h2
						style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, color: 'var(--foreground)' }}
					>
						Default open
					</h2>
					<Popover defaultOpen>
						<PopoverTrigger asChild>
							<Button variant={ButtonVariant.Solid} color={ButtonColor.Secondary}>
								Open by default
							</Button>
						</PopoverTrigger>
						<PopoverContent>
							<p style={{ fontSize: 14, lineHeight: 1.42857 }}>I am open by default</p>
						</PopoverContent>
					</Popover>
				</div>

				<div className="stack-16">
					<h2
						style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 600, color: 'var(--foreground)' }}
					>
						Custom content
					</h2>
					<Popover>
						<PopoverTrigger asChild>
							<Button variant={ButtonVariant.Solid} color={ButtonColor.Primary}>
								Rich content
							</Button>
						</PopoverTrigger>
						<PopoverContent style={{ width: 256 }} arrow>
							<div className="stack-8">
								<span style={{ fontWeight: 500 }}>Custom popover</span>
								<p style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}>
									With multiple lines and rich content.
								</p>
							</div>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</div>
	),
};
