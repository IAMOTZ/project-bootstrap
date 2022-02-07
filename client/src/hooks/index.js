
import { useQuery, useMutation } from 'react-query';
import { useToast } from '../components/Toast';
import apiService from '../services/Api';


export const useCreateData = (_, queryOpts) => {
  const { toastSuccess, toastError } = useToast();

  return useMutation(apiService.createData, {
    onSuccess: (data) => {
      // Do whatever you want with data here
      toastSuccess('Create data successful.');
    },
    onError: (error) => {
      toastError(error?.message || 'Error creating data.');
    },
    ...queryOpts,
  });
};

export const useData = ({ limit, offset } = {}, queryOpts) => {
  const { toastError } = useToast();

  return useQuery(
    ['data', limit, offset],
    () => apiService.fetchData({ limit, offset }), {
    onError: (error) => {
      toastError(error?.message || 'Error fetching data.');
    },
    ...queryOpts,
  });
};

// Real Time - Refetch every 1 minute
export const useRealTimeData = ({ limit, offset } = {}, queryOpts) => {
  const { toastError } = useToast();

  return useQuery(
    ['real-time-data', limit, offset],
    () => apiService.fetchRealTimeData({ limit, offset }), {
    onError: (error) => {
      toastError(error?.message || 'Error fetching real time data.');
    },
    staleTime: 5 * 1000,
    ...queryOpts,
  });
};