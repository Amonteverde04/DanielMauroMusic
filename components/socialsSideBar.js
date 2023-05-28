import { List, ListItem, IconButton } from "@mui/material";
import { SOCIALS } from "../src/lib/globals";
import styles from "@/styles/socialsSideBar.module.css";

export default function SocialsSideBar() {
    return (
        <List className={styles.socialsSideBar}>
            {SOCIALS.map((socialInfo, index) => (
              <ListItem key={index} disablePadding>
                <IconButton target="blank" rel="noopener noreferrer" href={socialInfo.socialUrl} aria-label={socialInfo.alt} className={styles.socialIcons}>
                  {socialInfo.socialIcon}
                </IconButton>
              </ListItem>
            ))}
        </List>
    );
}