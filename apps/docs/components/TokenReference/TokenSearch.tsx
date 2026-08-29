import { Search } from '@signozhq/icons';
import { Button, Input } from '@signozhq/ui';
import { useState } from 'react';

interface TokenSearchProps {
	onSearch: (query: string) => void;
	onCategoryFilter?: (category: string | null) => void;
	categories?: string[];
	selectedCategory?: string | null;
}

export function TokenSearch({
	onSearch,
	onCategoryFilter,
	categories,
	selectedCategory,
}: TokenSearchProps) {
	const [query, setQuery] = useState('');

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuery(value);
		onSearch(value);
	};

	return (
		<div className="stack-to-row" style={{ gap: 16 }}>
			<div style={{ position: 'relative' }}>
				{/* TODO: Update when we have support for prefix icons on Inputs */}
				<Search
					style={{
						position: 'absolute',
						left: 12,
						top: '50%',
						translate: '0 calc(calc(1 / 2 * 100%) * -1)',
						color: 'var(--l3-foreground)',
					}}
				/>

				<Input
					type="text"
					value={query}
					onChange={handleSearchChange}
					placeholder="Search tokens..."
					style={{ paddingInline: 40 }}
				/>
			</div>

			{onCategoryFilter && categories && categories.length > 0 && (
				<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
					<Button
						type="button"
						onClick={() => onCategoryFilter(null)}
						variant={selectedCategory === null ? 'solid' : 'outlined'}
						color={selectedCategory === null ? 'primary' : 'secondary'}
						style={{ borderRadius: 9999 }}
					>
						All
					</Button>
					{categories.map((category) => (
						<Button
							key={category}
							type="button"
							onClick={() => onCategoryFilter(category)}
							variant={selectedCategory === category ? 'solid' : 'outlined'}
							color={selectedCategory === category ? 'primary' : 'secondary'}
							style={{ borderRadius: 9999 }}
						>
							{category}
						</Button>
					))}
				</div>
			)}
		</div>
	);
}
