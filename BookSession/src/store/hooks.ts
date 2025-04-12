import { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store";
import { RootState } from "./store";

type DispatchFn = () => AppDispatch;
export const useCustomDispatch: DispatchFn = useDispatch;

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
