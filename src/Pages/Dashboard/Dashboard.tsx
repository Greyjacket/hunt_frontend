import {User} from '../../App'
import { Outlet } from 'react-router-dom';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import "./Dashboard.css";

type Props = {
  user: User,
};

const Dashboard = ({ user }: Props) => {
  return (
    <section className='section'>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Outlet/>
      </div>
    </section>
  );
};
export default Dashboard;

//      <h4>Hello,{user?.username}</h4>
