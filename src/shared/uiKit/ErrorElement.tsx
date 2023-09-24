import {Button, Typography} from 'antd';
import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {RoutePath} from '../configs/routeConfig';

export const ErrorElement = (props:ErrorElementProps)=>{
	const navigate = useNavigate()

	const reloadPage = useCallback(() => navigate(0), [navigate]);
	const goHome = useCallback(() => navigate(RoutePath.main), [navigate]);

	const {error} = props
	const {Title, Text} = Typography
	console.error(error);

	return (
		<>
			<Title>Oops</Title>
			<Text>Some error happened. Try to</Text>
			<Button onClick={reloadPage}>Reload</Button>
			<Button onClick={goHome}>Go Home</Button>
		</>
	)
}

type ErrorElementProps = {
	error: any
}
