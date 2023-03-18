import { useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector';

type Props = {}

const UserList: React.FC = (props: Props) => {
	const { error, loading, users } = useTypedSelector(state => state.user)


	return (
		<div></div>
	)
}

export default UserList