import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useMemo, useState } from "react";
export var ThemeContext = createContext({ isDark: false });
export var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isDark = _b[0], setIsDark = _b[1];
    var value = useMemo(function () { return ({ isDark: isDark, setIsDark: setIsDark }); }, [isDark]);
    return _jsx(ThemeContext.Provider, { value: value, children: children });
};
//# sourceMappingURL=ThemeProvider.js.map