import {Suspense} from 'react';
import {Route, RouteProps, Routes} from 'react-router-dom';
import {routeConfig} from 'src/shared/configs/routeConfig';
import {Spinner} from 'src/shared/uiKit/Spiner';

export const AppRouter = () => {
	const renderWithWrapper = (route: RouteProps) => {
		const element = (
			<Suspense key={route.path} fallback={<Spinner/>}>
				{route.element}
			</Suspense>
		);
		return (
			<Route
				key={route.path}
				path={route.path}
				element={element}
			/>
		);
	};

	const routes=Object.values(routeConfig).map(renderWithWrapper);

	return (
			<Routes>
				{routes}
			</Routes>
	);
}
