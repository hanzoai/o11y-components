import React, { useCallback } from 'react';
import { Button, type ButtonProps } from '../../button/index.js';
import {
	Dialog,
	DialogContent,
	type DialogContentProps,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '../dialog.js';

export type ConfirmDialogProps = {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;

	title: string;
	titleIcon?: React.ReactNode;
	children: React.ReactNode;

	className?: string;

	cancelText?: string;
	onCancel?: () => void;
	onConfirm: () => Promise<boolean | undefined | void> | boolean | undefined | void;
	cancelIcon?: React.ReactElement;

	confirmText: string;
	confirmColor?: ButtonProps['color'];
	confirmIcon?: React.ReactElement;

	disableOutsideClick?: boolean;
} & Pick<DialogContentProps, 'width' | 'position'>;

export function ConfirmDialog({
	open,
	onOpenChange,
	title,
	titleIcon,
	children,
	className,

	cancelText = 'Cancel',
	onCancel,
	cancelIcon,

	confirmText,
	onConfirm,
	confirmColor = 'destructive',
	confirmIcon,

	disableOutsideClick = false,
	width = 'base',
}: ConfirmDialogProps) {
	const [onConfirming, setOnConfirming] = React.useState(false);
	const onConfirmProxy = useCallback(async () => {
		setOnConfirming(true);
		const canClose = await onConfirm();
		setOnConfirming(false);

		if (canClose === true || canClose === undefined) {
			onOpenChange?.(false);
		}
	}, [onConfirm, onOpenChange]);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent
				className={className}
				onPointerDownOutside={disableOutsideClick ? (e) => e.preventDefault() : undefined}
				width={width}
				onClose={onCancel}
			>
				{title && (
					<DialogHeader>
						{title && <DialogTitle icon={titleIcon}>{title}</DialogTitle>}
					</DialogHeader>
				)}
				{children && <DialogDescription>{children}</DialogDescription>}
				<DialogFooter>
					<Button
						type="button"
						variant="ghost"
						color="secondary"
						onClick={onCancel}
						prefix={cancelIcon}
					>
						{cancelText}
					</Button>

					<Button
						type="button"
						variant="solid"
						color={confirmColor}
						loading={onConfirming}
						onClick={onConfirmProxy}
						prefix={confirmIcon}
					>
						{confirmText}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
