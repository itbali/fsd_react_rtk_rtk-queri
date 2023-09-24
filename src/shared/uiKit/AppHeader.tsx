import {Card, Col, Row} from 'antd';
import {RoutePath} from 'src/shared/configs/routeConfig';
import {ButtonLink} from 'src/shared/uiKit/ButtonLink';

export const AppHeader = () => {

	return (
		<Card>
			<Row>
				<Col span={12} flex={'auto'} style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'start',
					gap: 10,
					marginBottom: 20,
				}}>
					<ButtonLink to={RoutePath.main} text="Home" type="dashed" danger/>
					<ButtonLink to={RoutePath.articles} text="Articles" type="default" />
					<ButtonLink to={RoutePath.about} text="About" type="default" />
				</Col>
			</Row>
		</Card>
	)
}
