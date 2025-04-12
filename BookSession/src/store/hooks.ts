import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";

type DispatchFn = () => AppDispatch;

export const useCustomDispatch: DispatchFn = useDispatch;
