import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import PieChartIcon from "@material-ui/icons/PieChart";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import PaymentIcon from "@material-ui/icons/Payment";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import BuildIcon from "@material-ui/icons/Build";
import HelpIcon from "@material-ui/icons/Help";
import Grid from "@material-ui/core/Grid";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PrintIcon from "@material-ui/icons/Print";
import AssignmentReturnedIcon from "@material-ui/icons/AssignmentReturned";
import ShareIcon from "@material-ui/icons/Share";
import RefreshIcon from "@material-ui/icons/Refresh";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import MessageIcon from "@material-ui/icons/Message";
import DateRangeIcon from "@material-ui/icons/DateRange";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Logos from "./Logos.png";

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "white",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <img src={Logos} />
      <Divider />
      <List>
        {["", ""].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: "#172765" }}>
              {index % 2 === 0 ? <HomeIcon /> : <PieChartIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {["", ""].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: "#172765" }}>
              {index % 2 === 0 ? <TrendingUpIcon /> : <LocalAtmIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {["", ""].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: "#172765" }}>
              {index % 2 === 0 ? <PeopleOutlineIcon /> : <PhoneIphoneIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {["", ""].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: "#172765" }}>
              {index % 2 === 0 ? <PaymentIcon /> : <LibraryBooksIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["", ""].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: "#172765" }}>
              {index % 2 === 0 ? <BuildIcon /> : <HelpIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Grid container justify="space-around" alignItems="flex-start">
            <Typography noWrap style={{ color: "mediumpurple" }}>
              <h3 style={{ color: "mediumpurple" }}>
                Edmilson Suzano Coutinho Júnior
              </h3>
              Ag. 00005-1 C.C. 00000000000000000020-1
            </Typography>
            <Typography noWrap style={{ color: " #69D531" }}>
              <h4 style={{ color: "#172765" }}>Saldo</h4>
              R$100.000.000,00
            </Typography>
            <div direction="row">
              <input style={{ padding: 5 }} placeholder="pesquisar"></input>
              <button>
                <SearchIcon fontSize="small" />
              </button>
            </div>
            <div style={{ color: "#172765" }}>
              <button style={{ color: "#172765" }}>
                <MessageIcon />
              </button>
              <button style={{ color: "#172765" }}>
                <DateRangeIcon />
              </button>
              <button style={{ color: "#172765" }}>
                <NotificationsIcon />
              </button>
              <AccountCircleIcon fontSize="large" />
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="space-around" style={{ color: "#172765" }}>
          <Grid>
            <h3>
              Conta Corrente
              <VisibilityOffIcon fontSize="small" />
            </h3>
            <h4 style={{ color: " #69D531" }}> R$100.000.000,00 </h4>
          </Grid>
          <Grid>
            <h3>
              Conta Poupança <VisibilityIcon fontSize="small" />
            </h3>
          </Grid>
          <Grid>
            <h3>
              C.C. Ed. Suzano <VisibilityOffIcon fontSize="small" />
            </h3>
            <h4 style={{ color: " #69D531" }}> R$1.000,20 </h4>
          </Grid>
          <Grid>
            <h3>
              C.C. Condomínio Guillermo <VisibilityIcon fontSize="small" />
            </h3>
          </Grid>
          <Grid>
            <h3>
              C.C. Residencial Figma Ômega
              <VisibilityOffIcon fontSize="small" />
            </h3>
            <h4 style={{ color: " red" }}> -R$0,06 </h4>
          </Grid>
          <Grid>
            <h3>
              C.C. Ed. Suzano <VisibilityOffIcon fontSize="small" />
            </h3>
            <h4 style={{ color: " #69D531" }}> R$1.000,20 </h4>
          </Grid>
        </Grid>
        <Divider />
        <div style={{ padding: 30 }}>
          <Grid>
            <Grid container spacing={5} alignItems="center">
              <Grid>
                <h2>Saldo Bancário</h2>
              </Grid>
              <button>
                <PrintIcon fontSize="large" style={{ color: "#172765" }} />
              </button>
              <button>
                <AssignmentReturnedIcon
                  fontSize="large"
                  style={{ color: "#172765" }}
                />
              </button>
              <button>
                <ShareIcon fontSize="large" style={{ color: "#172765" }} />
              </button>
            </Grid>
          </Grid>
        </div>
        <Divider />
        <button style={{ width: 230 }} style={{ color: "#172765" }}>
          <h3 style={{ color: "#622EE5" }}>Data do Saldo</h3>
          <h4>
            07/12/2020 <KeyboardArrowDownIcon fontSize="large" />
          </h4>
          <Divider />
          <h4>
            Saldo atualizado às 16:48 <RefreshIcon fontSize="mediun" />
          </h4>
          <Divider />
          <h4>
            Saldo disponível <VisibilityOffIcon fontSize="small" />
          </h4>
          <h5 style={{ color: " #69D531" }}> R$100.000.000,00 </h5>
        </button>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
