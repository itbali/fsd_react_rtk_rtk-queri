import {ArticleSchema} from 'src/entities/Article/model/ArticleSchema';
import {rtkApi} from 'src/shared/api/rtkApi';

const articlesRtkApi = rtkApi.injectEndpoints({
	endpoints: (build) => {

		return ({
			articles: build.query<ArticleSchema[], number>({
				query: (limit) => ({
					url: '/posts',
					params: {
						_limit: limit,
					},
				}),

			})
		});
	}
})
export const articlesRtk = articlesRtkApi.useArticlesQuery;
