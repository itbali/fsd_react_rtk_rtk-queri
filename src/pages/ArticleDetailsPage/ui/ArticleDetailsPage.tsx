import {Empty} from 'antd';
import {useParams} from 'react-router-dom';
import {ErrorElement} from 'src/shared/uiKit/ErrorElement';
import {Spinner} from 'src/shared/uiKit/Spiner';

import {articleDetailsPageRtk} from '../api/articleDetailsPageApi';

export const ArticleDetailsPage = () => {
	const {id} = useParams()
	if (!id) {
		return <Empty />
	}

	const {data: article, isError, isLoading, error} = articleDetailsPageRtk(id)

	if (!article) {
		return <Empty />
	}
	if (isLoading) {
		return <Spinner size="large" tip={'Loading article details'} />
	}

	if (isError) {
		return <ErrorElement error={error} />
	}
	return (
		<div>{JSON.stringify(article)}</div>
	)
}
