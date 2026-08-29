import { CheckCheck, Copy } from '@signozhq/icons';
import { useState } from 'react';

interface CopyButtonProps {
	text: string;
	className?: string;
}

export function CopyButton({ text, className = '' }: CopyButtonProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	return (
		<button
			type="button"
			onClick={handleCopy}
			className={`copy-button ${className}`}
			title={`Copy ${text}`}
		>
			{copied ? (
				<CheckCheck style={{ color: 'var(--l2-foreground)' }} />
			) : (
				<Copy style={{ color: 'var(--l2-foreground)' }} />
			)}
		</button>
	);
}
