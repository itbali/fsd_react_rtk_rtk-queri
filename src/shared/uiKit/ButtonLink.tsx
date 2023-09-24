import {Button, Typography} from 'antd';
import {ButtonProps} from 'antd/es/button/button';
import {useCallback} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';

export const ButtonLink = (props: ButtonLinkProps) => {
	const {text, to, type = 'link', className, size="middle", danger} = props
	const {Text} = Typography;
	const navigate = useNavigate()

	const goTo = useCallback((pageNumber: number) => navigate(pageNumber), [navigate]);

	return typeof to === 'string'
		? <NavLink className={className} to={to}>
			<Button danger={danger} size={size} type={type}>{text}</Button>
		</NavLink>
		: <Text className={className} onClick={() => goTo(to)}>
			<Button danger={danger} type={type}>{text}</Button>
		</Text>

}

type ButtonLinkProps = Pick<ButtonProps, "size" | "type" | "danger"> & {
	text?: string,
	to: string | number,
	className?: string,
}
