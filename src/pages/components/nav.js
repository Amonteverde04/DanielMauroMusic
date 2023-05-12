import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./nav.module.scss";
import { Divider } from "@mui/material";
import { useRouter } from "next/router";

const NAVITEMCOLOR = "#f7f1a8";
const NAVCOLORLEFT = "#020717";
const NAVCOLORRIGHT = "#01000c";
const SOCIALS = [{socialUrl: "/", socialIcon: <ShoppingCartIcon sx={{fill: NAVITEMCOLOR}}/>}];
const ROUTES = [{routeName:"Merch",route:"/merch"}];

export default function Nav() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleRouteClick = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  return (
    <Box>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <Box
          sx={{background: `linear-gradient(to right, ${NAVCOLORLEFT} , ${NAVCOLORRIGHT})`}}
          padding={"10px"}
          gap={"10px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link href={"/"} style={{ display: "flex", alignItems: "center" }}>
            <Image
              priority
              src={"/images/danLogo.png"}
              width={125}
              height={75}
              alt="Daniel Mauro Logo"
            />
          </Link>
          <List sx={{ padding: 0, width: "100%" }}>
            <Divider
              variant="fullWidth"
              style={{ marginBottom: "10px", borderColor: "#ffc2bb" }}
            ></Divider>
            {ROUTES.map((routeInfo, index) => (
              <ListItem
                key={index}
                disablePadding
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ListItemButton
                  onClick={(e)=>{handleRouteClick(e, routeInfo.route)}}
                  style={{ padding: "0" }}
                >
                  <ListItemIcon style={{ color: NAVITEMCOLOR }}>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ color: NAVITEMCOLOR }} primary={routeInfo.routeName} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <AppBar position="sticky" style={{ backgroundImage: `linear-gradient(to right, ${NAVCOLORLEFT} , ${NAVCOLORRIGHT})`}}>
        <Toolbar
          sx={{
            background: `linear-gradient(to right, ${NAVCOLORLEFT} , ${NAVCOLORRIGHT})`,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 30px !important",
          }}
        >
          <Link href={"/"} style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={"/images/danLogo.png"}
              width={125}
              height={75}
              alt="Daniel Mauro Logo"
            />
          </Link>
          <List className={styles.navOptions}>
            {SOCIALS.map((socialInfo, index) => (
              <IconButton key={index} href={socialInfo.socialUrl}>
                {socialInfo.socialIcon}
              </IconButton>
            ))}
          </List>
          <List className={styles.navOptions}>
            {ROUTES.map((routeInfo, index) => (
                <Link
                  key={index}
                  style={{
                    color: NAVITEMCOLOR,
                    textDecoration: "none",
                    fontWeight: 400, fontSize: "2.125rem", lineHeight: "1.235"
                  }}
                  href={routeInfo.route}
                >
                  {routeInfo.routeName}
                </Link>
            ))}
          </List>
          <IconButton
            className={styles.hamburger}
            size="large"
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon sx={{fill: "#FAFAFA"}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
