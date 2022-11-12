import { FlusGlobalStateStore, FlusActionDispatcher } from "../FlusAppServiceProvider"
import React, { useContext } from "react"
import { FluxDispatcher, FluxState } from "types/types"

/**
 * It return the stores object which can be distruct to get the specific store
 * @returns object
 */
export function useFlusStores(): FluxState {
	return useContext(FlusGlobalStateStore)
}

/**
 * TO dispatcher and action to the fluxlication use this react flus hook function
 */
export function useFlusDispatcher(): React.Dispatch<FluxDispatcher> {
	return useContext(FlusActionDispatcher)
}
