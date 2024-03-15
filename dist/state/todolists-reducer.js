var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { v1 } from 'uuid';
export var todolistId1 = v1();
export var todolistId2 = v1();
var initialState = [];
// {id: todolistId1, title: "Some title", filter: "all"},
// {id: todolistId2, title: "Some title 1 ", filter: "all"}
export var todolistsReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(function (tl) { return tl.id != action.id; });
        }
        case 'ADD-TODOLIST': {
            return __spreadArray([{
                    id: action.todolistId,
                    title: action.title,
                    filter: 'all'
                }], state, true);
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(function (el) { return el.id === action.id ? __assign(__assign({}, el), { title: action.title }) : el; });
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(function (el) { return (__assign(__assign({}, el), { filter: action.filter })); });
        }
        default:
            return state;
    }
};
export var removeTodolistAC = function (todolistId) {
    return { type: 'REMOVE-TODOLIST', id: todolistId };
};
export var addTodolistAC = function (title) {
    return { type: 'ADD-TODOLIST', title: title, todolistId: v1() };
};
export var changeTodolistTitleAC = function (id, title) {
    return { type: 'CHANGE-TODOLIST-TITLE', id: id, title: title };
};
export var changeTodolistFilterAC = function (filter) {
    return { type: 'CHANGE-TODOLIST-FILTER', filter: filter };
};
//# sourceMappingURL=todolists-reducer.js.map