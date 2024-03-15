import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./state/store";
import { ThemeProvider } from '../src/contexts/ThemeProvider';
import App from "./App";
import Layout from './components/Layout';
ReactDOM.render(_jsx(Provider, { store: store, children: _jsx(ThemeProvider, { children: _jsx(Layout, { children: _jsx(App, {}) }) }) }), document.getElementById('root'));
//# sourceMappingURL=index.js.map