import { parseAsBoolean, useQueryState } from 'nuqs';
import { useCallback } from 'react';
import { ConfirmDialog, type ConfirmDialogProps } from './confirm-dialog.js';

export type ConfirmDialogUrlProps = {
	urlKey: string;
} & Omit<ConfirmDialogProps, 'open' | 'onOpenChange'>;

export function ConfirmDialogUrl({ urlKey, onConfirm, onCancel, ...props }: ConfirmDialogUrlProps) {
	const [open, setOpen] = useQueryState(urlKey, parseAsBoolean);
	const onCancelProxy = useCallback(async () => {
		await setOpen(false);
		onCancel?.();
	}, [setOpen, onCancel]);
	const onConfirmProxy = useCallback(async () => {
		const canClose = await onConfirm();

		if (canClose === true || canClose === undefined) {
			await setOpen(false);
		}

		return canClose;
	}, [setOpen, onConfirm]);

	return (
		<ConfirmDialog
			open={open || false}
			onConfirm={onConfirmProxy}
			onCancel={onCancelProxy}
			{...props}
		/>
	);
}
