import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export var UniversalButton = function (props) {
    var onClickHandler = function () {
        console.log("onClickHandlerUniversalButton");
        props.callBack();
    };
    return (_jsx(_Fragment, { children: _jsx("button", { onClick: onClickHandler, className: props.className, children: props.name }) }));
};
//# sourceMappingURL=UniversalButton.js.map