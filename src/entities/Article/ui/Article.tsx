import {Button, Card, Typography} from 'antd';
import {ArticleSchema} from '../model/ArticleSchema';

const {Title, Text} = Typography;

export const Article = (props: ArticleProps) => {
	const {article} = props
	const truncatedText = article.body.length>100 ? article.body : `${article.body.slice(0, 100)}...`;

	return (
		<Card>
			<Title level={4}>{article.title}</Title>
			<Text>
				{truncatedText}
				<Button type="link">
				</Button>
			</Text>
		</Card>
	)
}

type ArticleProps = {
	article: ArticleSchema
}
