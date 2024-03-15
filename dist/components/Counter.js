import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import s from "/src/styles2/Counter.module.scss";
import { useAppSelector } from "../state/store";
export var Counter = function () {
    var addedNow = useAppSelector(function (state) { return state.tasks.addedNow; });
    var addedTotal = useAppSelector(function (state) { return state.tasks.addedTotal; });
    var deletedTotal = useAppSelector(function (state) { return state.tasks.deletedTotal; });
    return (_jsx("div", { className: s.containerCounter, children: _jsxs("div", { className: s.content, children: [_jsxs("div", { children: ["\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438(\u0441\u0435\u0439\u0447\u0430\u0441):", addedNow, " "] }), _jsxs("div", { children: ["\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043C\u044F:", addedTotal] }), _jsxs("div", { children: ["\u0423\u0434\u0430\u043B\u0435\u043D\u043E \u0437\u0430\u0434\u0430\u0447 \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043C\u044F:", deletedTotal] })] }) }));
};
//# sourceMappingURL=Counter.js.map