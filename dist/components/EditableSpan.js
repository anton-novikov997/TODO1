import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import s from "/src/styles2/EditableSpan.module.scss";
export function EditableSpan(props) {
    var _a = useState(false), editMode = _a[0], setEditMode = _a[1];
    var _b = useState(props.value), title = _b[0], setTitle = _b[1];
    var activateEditMode = function () {
        setEditMode(true);
        setTitle(props.value);
    };
    var activateViewMode = function () {
        setEditMode(false);
        props.onChange(title);
    };
    var changeTitle = function (e) {
        setTitle(e.currentTarget.value);
    };
    return (_jsxs(_Fragment, { children: [editMode
                ? _jsx("input", { value: title, onChange: changeTitle, autoFocus: true, onBlur: activateViewMode })
                : _jsx("span", { onDoubleClick: activateEditMode, className: s.tasksTitle, children: props.value }), _jsx("button", { onClick: function () { return setEditMode(true); }, className: s.editable })] }));
}
//# sourceMappingURL=EditableSpan.js.map