import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

type DispatchFn = () => AppDispatch;

export const useCartDispatch: DispatchFn = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;

/* 
To be clear : You don't need to re-create these hooks for each of your store slices. You only create them once- hence you might also want to call them useAppDispatch and useAppSelector
*/
