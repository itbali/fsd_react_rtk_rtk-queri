import {ArticleSchema} from 'src/entities/Article/model/ArticleSchema';
import {rtkApi} from 'src/shared/api/rtkApi';

const articleDetailsPagesRtkApi = rtkApi.injectEndpoints({
	endpoints: (build) => {
		return ({
			article: build.query<ArticleSchema, string>({
				query: (id) => ({
					url: '/posts/'+id,
				}),
			})
		});
	}
})
export const articleDetailsPageRtk = articleDetailsPagesRtkApi.useArticleQuery;
