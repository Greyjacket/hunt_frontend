import {User} from '../App'

const Dashboard = (user: User) => {
  return (
    <section className='section'>
      <h4>Hello,{user?.username}</h4>
    </section>
  );
};
export default Dashboard;
