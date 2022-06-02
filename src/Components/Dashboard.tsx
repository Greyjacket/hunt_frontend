import {User} from '../App'

const Dashboard = ( user: User ) => {
  return (
    <section className='section'>
      <h4>Hello,  {user?.user}</h4>
    </section>
  );
};
export default Dashboard;
