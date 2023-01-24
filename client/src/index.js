import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Components
import App from './App';
// Store
import store from './redux/store';

// Styles
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
