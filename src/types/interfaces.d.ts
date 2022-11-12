interface FluxUserState {
	/**
	 * The active user object
	 */
	user?: {
		[key: string]: any
	}

	isActive?: boolean
}

interface FluxState {
	[key: string]: object | string | null | number | any | FluxUserState
}

interface FluxPayload {
	[key: string]: string | object | number | null
	store?: string
	data?: string | number | null | FluxState
	token?: string
	event?: string
	/**
	 * give the user the previllage to handle the dispatched event by tapping into the app glogal store object.
	 */
	onDispatched: (state?: FluxState, event?: string, data?: FluxState | any) => any
}

interface FluxActions {
	[key: string]: (state: FluxState, payload: FluxPayload) => FluxState | object
}

interface FlusAppServiceProviderProps {
	stores: object | FluxState
	actions: object | FluxActions
	children: React.ReactNode
}

interface FluxDispatcher {
	type?: string
	payload: FluxPayload | any
}
