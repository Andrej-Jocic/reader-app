import { useDispatch as dispatch } from 'react-redux';
import { AppDispatch } from '../store';

// Custom `useDispatch` hook that is equivalent to `useDipsatch<AppDispatch>` hook
type DispatchFunc = () => AppDispatch;
export const useDispatch: DispatchFunc = dispatch;
