import type React from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../dialog.js';

export interface DialogWrapperProps {
	title?: string;
	children: React.ReactNode;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	trigger?: React.ReactNode;
	footer?: React.ReactNode;
	className?: string;
	disableOutsideClick?: boolean;
	showCloseButton?: boolean;
	width?: 'narrow' | 'base' | 'wide' | 'extra-wide';
	titleIcon?: React.ReactNode;
}

export function DialogWrapper({
	title,
	children,
	open,
	onOpenChange,
	trigger,
	className,
	disableOutsideClick = false,
	showCloseButton = true,
	width = 'base',
	titleIcon,
	footer,
}: DialogWrapperProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			{trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
			<DialogContent
				className={className}
				showCloseButton={showCloseButton}
				onPointerDownOutside={disableOutsideClick ? (e) => e.preventDefault() : undefined}
				width={width}
			>
				{title && (
					<DialogHeader>
						{title && <DialogTitle icon={titleIcon}>{title}</DialogTitle>}
					</DialogHeader>
				)}
				{children && <DialogDescription>{children}</DialogDescription>}
				{footer && <DialogFooter>{footer}</DialogFooter>}
			</DialogContent>
		</Dialog>
	);
}
