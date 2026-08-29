import { Code, Database, GitBranch, Terminal } from '@signozhq/icons';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectLoading,
	SelectSeparator,
	SelectTrigger,
} from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Select> = {
	title: 'Primitive Components/Select',
	component: Select,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof Select>;

const frameworks = [
	{ value: 'react', label: 'React' },
	{ value: 'vue', label: 'Vue' },
	{ value: 'angular', label: 'Angular' },
	{ value: 'svelte', label: 'Svelte' },
];

const languages = [
	{ value: 'javascript', label: 'JavaScript' },
	{ value: 'typescript', label: 'TypeScript' },
	{ value: 'python', label: 'Python' },
	{ value: 'go', label: 'Go' },
	{ value: 'rust', label: 'Rust' },
];

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState('');

		return (
			<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
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

export const WithGroups: Story = {
	render: () => {
		const [value, setValue] = useState('');

		return (
			<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
				<Select value={value} onChange={(v) => setValue(v as string)}>
					<SelectTrigger placeholder="Select a technology..." />
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Frameworks</SelectLabel>
							{frameworks.map((f) => (
								<SelectItem key={f.value} value={f.value}>
									{f.label}
								</SelectItem>
							))}
						</SelectGroup>
						<SelectSeparator />
						<SelectGroup>
							<SelectLabel>Languages</SelectLabel>
							{languages.map((l) => (
								<SelectItem key={l.value} value={l.value}>
									{l.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
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

export const WithIcons: Story = {
	render: () => {
		const [value, setValue] = useState('');

		return (
			<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
				<Select value={value} onChange={(v) => setValue(v as string)}>
					<SelectTrigger placeholder="Select a tool..." style={{ display: 'flex', gap: 8 }} />
					<SelectContent>
						<SelectItem value="react" textValue="React" style={{ display: 'flex', gap: 8 }}>
							<Code style={{ marginRight: 8, height: 16, width: 16 }} />
							React
						</SelectItem>
						<SelectItem value="nodejs" textValue="Node.js" style={{ display: 'flex', gap: 8 }}>
							<Terminal style={{ marginRight: 8, height: 16, width: 16 }} />
							Node.js
						</SelectItem>
						<SelectItem value="postgres" textValue="PostgreSQL" style={{ display: 'flex', gap: 8 }}>
							<Database style={{ marginRight: 8, height: 16, width: 16 }} />
							PostgreSQL
						</SelectItem>
						<SelectItem value="git" textValue="Git" style={{ display: 'flex', gap: 8 }}>
							<GitBranch style={{ marginRight: 8, height: 16, width: 16 }} />
							Git
						</SelectItem>
					</SelectContent>
				</Select>
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

export const MultiSelect: Story = {
	render: () => {
		const [values, setValues] = useState<string[]>([]);

		return (
			<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
				<Select multiple value={values} onChange={(v) => setValues(v as string[])}>
					<SelectTrigger placeholder="Select frameworks..." />
					<SelectContent>
						{frameworks.map((f) => (
							<SelectItem key={f.value} value={f.value}>
								{f.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<p
					style={{
						marginTop: 16,
						fontSize: 14,
						lineHeight: 1.42857,
						color: 'var(--muted-foreground)',
					}}
				>
					Selected: {values.length > 0 ? values.join(', ') : 'none'}
				</p>
			</div>
		);
	},
};

export const MultiSelectWithOverflow: Story = {
	render: () => {
		const [values, setValues] = useState<string[]>(['react', 'vue', 'angular']);

		return (
			<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
				<Select multiple value={values} onChange={(v) => setValues(v as string[])}>
					<SelectTrigger placeholder="Select frameworks..." maxDisplayedPills={2} />
					<SelectContent>
						{frameworks.map((f) => (
							<SelectItem key={f.value} value={f.value}>
								{f.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<p
					style={{
						marginTop: 16,
						fontSize: 14,
						lineHeight: 1.42857,
						color: 'var(--muted-foreground)',
					}}
				>
					Selected: {values.length > 0 ? values.join(', ') : 'none'}
				</p>
				<p
					style={{
						marginTop: 4,
						fontSize: 12,
						lineHeight: 1.33333,
						color: 'var(--muted-foreground)',
					}}
				>
					(maxDisplayedPills=2, showing +N for overflow)
				</p>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => (
		<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
			<Select disabled>
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
	),
};

export const DisabledItems: Story = {
	render: () => {
		const [value, setValue] = useState('');

		return (
			<div style={{ padding: 32, width: '100%', maxWidth: 384 }}>
				<Select value={value} onChange={(v) => setValue(v as string)}>
					<SelectTrigger placeholder="Select a framework..." />
					<SelectContent>
						<SelectItem value="react">React</SelectItem>
						<SelectItem value="vue" disabled>
							Vue (disabled)
						</SelectItem>
						<SelectItem value="angular">Angular</SelectItem>
						<SelectItem value="svelte" disabled>
							Svelte (disabled)
						</SelectItem>
					</SelectContent>
				</Select>
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

export const Loading: Story = {
	render: () => (
		<div className="stack-32" style={{ padding: 32, width: '100%', maxWidth: 672 }}>
			<div>
				<h3 style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500, marginBottom: 8 }}>
					Infinite Loading
				</h3>
				<Select>
					<SelectTrigger placeholder="Select a framework..." loading />
					<SelectContent>
						<SelectLoading>Fetching options...</SelectLoading>
					</SelectContent>
				</Select>
			</div>
			<div>
				<h3 style={{ fontSize: 14, lineHeight: 1.42857, fontWeight: 500, marginBottom: 8 }}>
					Loading with Delay (5s)
				</h3>
				<SelectLoadingWithDelay />
			</div>
		</div>
	),
};

function SelectLoadingWithDelay() {
	const [value, setValue] = useState('');
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
		<Select value={value} onChange={(v) => setValue(v as string)}>
			<SelectTrigger placeholder="Select a framework..." loading={isLoading} />
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
