import { FlusGlobalStateStore, FlusActionDispatcher } from "../FlusAppServiceProvider";
import { useContext } from "react";
/**
 * It return the stores object which can be distruct to get the specific store
 * @returns object
 */
export function useFlusStores() {
    return useContext(FlusGlobalStateStore);
}
/**
 * TO dispatcher and action to the fluxlication use this react flus hook function
 */
export function useFlusDispatcher() {
    return useContext(FlusActionDispatcher);
}
