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
            <span className={classes.icon}>
              <FontAwesomeIcon icon={FontIcons.faHome} />
            </span>

            <h3>Home</h3>
          </SidebarItem>
          <MultilevelItem icon={FontIcons.faExchangeAlt} title="Trade">
            <SidebarItem exact={true} to="/exchange">
            <span className={classes.text}>
              <h3>Simple Mode</h3>
              <h6>User friendly way</h6>
              </span>
            </SidebarItem>
            <SidebarItem exact={true} to="/liquidity">
            <span className={classes.text}>
              <h3>Classic Mode</h3>
              <h6>Familiar tools</h6>
              </span>
            </SidebarItem>
          </MultilevelItem>
          <SidebarItem exact={true} to="/farms">
            <span className={classes.icon}>
              <FontAwesomeIcon icon={FontIcons.faTruck} />
            </span>
            <span className={classes.text}>

            <h3>Farms</h3>
            </span>
          </SidebarItem>
          <SidebarItem exact={true} to="/pools">
            <span className={classes.icon}>
              <FontAwesomeIcon icon={FontIcons.faGlassWhiskey} />
            </span>

            <h3>Pools</h3>
          </SidebarItem>

          <SidebarItem exact={true} to="/lottery">
            <span className={classes.icon}>
              <FontAwesomeIcon icon={FontIcons.faTicketAlt} />
            </span>

            <h3>Lottery</h3>
          </SidebarItem>
          <SidebarItem exact={true} to="/nft_market">
            <span className={classes.icon}>
              <FontAwesomeIcon icon={FontIcons.faStore} />
            </span>

            <h3>NFT Marketplace</h3>
          </SidebarItem>
          <SidebarItem exact={true} to="/multichain_swap">
            <span className={classes.icon}>
              <FontAwesomeIcon icon={FontIcons.faCoins} />
            </span>

            <h3>Multichain SWAP</h3>
          </SidebarItem>
          <SidebarItem exact={true} to="/gamification">
            <span className={classes.icon}>
              <FontAwesomeIcon icon={FontIcons.faGamepad} />
            </span>

            <h3>Gamification</h3>
          </SidebarItem>
          <SidebarItem exact={true} to="/launchpad">
            <span className={classes.icon}>
              <FontAwesomeIcon icon={FontIcons.faFlag} />
            </span>

            <h3>Launchpad</h3>
          </SidebarItem>
          <SidebarItem exact={true} to="/vaults">
          <span className={classes.icon}>
              <FontAwesomeIcon icon={FontIcons.faBriefcase} />
            </span>

            <h3>Vaults</h3>
          </SidebarItem>

          <SidebarItem exact={true} to="/info">
            <span className={classes.icon}>
              <FontAwesomeIcon icon={FontIcons.faInfo} />
            </span>

            <h3>Info</h3>
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
