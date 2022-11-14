import { FlusMiddlewares } from "../middlewares/flusMiddlewares";
export var FlusActions = {
    /* handle drawer addition */
    "flux_app/stores/create-dynamic-store": FlusMiddlewares.flusapp.createDynamicStore,
    "flux_app/events/emit-dynamic-event": FlusMiddlewares.flusapp.emitDynamicEvent
};
