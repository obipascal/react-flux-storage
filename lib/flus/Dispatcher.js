/** This is where all the dispatched events in the application are handled
then the stat is computed and returned*/
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
export var DispatchManager = function (state, action, userActions) {
    // State Manager event listeners
    if (typeof userActions[action === null || action === void 0 ? void 0 : action.type] !== "undefined" && userActions[action === null || action === void 0 ? void 0 : action.type]) {
        // check if the action registed a middleware for this operation
        if (typeof userActions[action === null || action === void 0 ? void 0 : action.type] === "function") {
            return userActions[action === null || action === void 0 ? void 0 : action.type](state, action === null || action === void 0 ? void 0 : action.payload);
        }
        else {
            return __assign({}, state);
        }
    }
    else {
        throw new TypeError("Action dispached is not defined.");
    }
};
