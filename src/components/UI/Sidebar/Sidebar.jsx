import classes from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";
import MultilevelItem from "./MultilevelItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FontIcons from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  return (
    <div>
      <div className={props.isOpen && classes.backdrop} />
      <nav className={classes["sidebar-container"] + " " + (props.isOpen && classes["sidebar-open"])}>
        <div className={classes["menu-items"]}>
          <SidebarItem exact={true} to="/">
            <span>
              <FontAwesomeIcon icon={FontIcons.faHome} />
            </span>

            <h3>Home</h3>
          </SidebarItem>
          <MultilevelItem icon={FontIcons.faExchangeAlt} title="Trade">
            <SidebarItem exact={true} to="/exchange">
              <h3>Exchange</h3>
            </SidebarItem>
            <SidebarItem exact={true} to="/liquidity">
              <h3>Liquidity</h3>
            </SidebarItem>
            <SidebarItem exact={true} to="/lp_migration">
              <h3>LP Migration</h3>
            </SidebarItem>
          </MultilevelItem>
          <SidebarItem exact={true} to="/farms">
            <span>
              <FontAwesomeIcon icon={FontIcons.faTruck} />
            </span>

            <h3>Farms</h3>
          </SidebarItem>
          <SidebarItem exact={true} to="/pools">
            <span>
              <FontAwesomeIcon icon={FontIcons.faGlassWhiskey} />
            </span>

            <h3>Pools</h3>
          </SidebarItem>
          <SidebarItem exact={true} to="/prediction">
            <span>
              <FontAwesomeIcon icon={FontIcons.faMagic} />
            </span>

            <h3>Prediction</h3>
          </SidebarItem>
          <SidebarItem exact={true} to="/lottery">
            <span>
              <FontAwesomeIcon icon={FontIcons.faTicketAlt} />
            </span>

            <h3>Lottery</h3>
          </SidebarItem>
          <SidebarItem exact={true} to="/collectibles">
            <span>
              <FontAwesomeIcon icon={FontIcons.faShapes} />
            </span>

            <h3>Collectibles</h3>
          </SidebarItem>
          <SidebarItem exact={true} to="/team_battle">
            <span>
              <FontAwesomeIcon icon={FontIcons.faTrophy} />
            </span>

            <h3>Team Battle</h3>
          </SidebarItem>
          <MultilevelItem icon={FontIcons.faUsers} title="Teams & Profile">
            <SidebarItem exact={true} to="/leaderboard">
              <h3>Leaderboard</h3>
            </SidebarItem>
            <SidebarItem exact={true} to="/task_center">
              <h3>Task Center</h3>
            </SidebarItem>
            <SidebarItem exact={true} to="/your_profile">
              <h3>Your Profile</h3>
            </SidebarItem>
          </MultilevelItem>

          <SidebarItem exact={true} to="/info">
            <span>
              <FontAwesomeIcon icon={FontIcons.faInfo} />
            </span>

            <h3>Info</h3>
          </SidebarItem>
          <SidebarItem exact={true} to="/ifo">
            <span>
              <FontAwesomeIcon icon={FontIcons.faShoppingBag} />
            </span>

            <h3>IFO</h3>
          </SidebarItem>
          <MultilevelItem icon={FontIcons.faEllipsisH} title="More">
            <SidebarItem exact={true} to="/contact">
              <h3>Contact</h3>
            </SidebarItem>
            <SidebarItem exact={true} to="/voting">
              <h3>Voting</h3>
            </SidebarItem>
            <SidebarItem exact={true} to="/github">
              <h3>Github</h3>
            </SidebarItem>
            <SidebarItem exact={true} to="/docs">
              <h3>Docs</h3>
            </SidebarItem>
            <SidebarItem exact={true} to="/blog">
              <h3>Blog</h3>
            </SidebarItem>
            <SidebarItem exact={true} to="/merch">
              <h3>Merch</h3>
            </SidebarItem>
          </MultilevelItem>
        </div>

        <SidebarFooter />
      </nav>
    </div>
  );
};

export default Sidebar;
