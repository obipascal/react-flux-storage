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
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useReducer } from "react";
import { DispatchManager } from "./Dispatcher";
import { QueryClientProvider, QueryClient } from "react-query";
import { FlusActions } from "./actions/flusActions";
// The application global store context
export var FlusGlobalStateStore = React.createContext({});
/* The app event action dispatcher for dispatching actions */
export var FlusActionDispatcher = React.createContext(null);
/* React query instantiation */
var queryClient = new QueryClient();
/** Flus app service provider that bootstrap the app global state */
export var FlusAppServiceProvider = function (_a) {
    var _b = _a.stores, stores = _b === void 0 ? {} : _b, _c = _a.actions, actions = _c === void 0 ? {} : _c, children = _a.children;
    /**
     * Global state management logic for the whole application using react reducer
     */
    var _d = useReducer(function (state, action) { return DispatchManager(state, action, __assign(__assign({}, actions), FlusActions)); }, stores), Storage = _d[0], dispatch = _d[1];
    return (_jsx(QueryClientProvider, __assign({ client: queryClient }, { children: _jsx(FlusGlobalStateStore.Provider, __assign({ value: Storage }, { children: _jsx(FlusActionDispatcher.Provider, __assign({ value: dispatch }, { children: children })) })) })));
};
