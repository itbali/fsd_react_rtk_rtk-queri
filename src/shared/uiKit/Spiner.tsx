import {Space, Spin} from 'antd';
import {SpaceSize} from 'antd/es/space';
import {SpinSize} from 'antd/es/spin';

export const Spinner = (props: SpinnerProps) => {
	const {tip, size="default"} = props

	const spinToSpaceSizeMapper:Record<SpinSize, SpaceSize> = {
		default:"middle",
		large:"large",
		small:"small",
	}

	return (
		<Space size={spinToSpaceSizeMapper[size]}>
			<Spin size={size} >{tip}</Spin>
		</Space>
	)
}

type SpinnerProps = {
	tip?: React.ReactNode,
	size?: SpinSize,
}
