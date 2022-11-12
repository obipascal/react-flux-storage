import React from "react";
import { FluxDispatcher, FluxState } from "types/types";
/**
 * It return the stores object which can be distruct to get the specific store
 * @returns object
 */
export declare function useFlusStores(): FluxState;
/**
 * TO dispatcher and action to the fluxlication use this react flus hook function
 */
export declare function useFlusDispatcher(): React.Dispatch<FluxDispatcher>;
