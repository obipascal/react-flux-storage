import React from "react";
import { FlusAppServiceProviderProps } from "types/types";
export declare const FlusGlobalStateStore: React.Context<{}>;
export declare const FlusActionDispatcher: React.Context<any>;
/** Flus app service provider that bootstrap the app global state */
export declare const FlusAppServiceProvider: ({ stores, actions, children }: FlusAppServiceProviderProps) => JSX.Element;
