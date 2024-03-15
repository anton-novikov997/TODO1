import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditableSpan } from './EditableSpan';
import s from "/src/styles2/todolistItem.module.scss";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../state/store";
import { AddItemForm } from "./header/AddItemForm";
import { UniversalButton } from "./button/UniversalButton";
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from "../state/tasks-reducer";
export function TodolistItems(props) {
    var dispatch = useDispatch();
    var task = useAppSelector(function (state) { return state.tasks.todos[props.todolistId]; });
    function addTask(title) {
        dispatch(addTaskAC(title, props.todolistId));
    }
    var removeTodolist = function () {
        props.removeTodolist(props.todolistId);
    };
    var changeTodolistTitle = function (title) {
        props.changeTodolistTitle(props.todolistId, title);
    };
    var removeTaskACHandler = function (taskId) {
        dispatch(removeTaskAC(taskId, props.todolistId));
    };
    var allTodolistTasks = task;
    var tasksForTodolist = allTodolistTasks;
    if (props.filter === "active") {
        tasksForTodolist = allTodolistTasks.filter(function (t) { return !t.isDone; });
    }
    if (props.filter === "completed") {
        tasksForTodolist = allTodolistTasks.filter(function (t) { return t.isDone; });
    }
    return _jsxs("div", { children: [_jsxs("div", { className: s.todoContainer, children: [_jsx(EditableSpan, { value: props.title, onChange: changeTodolistTitle }), _jsx(UniversalButton, { className: s.deleteButton, callBack: removeTodolist })] }), _jsx(AddItemForm, { addItem: addTask, size: "small", placeholder: "Write your task" }), _jsx("div", { children: _jsx("div", { className: s.todolistsItems, children: tasksForTodolist.map(function (t) {
                        var onClickHandler = function () {
                            removeTaskACHandler(t.id);
                        };
                        var onChangeHandler = function (e) {
                            var newIsDoneValue = e.currentTarget.checked;
                            dispatch(changeTaskStatusAC(t.id, newIsDoneValue, props.todolistId));
                        };
                        var onTitleChangeHandler = function (newValue) {
                            dispatch(changeTaskTitleAC(t.id, newValue, props.todolistId));
                        };
                        return (_jsxs("div", { style: { textDecoration: t.isDone ? 'line-through' : 'none' }, children: [_jsxs("label", { className: s.checkboxContainer, children: [_jsx("input", { type: "checkbox", className: s.checkInput, checked: t.isDone, onChange: onChangeHandler }), _jsx("span", { className: s.checkBox })] }), _jsx(EditableSpan, { value: t.title, onChange: onTitleChangeHandler }), _jsx(UniversalButton, { className: s.deleteButton, callBack: onClickHandler })] }, t.id));
                    }) }) })] });
}
//# sourceMappingURL=TodolistItems.js.map