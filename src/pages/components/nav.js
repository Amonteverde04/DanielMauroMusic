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

const MERCHURL = "/merch";

export default function Nav() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMerchClick = (e) => {
    e.preventDefault();
    router.push(MERCHURL);
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
          bgcolor={"#02010c"}
          padding={"10px"}
          gap={"10px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link href={"/"} style={{ display: "flex", alignItems: "center" }}>
            <Image
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
            {["Merch"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ListItemButton
                  onClick={handleMerchClick}
                  style={{ padding: "0" }}
                >
                  <ListItemIcon style={{ color: "#FAFAFA" }}>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ color: "#FAFAFA" }} primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <AppBar position="sticky" style={{ backgroundColor: "#02010c" }}>
        <Toolbar
          sx={{
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
            {["Merch"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link
                  style={{
                    color: "#FAFAFA",
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                  href={"/merch"}
                >
                  {text}
                </Link>
              </ListItem>
            ))}
          </List>
          <IconButton
            className={styles.hamburger}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
