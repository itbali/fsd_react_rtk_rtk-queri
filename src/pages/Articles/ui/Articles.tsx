import {Card, Empty} from 'antd';
import {Spinner} from 'src/shared/uiKit/Spiner';
import {Article} from 'src/entities/Article/ui/Article';
import {ErrorElement} from 'src/shared/uiKit/ErrorElement';
import {articlesRtk} from '../api/articlesApi';

export const Articles = () => {
	const {data, error, isError, isLoading} = articlesRtk(10)
	console.log({data, error, isError, isLoading} )
	if (isError) {
		return <ErrorElement error={error} />
	}
	return (
		<Card>
			{isLoading && <Spinner size="small" tip={"looking for articles"}/>}
			{data
				? data.map(art=><Article key={art.id} article={art}/>)
				: <Empty/>
			}
		</Card>
	)
}
