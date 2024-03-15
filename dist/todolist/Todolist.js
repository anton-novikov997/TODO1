import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodolistAC, changeTodolistFilterAC, changeTodolistTitleAC, removeTodolistAC } from "../state/todolists-reducer";
import { ThemeProvider } from "../contexts/ThemeProvider";
import Layout from "../components/Layout";
import { Counter } from "../components/Counter";
import { DeleteTasksTogler } from "../components/DeleteTasksTogler";
import { AddItemForm } from "../components/header/AddItemForm";
import { TodolistItems } from "../components/TodolistItems";
import style from "../styles2/todolistStyle.module.scss";
var Todolist = function () {
    var dispatch = useDispatch();
    var todolists = useSelector(function (state) { return state.todolists; });
    var _a = useState(false), isShake = _a[0], setIsShake = _a[1];
    function changeFilter(value) {
        dispatch(changeTodolistFilterAC(value));
    }
    function removeTodolist(id) {
        dispatch(removeTodolistAC(id));
    }
    function changeTodolistTitle(id, title) {
        dispatch(changeTodolistTitleAC(id, title));
    }
    function addTodolist(title) {
        dispatch(addTodolistAC(title));
    }
    return (_jsx(ThemeProvider, { children: _jsx(Layout, { children: _jsxs("div", { className: style.container, children: [_jsx(Counter, {}), _jsxs("div", { className: style.header__block, children: [_jsx("div", { className: "text", children: "TODO LIST" }), _jsxs("div", { className: style.headerContent, children: [_jsx(DeleteTasksTogler, { Toggle: setIsShake }), _jsx(AddItemForm, { addItem: addTodolist, changeFilter: changeFilter, withSelect: true, size: "large", withSwitchTheme: true, isShake: isShake, Toggle: setIsShake, className: style.smallInput, placeholder: "Search note..." })] })] }), !todolists.length && (_jsxs("div", { className: style.img1, children: [_jsx("img", { src: 'http://localhost:3000/47d66b4b46ff01766672.svg', alt: "" }), _jsx("div", { className: "textContainer", children: "Empty..." })] })), _jsx("div", { className: style.todoItem, children: todolists.map(function (tl) {
                            return (_jsx(TodolistItems, { todolistId: tl.id, title: tl.title, changeFilter: changeFilter, filter: tl.filter, removeTodolist: removeTodolist, changeTodolistTitle: changeTodolistTitle }, tl.id));
                        }) })] }) }) }));
};
export default Todolist;
//# sourceMappingURL=Todolist.js.map