import { Navigate } from 'react-router-dom';
import {User} from '../App'

const ProtectedRoute = ({children}, user: User ) => {
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};
export default ProtectedRoute;
