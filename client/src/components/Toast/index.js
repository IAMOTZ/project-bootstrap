import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

const ToastProvider = ({ children }) => {
  return (<SnackbarProvider
    autoHideDuration={3000}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}>{children}
  </SnackbarProvider>)
}

export const useToast = () => {
  const { enqueueSnackbar } = useSnackbar();

  const toastSuccess = (message, opts) => {
    enqueueSnackbar(message, { variant: 'success', ...opts });
  }

  const toastError = (message, opts) => {
    enqueueSnackbar(message, { variant: 'error', ...opts });
  }

  return { toastError, toastSuccess };
}

export default ToastProvider;