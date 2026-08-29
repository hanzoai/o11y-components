import {
	CircleAlert,
	CircleCheck,
	CircleX,
	Clock,
	Eye,
	Pencil,
	Trash2,
	Upload,
} from '@signozhq/icons';
import {
	Badge,
	Button,
	ButtonColor,
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@signozhq/ui';
import type { Meta, StoryObj } from '@storybook/react-vite';

// Enhanced sample data
const users = [
	{
		id: '1',
		name: 'Sarah Johnson',
		email: 'sarah.johnson@company.com',
		role: 'admin',
		status: 'active',
		department: 'Engineering',
		lastLogin: '2024-01-15T10:30:00Z',
		avatar: 'SJ',
	},
	{
		id: '2',
		name: 'Michael Chen',
		email: 'michael.chen@company.com',
		role: 'user',
		status: 'active',
		department: 'Marketing',
		lastLogin: '2024-01-14T15:45:00Z',
		avatar: 'MC',
	},
	{
		id: '3',
		name: 'Emily Rodriguez',
		email: 'emily.rodriguez@company.com',
		role: 'moderator',
		status: 'pending',
		department: 'Support',
		lastLogin: '2024-01-10T09:15:00Z',
		avatar: 'ER',
	},
	{
		id: '4',
		name: 'David Kim',
		email: 'david.kim@company.com',
		role: 'user',
		status: 'inactive',
		department: 'Sales',
		lastLogin: '2024-01-05T14:20:00Z',
		avatar: 'DK',
	},
	{
		id: '5',
		name: 'Lisa Wang',
		email: 'lisa.wang@company.com',
		role: 'admin',
		status: 'active',
		department: 'Product',
		lastLogin: '2024-01-15T11:00:00Z',
		avatar: 'LW',
	},
];

const meta: Meta<typeof Table> = {
	title: 'Old Components/Basic Table',
	component: Table,
	argTypes: {
		testId: {
			control: 'text',
			description: 'Test ID for the table.',
			table: { category: 'Testing', type: { summary: 'string' } },
		},
		id: {
			control: 'text',
			description: 'A unique identifier for the table.',
			table: { category: 'Accessibility', type: { summary: 'string' } },
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes for custom styling.',
			table: { category: 'Styling', type: { summary: 'string' } },
		},
	},
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
## Basic Table Components

The basic table components provide a simple, semantic HTML table structure with consistent styling. These components are perfect for:

### Use Cases
- **Simple data display**: When you need to show basic tabular data
- **Static content**: Tables that don't require advanced features
- **Lightweight implementation**: Minimal JavaScript overhead
- **Accessibility**: Semantic HTML structure for screen readers
- **Custom styling**: Full control over appearance and behavior

### Components
- **Table**: The main table container
- **TableHeader**: Header section of the table
- **TableBody**: Body section containing the data rows
- **TableRow**: Individual table rows
- **TableHead**: Header cells (th elements)
- **TableCell**: Data cells (td elements)
- **TableCaption**: Optional caption for the table

### Key Features
- **Semantic HTML**: Proper table structure for accessibility
- **Responsive design**: Works well on different screen sizes
- **Customizable styling**: Easy to style with CSS classes
- **TypeScript support**: Full type safety for all components
- **Consistent theming**: Integrates with your design system

### When to Use
- Simple data presentation
- Static content that doesn't change frequently
- When you need full control over styling and behavior
- Lightweight applications where bundle size matters
- Accessibility-focused implementations
				`,
			},
		},
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

// Simple table with basic data
export const Simple: Story = {
	render: () => (
		<div className="stack-16">
			<div
				style={{
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4,
					padding: 24,
					backgroundColor: 'var(--background)',
				}}
			>
				<h3
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 8,
						color: 'var(--foreground)',
					}}
				>
					Simple User Table
				</h3>
				<p
					style={{
						fontSize: 14,
						lineHeight: 1.42857,
						color: 'var(--muted-foreground)',
						marginBottom: 16,
					}}
				>
					A basic table with clean, minimal styling for simple data display.
				</p>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Role</TableHead>
							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map((user) => (
							<TableRow key={user.id}>
								<TableCell style={{ fontWeight: 500 }}>{user.name}</TableCell>
								<TableCell style={{ color: 'var(--muted-foreground)' }}>{user.email}</TableCell>
								<TableCell style={{ textTransform: 'capitalize' }}>{user.role}</TableCell>
								<TableCell>
									<Badge
										variant="outline"
										className={
											user.status === 'active'
												? 'bg-green-100 text-green-800'
												: 'bg-gray-100 text-gray-800'
										}
									>
										{user.status}
									</Badge>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	),
};

// Enhanced table with more features
export const Enhanced: Story = {
	render: () => (
		<div className="stack-16">
			<div
				style={{
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4,
					padding: 24,
					backgroundColor: 'var(--background)',
				}}
			>
				<h3
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 8,
						color: 'var(--foreground)',
					}}
				>
					Enhanced User Table
				</h3>
				<p
					style={{
						fontSize: 14,
						lineHeight: 1.42857,
						color: 'var(--muted-foreground)',
						marginBottom: 16,
					}}
				>
					A more detailed table with avatars, status indicators, and action buttons.
				</p>
				<Table>
					<TableHeader>
						<TableRow
							style={{ backgroundColor: 'color-mix(in oklab, var(--muted) 50%, transparent)' }}
						>
							<TableHead style={{ fontWeight: 600 }}>User</TableHead>
							<TableHead style={{ fontWeight: 600 }}>Department</TableHead>
							<TableHead style={{ fontWeight: 600 }}>Role</TableHead>
							<TableHead style={{ fontWeight: 600 }}>Status</TableHead>
							<TableHead style={{ fontWeight: 600 }}>Last Login</TableHead>
							<TableHead style={{ fontWeight: 600 }}>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map((user, index) => (
							<TableRow
								key={user.id}
								style={{
									backgroundColor:
										index % 2 === 0
											? 'var(--background)'
											: 'color-mix(in srgb, var(--muted) 30%, transparent)',
								}}
							>
								<TableCell>
									<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
										<div
											style={{
												backgroundImage:
													'linear-gradient(to bottom right in oklab, #3080ff, #9810fa)',
												height: 32,
												width: 32,
												borderRadius: 9999,
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#fff',
												fontSize: 12,
												lineHeight: 1.33333,
												fontWeight: 500,
											}}
										>
											{user.avatar}
										</div>
										<div style={{ display: 'flex', flexDirection: 'column' }}>
											<span style={{ fontWeight: 500, fontSize: 14, lineHeight: 1.42857 }}>
												{user.name}
											</span>
											<span
												style={{
													fontSize: 12,
													lineHeight: 1.33333,
													color: 'var(--muted-foreground)',
												}}
											>
												{user.email}
											</span>
										</div>
									</div>
								</TableCell>
								<TableCell style={{ fontSize: 14, lineHeight: 1.42857 }}>
									{user.department}
								</TableCell>
								<TableCell>
									<Badge
										variant="outline"
										className={
											user.role === 'admin'
												? 'bg-purple-100 text-purple-800 border-purple-200'
												: user.role === 'moderator'
													? 'bg-orange-100 text-orange-800 border-orange-200'
													: 'bg-blue-100 text-blue-800 border-blue-200'
										}
									>
										{user.role}
									</Badge>
								</TableCell>
								<TableCell>
									<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
										{user.status === 'active' && (
											<CircleCheck style={{ height: 16, width: 16, color: '#00a544' }} />
										)}
										{user.status === 'inactive' && (
											<CircleX style={{ height: 16, width: 16, color: '#e40014' }} />
										)}
										{user.status === 'pending' && (
											<Clock style={{ height: 16, width: 16, color: '#cd8900' }} />
										)}
										<Badge
											variant="outline"
											className={
												user.status === 'active'
													? 'bg-green-100 text-green-800 border-green-200'
													: user.status === 'inactive'
														? 'bg-red-100 text-red-800 border-red-200'
														: 'bg-yellow-100 text-yellow-800 border-yellow-200'
											}
										>
											{user.status}
										</Badge>
									</div>
								</TableCell>
								<TableCell
									style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}
								>
									{new Date(user.lastLogin).toLocaleDateString('en-US', {
										month: 'short',
										day: 'numeric',
										hour: '2-digit',
										minute: '2-digit',
									})}
								</TableCell>
								<TableCell>
									<div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
										<Button
											variant="ghost"
											color={ButtonColor.None}
											size="sm"
											style={{ height: 32, width: 32, padding: 0 }}
										>
											<Eye style={{ height: 16, width: 16 }} />
										</Button>
										<Button
											variant="ghost"
											color={ButtonColor.None}
											size="sm"
											style={{ height: 32, width: 32, padding: 0 }}
										>
											<Pencil style={{ height: 16, width: 16 }} />
										</Button>
										<Button
											variant="ghost"
											color={ButtonColor.Destructive}
											size="sm"
											style={{ height: 32, width: 32, padding: 0 }}
										>
											<Trash2 style={{ height: 16, width: 16 }} />
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	),
};

// Table with caption and summary
export const WithCaption: Story = {
	render: () => (
		<div className="stack-16">
			<div
				style={{
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4,
					padding: 24,
					backgroundColor: 'var(--background)',
				}}
			>
				<h3
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 8,
						color: 'var(--foreground)',
					}}
				>
					Table with Caption
				</h3>
				<p
					style={{
						fontSize: 14,
						lineHeight: 1.42857,
						color: 'var(--muted-foreground)',
						marginBottom: 16,
					}}
				>
					A table with a caption and summary information for better accessibility.
				</p>
				<Table>
					<TableCaption>
						A list of all users in the system with their current status and role information.
					</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Department</TableHead>
							<TableHead>Role</TableHead>
							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map((user) => (
							<TableRow key={user.id}>
								<TableCell style={{ fontWeight: 500 }}>{user.name}</TableCell>
								<TableCell>{user.department}</TableCell>
								<TableCell style={{ textTransform: 'capitalize' }}>{user.role}</TableCell>
								<TableCell>
									<Badge
										variant="outline"
										className={
											user.status === 'active'
												? 'bg-green-100 text-green-800'
												: 'bg-gray-100 text-gray-800'
										}
									>
										{user.status}
									</Badge>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	),
};

// Empty state table
export const Empty: Story = {
	render: () => (
		<div className="stack-16">
			<div
				style={{
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4,
					padding: 24,
					backgroundColor: 'var(--background)',
				}}
			>
				<h3
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 8,
						color: 'var(--foreground)',
					}}
				>
					Empty State
				</h3>
				<p
					style={{
						fontSize: 14,
						lineHeight: 1.42857,
						color: 'var(--muted-foreground)',
						marginBottom: 16,
					}}
				>
					How the table looks when there&apos;s no data to display.
				</p>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Role</TableHead>
							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell colSpan={4} style={{ textAlign: 'center', paddingBlock: 48 }}>
								<div
									style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
								>
									<CircleAlert
										style={{ height: 32, width: 32, color: 'var(--muted-foreground)' }}
									/>
									<p
										style={{
											fontSize: 14,
											lineHeight: 1.42857,
											fontWeight: 500,
											color: 'var(--foreground)',
										}}
									>
										No users found
									</p>
									<p
										style={{ fontSize: 14, lineHeight: 1.42857, color: 'var(--muted-foreground)' }}
									>
										Get started by creating a new user.
									</p>
									<Button
										size="sm"
										style={{ marginTop: 8 }}
										variant="ghost"
										color={ButtonColor.None}
										prefix={<Upload />}
									>
										Add User
									</Button>
								</div>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
		</div>
	),
};

// Compact table for mobile
export const Compact: Story = {
	render: () => (
		<div className="stack-16">
			<div
				style={{
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4,
					padding: 24,
					backgroundColor: 'var(--background)',
				}}
			>
				<h3
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 8,
						color: 'var(--foreground)',
					}}
				>
					Compact Table
				</h3>
				<p
					style={{
						fontSize: 14,
						lineHeight: 1.42857,
						color: 'var(--muted-foreground)',
						marginBottom: 16,
					}}
				>
					A compact version perfect for mobile devices or space-constrained layouts.
				</p>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead style={{ fontSize: 14, lineHeight: 1.42857 }}>User</TableHead>
							<TableHead style={{ fontSize: 14, lineHeight: 1.42857 }}>Role</TableHead>
							<TableHead style={{ fontSize: 14, lineHeight: 1.42857 }}>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.slice(0, 3).map((user) => (
							<TableRow key={user.id}>
								<TableCell>
									<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
										<div
											style={{
												backgroundImage:
													'linear-gradient(to bottom right in oklab, #3080ff, #9810fa)',
												height: 24,
												width: 24,
												borderRadius: 9999,
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
												color: '#fff',
												fontSize: 12,
												lineHeight: 1.33333,
												fontWeight: 500,
											}}
										>
											{user.avatar}
										</div>
										<div style={{ display: 'flex', flexDirection: 'column' }}>
											<span style={{ fontWeight: 500, fontSize: 14, lineHeight: 1.42857 }}>
												{user.name}
											</span>
											<span
												style={{
													fontSize: 12,
													lineHeight: 1.33333,
													color: 'var(--muted-foreground)',
												}}
											>
												{user.email}
											</span>
										</div>
									</div>
								</TableCell>
								<TableCell>
									<Badge style={{ fontSize: 12, lineHeight: 1.33333, textTransform: 'capitalize' }}>
										{user.role}
									</Badge>
								</TableCell>
								<TableCell>
									{user.status === 'active' && (
										<CircleCheck style={{ height: 16, width: 16, color: '#00a544' }} />
									)}
									{user.status === 'inactive' && (
										<CircleX style={{ height: 16, width: 16, color: '#e40014' }} />
									)}
									{user.status === 'pending' && (
										<Clock style={{ height: 16, width: 16, color: '#cd8900' }} />
									)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	),
};

// Table with fixed height and overflow
export const WithFixedHeight: Story = {
	render: () => (
		<div className="stack-16">
			<div
				style={{
					borderStyle: 'solid',
					borderWidth: 1,
					borderRadius: 4,
					padding: 24,
					backgroundColor: 'var(--background)',
				}}
			>
				<h3
					style={{
						fontSize: 18,
						lineHeight: 1.55556,
						fontWeight: 600,
						marginBottom: 8,
						color: 'var(--foreground)',
					}}
				>
					Table with Fixed Height
				</h3>
				<p
					style={{
						fontSize: 14,
						lineHeight: 1.42857,
						color: 'var(--muted-foreground)',
						marginBottom: 16,
					}}
				>
					A table with a fixed height of 300px. When the content exceeds this height, it becomes
					scrollable while keeping the headers sticky.
				</p>
				<Table fixedHeight={300}>
					<TableHeader sticky>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Role</TableHead>
							<TableHead>Department</TableHead>
							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map((user) => (
							<TableRow key={user.id}>
								<TableCell style={{ fontWeight: 500 }}>{user.name}</TableCell>
								<TableCell style={{ color: 'var(--muted-foreground)' }}>{user.email}</TableCell>
								<TableCell style={{ textTransform: 'capitalize' }}>{user.role}</TableCell>
								<TableCell>{user.department}</TableCell>
								<TableCell>
									<Badge
										variant="outline"
										className={
											user.status === 'active'
												? 'bg-green-100 text-green-800'
												: 'bg-gray-100 text-gray-800'
										}
									>
										{user.status}
									</Badge>
								</TableCell>
							</TableRow>
						))}
						{/* Add more rows to demonstrate overflow */}
						{Array.from({ length: 15 }, (_, i) => ({
							id: `extra-${i + 1}`,
							name: `Extra User ${i + 1}`,
							email: `extra${i + 1}@example.com`,
							role: 'user',
							department: 'Engineering',
							status: 'active',
						})).map((user) => (
							<TableRow key={user.id}>
								<TableCell style={{ fontWeight: 500 }}>{user.name}</TableCell>
								<TableCell style={{ color: 'var(--muted-foreground)' }}>{user.email}</TableCell>
								<TableCell style={{ textTransform: 'capitalize' }}>{user.role}</TableCell>
								<TableCell>{user.department}</TableCell>
								<TableCell>
									<Badge variant="outline" style={{ backgroundColor: '#dcfce7', color: '#016630' }}>
										{user.status}
									</Badge>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: `
## Table with Fixed Height

This example demonstrates how to create a table with a fixed height that handles overflow gracefully.

### Key Features:
- **Fixed Height**: The table container has a defined height of 300px
- **Vertical Scrolling**: When content exceeds the height, it becomes scrollable
- **Sticky Headers**: Headers remain visible while scrolling through the data
- **Custom Scrollbars**: Styled scrollbars for better user experience
- **No Layout Shift**: Headers maintain perfect alignment during scroll

### Usage:
\`\`\`tsx
<Table fixedHeight={300}>
  <TableHeader sticky>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/* Your table rows */}
  </TableBody>
</Table>
\`\`\`

### Props:
- **\`fixedHeight\`**: Accepts a string (e.g., "400px") or number (e.g., 400) for the container height
- **\`sticky\`**: When true on TableHeader, keeps headers visible during scroll

### CSS Classes Applied:
- **\`.table-scroll-container\`**: Container with overflow handling
- **\`.sticky-header-table\`**: Table with sticky header support
- **\`.sticky-header\`**: Sticky header styling
				`,
			},
		},
	},
};
