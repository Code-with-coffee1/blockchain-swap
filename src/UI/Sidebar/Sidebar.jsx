import classes from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import HomeIcon from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import SidebarFooter from "./SidebarFooter";

const Sidebar = (props) => {
  return (
    <div>
      <div className={props.isOpen && classes.backdrop} />
      <nav className={classes["sidebar-container"] + " " + (props.isOpen && classes["sidebar-open"])}>
        <SidebarItem icon={HomeIcon} exact={true} to="/">
          <span>
            <HomeIcon />
          </span>

          <h3>Home</h3>
        </SidebarItem>
        <SidebarItem to="/trade">
          <span>
            <MonetizationOnIcon />
          </span>

          <h3>Trade</h3>
        </SidebarItem>

        <SidebarItem to="/farm">
          <span>
            <LocalShippingIcon />
          </span>
          <h3>Farm</h3>
        </SidebarItem>

        <SidebarFooter />
      </nav>
    </div>
  );
};

export default Sidebar;
