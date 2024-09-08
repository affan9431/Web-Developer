import {Outlet} from 'react-router-dom'
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import Footer from "./Footer";
import AppNav from './AppNav'
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav/>
      <Outlet/>
      <Footer />
    </div>
  );
}

export default Sidebar;
