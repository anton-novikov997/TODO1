import { combineReducers, createStore } from "redux";
import { tasksReducer } from "./tasks-reducer";
import { todolistsReducer } from "./todolists-reducer";
import { useSelector } from "react-redux";
export var useAppSelector = useSelector;
var rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
});
export var store = createStore(rootReducer);
//# sourceMappingURL=store.js.map