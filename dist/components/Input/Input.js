import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import s from "/src/styles2/inputStyle.module.scss";
var InputComponent = function (props) {
    // добавить флаг isShaking.
    return (_jsxs("div", { children: [" ", _jsx("input", { type: "text", value: props.value, onChange: props.onChange, onKeyDown: props.onKeyDown, placeholder: props.placeholder, className: "".concat(s.input, " ").concat(props.size === "small" ? s.small : s.large) }), props.isError && _jsx("div", { className: s.errorMessage, children: props.errorText || "ERROR" })] }));
};
export default InputComponent;
//# sourceMappingURL=Input.js.map