import { FluxPayload, FluxState } from "types/types";
export declare const FlusMiddlewares: {
    flusapp: {
        createDynamicStore(state: FluxState, payload: FluxPayload): {
            [x: string]: any;
        };
        emitDynamicEvent(state: FluxState, payload: FluxPayload): {
            [x: string]: any;
        };
    };
};
