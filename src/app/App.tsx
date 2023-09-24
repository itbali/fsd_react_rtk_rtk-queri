
import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './styles/index.scss';
import {Spinner} from 'src/shared/uiKit/Spiner';
import {AppHeader} from '../shared/uiKit/AppHeader';
import {AppRouter} from './providers/router';
import {store} from './providers/store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Suspense fallback={<Spinner />}>
					<AppHeader />
					<AppRouter />
				</Suspense>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
