import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from '@signozhq/icons';
import { motion, type Variants } from 'motion/react';
import * as React from 'react';
import { useMemo } from 'react';
import { cn } from '../lib/utils.js';
import styles from './dialog.module.css';

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
	return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

const DialogTrigger = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Trigger>,
	React.ComponentProps<typeof DialogPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Trigger
		ref={ref}
		data-slot="dialog-trigger"
		className={cn(styles.dialog__trigger, className)}
		{...props}
	/>
));
DialogTrigger.displayName = 'DialogTrigger';

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
	return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

const overlayVariants: Variants = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const getContentVariants = (position: DialogPosition): Variants => {
	const baseTransform =
		position === 'center'
			? 'translateX(-50%) translateY(-50%)'
			: position === 'top'
				? 'translateX(-50%)'
				: 'none';

	return {
		initial: {
			opacity: 0,
			transform: `${baseTransform} scale(0.95)`,
		},
		animate: {
			opacity: 1,
			transform: `${baseTransform} scale(1)`,
		},
		exit: {
			opacity: 0,
			transform: `${baseTransform} scale(0.95)`,
		},
	};
};

const DialogClose = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Close>,
	React.ComponentProps<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Close
		ref={ref}
		data-slot="dialog-close"
		className={cn(styles.dialog__close, className)}
		{...props}
	/>
));
DialogClose.displayName = 'DialogClose';

const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentProps<typeof DialogPrimitive.Overlay>
>(({ className, style, ...props }, ref) => (
	<DialogPrimitive.Overlay ref={ref} data-slot="dialog-overlay" asChild {...props}>
		<motion.div
			className={cn(styles.dialog__overlay, className)}
			style={style}
			variants={overlayVariants}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
		/>
	</DialogPrimitive.Overlay>
));
DialogOverlay.displayName = 'DialogOverlay';

export type DialogPosition = 'top' | 'center' | 'custom';
export type DialogSize = 'narrow' | 'base' | 'wide' | 'extra-wide';
const dialogContentTransition = { duration: 0.2, ease: [0.4, 0, 0.2, 1] };

export type DialogContentProps = React.ComponentProps<typeof DialogPrimitive.Content> & {
	showCloseButton?: boolean;
	width?: DialogSize;
	position?: DialogPosition;
	offset?: number;
	onClose?: () => void;
};

const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	DialogContentProps
>(
	(
		{
			className,
			children,
			showCloseButton = true,
			width = 'base',
			position = 'center',
			offset = 100,
			style: propStyle,
			...props
		},
		ref
	) => {
		const style = useMemo(() => {
			const positionStyle = position === 'top' ? { top: `${offset}px` } : undefined;
			return { ...positionStyle, ...propStyle };
		}, [propStyle, position, offset]);

		const variants = useMemo(() => getContentVariants(position), [position]);

		return (
			<DialogPortal data-slot="dialog-portal">
				<DialogOverlay />
				<DialogPrimitive.Content
					ref={ref}
					data-slot="dialog-content"
					data-width={width}
					data-position={position}
					asChild
					{...props}
				>
					<motion.div
						className={cn(styles.dialog__content, className)}
						style={style}
						variants={variants}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={dialogContentTransition}
					>
						{children}
						{showCloseButton && (
							<DialogPrimitive.Close
								data-slot="dialog-close"
								className={styles.dialog__close__button}
								onClick={props.onClose}
							>
								<X />
								<span className={styles.dialog__close__button_screenreader}>Close</span>
							</DialogPrimitive.Close>
						)}
					</motion.div>
				</DialogPrimitive.Content>
			</DialogPortal>
		);
	}
);
DialogContent.displayName = 'DialogContent';

const DialogHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			data-slot="dialog-header"
			className={cn(styles.dialog__header, className)}
			{...props}
		/>
	)
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			data-slot="dialog-footer"
			className={cn(styles.dialog__footer, className)}
			{...props}
		/>
	)
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentProps<typeof DialogPrimitive.Title> & {
		icon?: React.ReactNode;
	}
>(({ className, icon, children, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		data-slot="dialog-title"
		className={cn(styles.dialog__title, className)}
		{...props}
	>
		{icon}
		{children}
	</DialogPrimitive.Title>
));
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentProps<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		data-slot="dialog-description"
		className={cn(styles.dialog__description, className)}
		{...props}
	/>
));
DialogDescription.displayName = 'DialogDescription';

export {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
};
