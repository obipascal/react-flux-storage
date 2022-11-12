var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var FlusMiddlewares = {
    flusapp: {
        createDynamicStore: function (state, payload) {
            if (typeof (payload === null || payload === void 0 ? void 0 : payload.store) !== "undefined") {
                state[payload === null || payload === void 0 ? void 0 : payload.store] = payload === null || payload === void 0 ? void 0 : payload.data;
            }
            /* give the user the previllage to write this data to storage  */
            if (typeof (payload === null || payload === void 0 ? void 0 : payload.writeData) !== "undefined" && typeof (payload === null || payload === void 0 ? void 0 : payload.writeData) === "function")
                typeof (payload === null || payload === void 0 ? void 0 : payload.writeData(state, payload === null || payload === void 0 ? void 0 : payload.store, payload === null || payload === void 0 ? void 0 : payload.data));
            return __assign({}, state);
        },
        emitDynamicEvent: function (state, payload) {
            if (typeof (payload === null || payload === void 0 ? void 0 : payload.event) !== "undefined") {
                state[payload === null || payload === void 0 ? void 0 : payload.event] = payload === null || payload === void 0 ? void 0 : payload.data;
            }
            /* give the user the previllage to handle the dispatched event by tapping into the app glogal store object.  */
            if (typeof (payload === null || payload === void 0 ? void 0 : payload.onDispatched) !== "undefined" &&
                typeof (payload === null || payload === void 0 ? void 0 : payload.onDispatch) === "function") {
                typeof (payload === null || payload === void 0 ? void 0 : payload.onDispatched(state, payload === null || payload === void 0 ? void 0 : payload.event, payload === null || payload === void 0 ? void 0 : payload.data));
            }
            return __assign({}, state);
        }
    }
};
