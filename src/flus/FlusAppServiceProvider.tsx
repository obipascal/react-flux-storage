import React, { useReducer } from "react"
import { DispatchManager } from "./Dispatcher"
import { QueryClientProvider, QueryClient } from "react-query"
import { FlusActions } from "./actions/flusActions"

// The application global store context
export const FlusGlobalStateStore = React.createContext({})
/* The app event action dispatcher for dispatching actions */
export const FlusActionDispatcher = React.createContext<any>(null)
/* React query instantiation */
const queryClient = new QueryClient()

/** Flus app service provider that bootstrap the app global state */
export const FlusAppServiceProvider = ({
	stores = {},
	actions = {},
	children
}: FlusAppServiceProviderProps) => {
	/**
	 * Global state management logic for the whole application using react reducer
	 */
	const [Storage, dispatch] = useReducer(
		(state: any, action: any) => DispatchManager(state, action, { ...actions, ...FlusActions }),
		stores
	)

	return (
		<QueryClientProvider client={queryClient}>
			<FlusGlobalStateStore.Provider value={Storage}>
				<FlusActionDispatcher.Provider value={dispatch}>{children}</FlusActionDispatcher.Provider>
			</FlusGlobalStateStore.Provider>
		</QueryClientProvider>
	)
}
