import { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeProvider";
var UseTheme = function () {
    var value = useContext(ThemeContext);
    return value;
};
export default UseTheme;
//# sourceMappingURL=useTheme.js.map