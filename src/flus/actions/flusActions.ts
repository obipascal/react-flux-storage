import { FlusMiddlewares } from "../middlewares/flusMiddlewares"

export const FlusActions = {
	/* handle drawer addition */
	"flux_app/stores/create-dynamic-store": FlusMiddlewares.flusapp.createDynamicStore,
	"flux_app/events/emit-dynamic-event": FlusMiddlewares.flusapp.emitDynamicEvent
}
