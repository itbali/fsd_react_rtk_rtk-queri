import {Card, Typography} from 'antd';
import { RoutePath} from 'src/shared/configs/routeConfig';
import {ButtonLink} from 'src/shared/uiKit/ButtonLink';
import {ArticleSchema} from '../model/ArticleSchema';
import style from "./Article.module.scss"

const {Title, Text} = Typography;

export const Article = (props: ArticleProps) => {
	const {article} = props
	const truncatedText = article.body.length > 100 ? article.body : `${article.body.slice(0, 100)}...`;
	return (
		<Card>
			<Title level={4}>{article.title}</Title>
			<Text>
				{truncatedText}
				<ButtonLink className={style.readMoreButton} to={`${RoutePath.article_detail+article.id}`} text="Read more" type="primary"/>
			</Text>
		</Card>
	)
}

type ArticleProps = {
	article: ArticleSchema
}
