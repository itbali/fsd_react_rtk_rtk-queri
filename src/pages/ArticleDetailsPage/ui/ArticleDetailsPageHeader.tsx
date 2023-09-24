import {Col, Row} from 'antd';
import {ButtonLink} from 'src/shared/uiKit/ButtonLink';

export const ArticleDetailsPageHeader = ()=>{

	return(
		<Row>
			<Col span={12} flex={"auto"}>
				<ButtonLink to={-1} text="Back" type="default"/>
			</Col>
		</Row>
	)
}
