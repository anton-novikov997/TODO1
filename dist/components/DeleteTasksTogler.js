import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import s from "/src/styles2/toglerStyle.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllTasks } from "../state/tasks-reducer";
export var DeleteTasksTogler = function (props) {
    var dispatch = useDispatch();
    var tasks = useSelector(function (state) { return state.tasks; });
    var isEmptyTasks = Object.values(tasks.todos).every(function (taskList) { return taskList.length === 0; });
    var isToggleDelete = useRef(false);
    if (isEmptyTasks && isToggleDelete.current) {
        props.Toggle(true);
        setTimeout(function () {
            props.Toggle(false);
        }, 500);
    }
    var deleteHandler = function () {
        dispatch(deleteAllTasks());
        // Устанавливаем флаг, что удаление произошло тоглом
        isToggleDelete.current = true;
    };
    return (_jsx("div", { className: s.container, children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", className: "".concat(s.checkedToggle, " ").concat(s.inputToggle) }), _jsx("span", { className: s.button, onClick: deleteHandler })] }) }));
};
//# sourceMappingURL=DeleteTasksTogler.js.map