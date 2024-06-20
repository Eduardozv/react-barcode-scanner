import { __awaiter, __generator, __spreadArray } from "tslib";
export var indempotent = function (action) {
    var called = false;
    var result;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (called) {
            return result;
        }
        else {
            result = action.apply(void 0, args);
            called = true;
            return result;
        }
    };
};
export var eventListener = function (target_1, event_1) {
    var args_1 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args_1[_i - 2] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([target_1, event_1], args_1, true), void 0, function (target, event, errorEvent) {
        var $resolve, $reject, promise;
        if (errorEvent === void 0) { errorEvent = 'error'; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    promise = new Promise(function (resolve, reject) {
                        $resolve = resolve;
                        $reject = reject;
                        target.addEventListener(event, $resolve);
                        target.addEventListener(errorEvent, $reject);
                    }).finally(function () {
                        target.removeEventListener(event, $resolve);
                        target.removeEventListener(errorEvent, $reject);
                    });
                    return [4, promise];
                case 1: return [2, _a.sent()];
            }
        });
    });
};
export var timeout = function (milliseconds) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, new Promise(function (resolve) { return setTimeout(resolve, milliseconds); })];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); };
