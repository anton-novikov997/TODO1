import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import s from "../styles2/modal.module.scss";
import Input from "./Input/Input";
import { UniversalButton } from "./button/UniversalButton";
import useTheme from "../hooks/useTheme";
export var ModalTasks = function (props) {
    var _a = useState(""), title = _a[0], setTitle = _a[1];
    var _b = useState(false), error = _b[0], setError = _b[1];
    var _c = useTheme(), isDark = _c.isDark, setIsDark = _c.setIsDark;
    var handleInputChange = function (e) {
        console.log(e.target);
        setTitle(e.target.value);
    };
    var addItemCallBack = function () {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        }
        else {
            setError(true);
            startShake();
        }
        props.setActive(false);
    };
    var startShake = function () {
        var _a;
        (_a = props.Toggle) === null || _a === void 0 ? void 0 : _a.call(props, true);
        setTimeout(function () {
            var _a;
            (_a = props.Toggle) === null || _a === void 0 ? void 0 : _a.call(props, false);
        }, 500);
    };
    if (!props.active)
        return null;
    return (_jsx("div", { className: "".concat(s.modal, " ").concat(props.active ? s.active : ""), onClick: function () { return props.setActive(false); }, children: _jsxs("div", { className: s.modal__content, onClick: function (e) { return e.stopPropagation(); }, children: [_jsx("div", { className: s.contantInner, children: _jsx(Input, { onChange: handleInputChange, value: title, placeholder: "Input your note..." }) }), _jsxs("div", { className: s.buttons, children: [_jsx(UniversalButton, { className: s.buttonStyleRight, callBack: function () { props.setActive(false); }, name: "Cancel" }), _jsx(UniversalButton, { className: s.buttonStyleLeft, callBack: addItemCallBack, name: "Apply" })] })] }) }));
};
//# sourceMappingURL=ModalTasks.js.map