import {User} from '../App'

type Props = {
  user: User,
};

const Dashboard = ({ user }: Props) => {
  return (
    <section className='section'>
      <h4>Hello,{user?.username}</h4>
    </section>
  );
};
export default Dashboard;
