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
var initialState = {
    todos: {}, addedNow: 0,
    addedTotal: 0,
    deletedTotal: 0
};
// todos: {
//     [todolistId1]: [
//         {id: v1(), title: 'Note#1', isDone: true},
//         {id: v1(), title: 'Note #2', isDone: true},
//     ],
//         [todolistId2]: [
//         {id: v1(), title: 'Note#1', isDone: true},
//         {id: v1(), title: 'Note #2', isDone: true},
//     ],
// },
// addedNow: 0,
//     addedTotal: 0,
//     deletedTotal: 0,
export var tasksReducer = function (state, action) {
    var _a, _b, _c, _d, _e;
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'REMOVE-TASK': {
            var updatedTodos = state.todos[action.todolistId].filter(function (el) { return el.id !== action.taskId; });
            return __assign(__assign({}, state), { todos: __assign(__assign({}, state.todos), (_a = {}, _a[action.todolistId] = updatedTodos, _a)), deletedTotal: state.deletedTotal ? state.deletedTotal + 1 : 1 });
        }
        case 'ADD-TASK': {
            var newTask = { id: v1(), title: action.title, isDone: false };
            // return { ...state, todos: { ...state.todos, [action.todolistId]: [...state.todos[action.todolistId], newTask] } };
            // return {...state,[action.todolistId]:[...state.todos[action.todolistId], newTask]};
            return __assign(__assign({}, state), { todos: __assign(__assign({}, state.todos), (_b = {}, _b[action.todolistId] = __spreadArray(__spreadArray([], state.todos[action.todolistId], true), [newTask], false), _b)), addedNow: state.addedNow ? state.addedNow + 1 : 1, addedTotal: state.addedTotal ? state.addedTotal + 1 : 1 });
        }
        case 'CHANGE-TASK-STATUS': {
            return __assign(__assign({}, state), { todos: __assign(__assign({}, state.todos), (_c = {}, _c[action.todolistId] = state.todos[action.todolistId].map(function (el) { return el.id === action.taskId ? __assign(__assign({}, el), { isDone: action.isDone }) : el; }), _c)) });
        }
        case 'CHANGE-TASK-TITLE': {
            return __assign(__assign({}, state), { todos: __assign(__assign({}, state.todos), (_d = {}, _d[action.todolistId] = state.todos[action.todolistId].map(function (el) { return el.id === action.taskId ? __assign(__assign({}, el), { title: action.title }) : el; }), _d)) });
        }
        case 'ADD-TODOLIST': {
            return __assign(__assign({}, state), { todos: __assign(__assign({}, state.todos), (_e = {}, _e[action.todolistId] = [], _e)) });
        }
        case 'REMOVE-TODOLIST': {
            var copyState = __assign({}, state.todos);
            delete copyState[action.id];
            return __assign(__assign({}, state), { todos: __assign({}, copyState) });
        }
        case 'DELETE-ALL-TASKS': {
            var newState_1 = __assign({}, state);
            Object.keys(newState_1.todos).forEach(function (todolistId) {
                newState_1.todos[todolistId] = [];
            });
            return __assign(__assign({}, newState_1), { addedNow: 0, addedTotal: 0, deletedTotal: state.deletedTotal ? state.deletedTotal + 1 : 1 });
        }
        default:
            return state;
    }
};
export var removeTaskAC = function (taskId, todolistId) {
    return { type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId };
};
export var addTaskAC = function (title, todolistId) {
    return { type: 'ADD-TASK', title: title, todolistId: todolistId };
};
export var changeTaskStatusAC = function (taskId, isDone, todolistId) {
    return { type: 'CHANGE-TASK-STATUS', isDone: isDone, todolistId: todolistId, taskId: taskId };
};
export var changeTaskTitleAC = function (taskId, title, todolistId) {
    return { type: 'CHANGE-TASK-TITLE', title: title, todolistId: todolistId, taskId: taskId };
};
export var deleteAllTasks = function () {
    return { type: 'DELETE-ALL-TASKS' };
};
//# sourceMappingURL=tasks-reducer.js.map