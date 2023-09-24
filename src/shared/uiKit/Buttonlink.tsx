import {Button} from 'antd';
import { NavLink } from "react-router-dom";

export const Buttonlink = (props: ButtonlinkProps)=>{
	const {text,to} = props
	return (
		<Button type="link">
			<NavLink to={to}>{text}</NavLink>
		</Button>
	)
}

type ButtonlinkProps = {
	text?: string,
	to:string,
}
