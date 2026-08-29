import { Input } from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof Input> = {
	title: 'Primitive Components/Input',
	component: Input,
	parameters: {
		layout: 'fullscreen',
		design: [
			{
				name: 'Figma',
				type: 'figma',
				url: 'https://www.figma.com/design/egMidgk6VJDXTumxcCYUl1/Periscope---Primitives?node-id=12-742&p=f',
			},
		],
		docs: {
			description: {
				component:
					'A flexible input component with light and dark theme support. Supports various input types including password, proper accessibility, and seamless integration with forms. Perfect for text entry, search fields, password inputs, and form validation.',
			},
		},
	},
	argTypes: {
		id: {
			control: 'text',
			description: 'A unique identifier for the input.',
			table: { category: 'Accessibility', type: { summary: 'string' } },
		},
		name: {
			control: 'text',
			description:
				'The name of the input. Submitted with its owning form as part of a name/value pair.',
			table: { category: 'Form', type: { summary: 'string' } },
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text displayed when the input is empty.',
			table: { category: 'Form', type: { summary: 'string' } },
		},
		type: {
			control: 'select',
			options: [
				'text',
				'email',
				'password',
				'number',
				'tel',
				'url',
				'search',
				'date',
				'time',
				'datetime-local',
			],
			description:
				'The input type. Determines the keyboard layout and validation behavior. Use type="password" for password inputs.',
			table: {
				category: 'Behavior',
				defaultValue: { summary: 'text' },
				type: { summary: 'string' },
			},
		},
		disabled: {
			control: 'boolean',
			description:
				'Whether the input is disabled and non-interactive. Disabled inputs cannot be focused or edited.',
			table: {
				category: 'Behavior',
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
		},
		required: {
			control: 'boolean',
			description: 'Whether the input is required. Browsers will prevent form submission if empty.',
			table: {
				category: 'Behavior',
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
		},
		readOnly: {
			control: 'boolean',
			description:
				'Whether the input is read-only. Read-only inputs can be focused but not edited.',
			table: {
				category: 'Behavior',
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
		},
		value: {
			control: 'text',
			description: 'The controlled value of the input.',
			table: { category: 'Form', type: { summary: 'string' } },
		},
		defaultValue: {
			control: 'text',
			description: 'The default uncontrolled value of the input.',
			table: { category: 'Form', type: { summary: 'string' } },
		},
		prefix: {
			control: false,
			description: 'Optional element rendered before the input, such as an icon or label.',
			table: { category: 'Appearance', type: { summary: 'React.ReactNode' } },
		},
		suffix: {
			control: false,
			description: 'Optional element rendered after the input, such as an icon or action button.',
			table: { category: 'Appearance', type: { summary: 'React.ReactNode' } },
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes for custom styling.',
			table: { category: 'Styling', type: { summary: 'string' } },
		},
		onChange: {
			control: false,
			description: 'Event handler called when the input value changes.',
			table: {
				category: 'Events',
				type: { summary: '(event: React.ChangeEvent<HTMLInputElement>) => void' },
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Input>;

// Default input story (Primary)
export const Default: Story = {
	args: {
		placeholder: 'Enter text...',
		type: 'text',
		disabled: false,
		required: false,
		readOnly: false,
	},
};

// Variant Examples - These appear in the Examples section

export const InputTypes: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Input component supports various HTML input types. Each type provides appropriate keyboard layouts and validation on mobile devices.',
			},
		},
	},
	argTypes: {
		placeholder: { control: false },
		type: { control: false },
		disabled: { control: false },
		required: { control: false },
		readOnly: { control: false },
		value: { control: false },
		defaultValue: { control: false },
		className: { control: false },
	},
	render: () => (
		<div className="stack-24" style={{ padding: 32, backgroundColor: 'var(--background)' }}>
			<div className="stack-16">
				<h3
					style={{ color: 'var(--foreground)', fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}
				>
					Common Input Types
				</h3>
				<div className="stack-16" style={{ maxWidth: 448 }}>
					<div className="stack-8">
						<label
							htmlFor="type-text"
							style={{
								color: 'var(--muted-foreground)',
								display: 'block',
								fontSize: 12,
								lineHeight: 1.33333,
							}}
						>
							Text
						</label>
						<Input id="type-text" type="text" placeholder="Enter text" />
					</div>
					<div className="stack-8">
						<label
							htmlFor="type-email"
							style={{
								color: 'var(--muted-foreground)',
								display: 'block',
								fontSize: 12,
								lineHeight: 1.33333,
							}}
						>
							Email
						</label>
						<Input id="type-email" type="email" placeholder="email@example.com" />
					</div>
					<div className="stack-8">
						<label
							htmlFor="type-password"
							style={{
								color: 'var(--muted-foreground)',
								display: 'block',
								fontSize: 12,
								lineHeight: 1.33333,
							}}
						>
							Password
						</label>
						<Input id="type-password" type="password" placeholder="Enter password" />
					</div>
					<div className="stack-8">
						<label
							htmlFor="type-number"
							style={{
								color: 'var(--muted-foreground)',
								display: 'block',
								fontSize: 12,
								lineHeight: 1.33333,
							}}
						>
							Number
						</label>
						<Input id="type-number" type="number" placeholder="Enter number" />
					</div>
					<div className="stack-8">
						<label
							htmlFor="type-tel"
							style={{
								color: 'var(--muted-foreground)',
								display: 'block',
								fontSize: 12,
								lineHeight: 1.33333,
							}}
						>
							Telephone
						</label>
						<Input id="type-tel" type="tel" placeholder="+1 (555) 000-0000" />
					</div>
					<div className="stack-8">
						<label
							htmlFor="type-url"
							style={{
								color: 'var(--muted-foreground)',
								display: 'block',
								fontSize: 12,
								lineHeight: 1.33333,
							}}
						>
							URL
						</label>
						<Input id="type-url" type="url" placeholder="https://example.com" />
					</div>
					<div className="stack-8">
						<label
							htmlFor="type-search"
							style={{
								color: 'var(--muted-foreground)',
								display: 'block',
								fontSize: 12,
								lineHeight: 1.33333,
							}}
						>
							Search
						</label>
						<Input id="type-search" type="search" placeholder="Search..." />
					</div>
				</div>
			</div>
		</div>
	),
};

export const WithLabels: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Inputs should always be paired with labels for accessibility. Labels help screen readers and provide context for users.',
			},
		},
	},
	argTypes: {
		placeholder: { control: false },
		type: { control: false },
		disabled: { control: false },
		required: { control: false },
		readOnly: { control: false },
		value: { control: false },
		defaultValue: { control: false },
		className: { control: false },
	},
	render: () => (
		<div className="stack-24" style={{ padding: 32, backgroundColor: 'var(--background)' }}>
			<div className="stack-16" style={{ maxWidth: 448 }}>
				<div className="stack-8">
					<label
						htmlFor="labeled-input-1"
						style={{
							color: 'var(--foreground)',
							display: 'block',
							fontSize: 14,
							lineHeight: 1.42857,
							fontWeight: 500,
						}}
					>
						Full Name
					</label>
					<Input id="labeled-input-1" placeholder="John Doe" />
				</div>
				<div className="stack-8">
					<label
						htmlFor="labeled-input-2"
						style={{
							color: 'var(--foreground)',
							display: 'block',
							fontSize: 14,
							lineHeight: 1.42857,
							fontWeight: 500,
						}}
					>
						Email Address
					</label>
					<Input id="labeled-input-2" type="email" placeholder="john@example.com" />
				</div>
				<div className="stack-8">
					<label
						htmlFor="labeled-input-3"
						style={{
							color: 'var(--foreground)',
							display: 'block',
							fontSize: 14,
							lineHeight: 1.42857,
							fontWeight: 500,
						}}
					>
						Phone Number
					</label>
					<Input id="labeled-input-3" type="tel" placeholder="+1 (555) 000-0000" />
				</div>
			</div>
		</div>
	),
};

export const DisabledStates: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Disabled inputs are non-interactive and visually indicate they cannot be edited. Use disabled state when an input is not applicable or waiting for user action.',
			},
		},
	},
	argTypes: {
		placeholder: { control: false },
		type: { control: false },
		disabled: { control: false },
		required: { control: false },
		readOnly: { control: false },
		value: { control: false },
		defaultValue: { control: false },
		className: { control: false },
	},
	render: () => (
		<div className="stack-24" style={{ padding: 32, backgroundColor: 'var(--background)' }}>
			<div className="stack-16" style={{ maxWidth: 448 }}>
				<div className="stack-8">
					<label
						htmlFor="disabled-input"
						style={{
							color: 'var(--foreground)',
							display: 'block',
							fontSize: 14,
							lineHeight: 1.42857,
							fontWeight: 500,
						}}
					>
						Disabled Input
					</label>
					<Input id="disabled-input" placeholder="Cannot edit this" disabled />
				</div>
			</div>
		</div>
	),
};

export const ReadOnlyStates: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Read-only inputs can be focused and selected but cannot be edited. Useful for displaying values that users can copy but not modify.',
			},
		},
	},
	argTypes: {
		placeholder: { control: false },
		type: { control: false },
		disabled: { control: false },
		required: { control: false },
		readOnly: { control: false },
		value: { control: false },
		defaultValue: { control: false },
		className: { control: false },
	},
	render: () => (
		<div className="stack-24" style={{ padding: 32, backgroundColor: 'var(--background)' }}>
			<div className="stack-16" style={{ maxWidth: 448 }}>
				<div className="stack-8">
					<label
						htmlFor="readonly-input"
						style={{
							color: 'var(--foreground)',
							display: 'block',
							fontSize: 14,
							lineHeight: 1.42857,
							fontWeight: 500,
						}}
					>
						Read-Only Input
					</label>
					<Input id="readonly-input" value="This value can be selected but not edited" readOnly />
				</div>
			</div>
		</div>
	),
};

export const RequiredFields: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Required inputs indicate that a field must be filled before form submission. Browsers will show validation messages if left empty.',
			},
		},
	},
	argTypes: {
		placeholder: { control: false },
		type: { control: false },
		disabled: { control: false },
		required: { control: false },
		readOnly: { control: false },
		value: { control: false },
		defaultValue: { control: false },
		className: { control: false },
	},
	render: () => (
		<div className="stack-24" style={{ padding: 32, backgroundColor: 'var(--background)' }}>
			<div className="stack-16" style={{ maxWidth: 448 }}>
				<div className="stack-8">
					<label
						htmlFor="required-input"
						style={{
							color: 'var(--foreground)',
							display: 'block',
							fontSize: 14,
							lineHeight: 1.42857,
							fontWeight: 500,
						}}
					>
						Email Address <span style={{ color: '#fb2c36' }}>*</span>
					</label>
					<Input id="required-input" type="email" placeholder="Required field" required />
					<p style={{ color: 'var(--muted-foreground)', fontSize: 12, lineHeight: 1.33333 }}>
						This field is required
					</p>
				</div>
			</div>
		</div>
	),
};

export const FormExamples: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Complete form examples showing how to use Input components in real-world scenarios with proper labels, validation, and accessibility.',
			},
		},
	},
	argTypes: {
		placeholder: { control: false },
		type: { control: false },
		disabled: { control: false },
		required: { control: false },
		readOnly: { control: false },
		value: { control: false },
		defaultValue: { control: false },
		className: { control: false },
	},
	render: () => (
		<div className="stack-32" style={{ padding: 32, backgroundColor: 'var(--background)' }}>
			<div className="stack-24" style={{ maxWidth: 448 }}>
				<h3
					style={{ color: 'var(--foreground)', fontSize: 14, lineHeight: 1.42857, fontWeight: 500 }}
				>
					Contact Form
				</h3>
				<form className="stack-16">
					<div className="stack-8">
						<label
							htmlFor="form-name"
							style={{
								color: 'var(--foreground)',
								display: 'block',
								fontSize: 14,
								lineHeight: 1.42857,
								fontWeight: 500,
							}}
						>
							Full Name <span style={{ color: '#fb2c36' }}>*</span>
						</label>
						<Input id="form-name" placeholder="John Doe" required />
					</div>
					<div className="stack-8">
						<label
							htmlFor="form-email"
							style={{
								color: 'var(--foreground)',
								display: 'block',
								fontSize: 14,
								lineHeight: 1.42857,
								fontWeight: 500,
							}}
						>
							Email Address <span style={{ color: '#fb2c36' }}>*</span>
						</label>
						<Input id="form-email" type="email" placeholder="john@example.com" required />
					</div>
					<div className="stack-8">
						<label
							htmlFor="form-phone"
							style={{
								color: 'var(--foreground)',
								display: 'block',
								fontSize: 14,
								lineHeight: 1.42857,
								fontWeight: 500,
							}}
						>
							Phone Number
						</label>
						<Input id="form-phone" type="tel" placeholder="+1 (555) 000-0000" />
					</div>
					<div className="stack-8">
						<label
							htmlFor="form-password"
							style={{
								color: 'var(--foreground)',
								display: 'block',
								fontSize: 14,
								lineHeight: 1.42857,
								fontWeight: 500,
							}}
						>
							Password <span style={{ color: '#fb2c36' }}>*</span>
						</label>
						<Input id="form-password" placeholder="Enter password" required type="password" />
					</div>
				</form>
			</div>
		</div>
	),
};

export const PasswordInput: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Password input variant with a built-in visibility toggle. The type is fixed to "password" and cannot be changed.',
			},
		},
	},
	argTypes: {
		placeholder: { control: 'text' },
		type: { control: false },
		disabled: { control: 'boolean' },
		required: { control: 'boolean' },
		readOnly: { control: 'boolean' },
	},
	args: {
		placeholder: 'Enter password',
		disabled: false,
		required: false,
		readOnly: false,
	},
	render: (args) => {
		return (
			<div style={{ padding: 20, marginTop: 20 }}>
				<h2 style={{ marginBottom: 12 }}>Input.Password Example</h2>

				<Input.Password {...args} />
			</div>
		);
	},
};
