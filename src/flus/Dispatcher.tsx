/** This is where all the dispatched events in the application are handled 
then the stat is computed and returned*/

export const DispatchManager = (state: FluxState, action: any, userActions: FluxActions) => {
	// State Manager event listeners
	if (typeof userActions[action?.type] !== "undefined" && userActions[action?.type]) {
		// check if the action registed a middleware for this operation
		if (typeof userActions[action?.type] === "function") {
			return userActions[action?.type](state, action?.payload)
		} else {
			return { ...state }
		}
	} else {
		throw new TypeError("Action dispached is not defined.")
	}
}
