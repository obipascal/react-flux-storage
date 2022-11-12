import { FlusMiddlewares } from "../middlewares/flusMiddlewares"

export const FlusActions = {
	/* handle drawer addition */
	"flusapp/stores/create-dynamic-store": FlusMiddlewares.flusapp.createDynamicStore,
	"flusapp/events/emit-dynamic-event": FlusMiddlewares.flusapp.emitDynamicEvent
}
