import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var FilterSelect = function (_a) {
    var onChange = _a.onChange;
    var handleChange = function (event) {
        onChange(event.currentTarget.value);
    };
    return (_jsxs("select", { onChange: handleChange, children: [_jsx("option", { value: "all", children: "All" }), _jsx("option", { value: "active", children: "Active" }), _jsx("option", { value: "completed", children: "Completed" })] }));
};
export default FilterSelect;
//# sourceMappingURL=FilterSelect.js.map