import { Navigate } from 'react-router-dom';
import {User} from '../App'

type Props = {
  user: User,
  children: JSX.Element
};

const ProtectedRoute = ({ user, children }: Props) => {
  if (!user) {
    return <Navigate to='/login' />;
  }
  return children;
};
export default ProtectedRoute;
