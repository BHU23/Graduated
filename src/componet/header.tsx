import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, matchPath, useLocation } from "react-router-dom";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Grade-Point", "GPA", "GPAX"];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Graduated Go
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              key={item}
              to={`/${item}` == "/Grade-Point" ? "" : `/${item}`}
              component={Link}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  function useRouteMatch(patterns: readonly string[]) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }

    return { pattern: { path: "/Grade-Point" }, params: {} };
  }

  function MyTabs() {
    const routeMatch = useRouteMatch(["/Grade-Point", "/GPA", "/GPAX"]);
    const currentTab = routeMatch?.pattern?.path;

    return (
      <Tabs
        value={currentTab}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        textColor="inherit"
        sx={{
          color: "#fff",
          ":hover": { color: "var(--dark-color)" },
          display: "flex",
          justifyContent: "flex-end",
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--dark-color)",
            height: "4px",
            borderRadius: "5px",
          },
        }}
        ScrollButtonComponent={() => {
          return (
            <a style={
              { height: "0", width:0 }}>
            </a>
          );
        }}
      >
        {navItems.map((item) => (
          <Tab
            label={item}
            value={`/${item}`}
            to={`/${item}` == "/Grade-Point" ? "" : `/${item}`}
            component={Link}
            sx={{
              color: "#fff",
              ":hover": { color: "var(--dark-color)" },
              height: "64px",
              position:"relative", // add for padding rigth
              top: 0,
              right:"-24px"
            }}
          ></Tab>
        ))}
      </Tabs>
    );
  }

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "var(--primary-color)" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Graduated Go
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <MyTabs />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
