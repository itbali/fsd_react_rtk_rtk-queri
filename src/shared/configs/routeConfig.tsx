import {RouteProps} from 'react-router-dom';
import {ArticleDetailsPage, Articles} from 'src/pages/';

export enum RouteNames {
	MAIN = 'main',
	ABOUT = 'about',
	ARTICLES = 'articles',
	ARTICLE_DETAIL = 'article_detail',
	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<RouteNames, string> = {
	[RouteNames.MAIN]: '/',
	[RouteNames.ABOUT]: '/about',
	[RouteNames.ARTICLES]: '/articles',
	[RouteNames.ARTICLE_DETAIL]: '/article-detail/', // + :id
	// last route
	[RouteNames.NOT_FOUND]: '*',
}

export const routeConfig: Record<RouteNames, RouteProps> = {
	[RouteNames.MAIN]: {
		path: RoutePath.main,
		element: <div>MAIN</div>
	},
	[RouteNames.ABOUT]: {
		path: RoutePath.about,
		element: <div>about</div>
	},
	[RouteNames.ARTICLES]: {
		path: RouteNames.ARTICLES,
		element: <Articles />
	},
	[RouteNames.ARTICLE_DETAIL]: {
		path: `${RoutePath.article_detail}:id`,
		element: <ArticleDetailsPage />
	},
	[RouteNames.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <div>404</div>
	}
}
