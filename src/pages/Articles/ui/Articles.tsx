import {Card, Empty} from 'antd';
import React from 'react';
import {Spinner} from 'src/shared/uiKit/Spiner';
import {Article} from '../../../entities/Article/ui/Article';
import {articlesRtk} from '../api/articlesApi';

export const Articles = () => {
	const {data, error, isError, isLoading} = articlesRtk(10)
	console.log({data, error, isError, isLoading} )
	if (isError) {
		return <div>{JSON.stringify(error)}</div>
	}
	return (
		<Card>
			<div>Articles Go To each Article Engine</div>
			<div>Articles Infinitive Scroll List</div>
			{isLoading && <Spinner size="small" tip={"looking for articles"}/>}
			{data
				? data.map(art=><Article key={art.id} article={art}/>)
				: <Empty/>
			}
		</Card>
	)
}
