import {Card, Typography} from 'antd';
import {ButtonLink} from 'src/shared/uiKit/ButtonLink';
import {RoutePath} from 'src/shared/configs/routeConfig';

export const Home = ()=>{
	const {Paragraph} = Typography;

	return (
	<Card>
		<Paragraph>Look at last articles</Paragraph>
		<ButtonLink to={RoutePath.articles} text="Go Inside" type="primary" size="large"/>
		</Card>
	)
}
