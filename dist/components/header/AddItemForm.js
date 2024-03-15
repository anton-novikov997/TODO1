import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import s from "../../styles2/AddItemFormStyle.module.scss";
import useTheme from "../../hooks/useTheme";
import { ModalTasks } from "../ModalTasks";
import Input from "../Input/Input";
import FilterSelect from "../select/FilterSelect";
import { UniversalButton } from "../button/UniversalButton";
//оставляю input(отдельна компонента) и addItem,select отдельная компонента,будет использоваться в header...новый компонент newNodeModel
export function AddItemForm(props) {
    var _a = useState(""), title = _a[0], setTitle = _a[1];
    var _b = useState(false), error = _b[0], setError = _b[1];
    var _c = useTheme(), isDark = _c.isDark, setIsDark = _c.setIsDark;
    var _d = useState(false), modalActive = _d[0], setModalActive = _d[1];
    //ошибку нужно заносить в input,передаю
    //addItem отсается,
    var addItem = function () {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        }
        else {
            setError(true);
            startShake();
            setModalActive(true);
        }
    };
    var updateTitle = function (newTitle) {
        setTitle(newTitle);
    };
    var startShake = function () {
        var _a;
        (_a = props.Toggle) === null || _a === void 0 ? void 0 : _a.call(props, true);
        setTimeout(function () {
            var _a;
            (_a = props.Toggle) === null || _a === void 0 ? void 0 : _a.call(props, false);
        }, 500);
    };
    var onChangeHandler = function (e) {
        setTitle(e.currentTarget.value);
    };
    var onKeyPressHandler = function (e) {
        setError(false);
        if (e.key === "Enter") {
            addItem();
        }
    };
    return (_jsxs("div", { className: "".concat(s.header, " ").concat(props.isShake ? s.shake : "", " "), children: [_jsx(Input, { value: title, onChange: onChangeHandler, onKeyDown: onKeyPressHandler, placeholder: props.placeholder, errorText: "Input have little symbol", isError: error, isShaking: true, size: props.size }), props.withSelect ? _jsx(FilterSelect, { onChange: props.changeFilter || (function () {
                }) }) : null, _jsx(ModalTasks, { active: modalActive, setActive: setModalActive, cancelText: "Apply", OkText: "Cancel", setTitle: updateTitle, addItem: props.addItem }), _jsx(UniversalButton, { callBack: addItem, className: "".concat(s.buttonStyle, " ").concat(props.size === 'small' ? s.smallButton : s.largeButton) }), props.withSwitchTheme ? _jsx(UniversalButton, { className: "".concat(isDark ? s.switchThemeDark : s.switchThemeLight, " "), callBack: function () { return setIsDark ? setIsDark(!isDark) : null; } }) : null] }));
}
//# sourceMappingURL=AddItemForm.js.map