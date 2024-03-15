import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import useTheme from "../hooks/useTheme";
var Layout = function (_a) {
    var children = _a.children;
    var isDark = useTheme().isDark;
    return (_jsx("div", { className: classNames('layout', {
            dark: isDark
        }), children: children }));
};
export default Layout;
//# sourceMappingURL=Layout.js.map