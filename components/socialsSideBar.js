import { List, IconButton } from "@mui/material";
import { SOCIALS } from "../src/lib/globals";
import styles from "@/styles/socialsSideBar.module.css";

export default function SocialsSideBar() {
    return (
        <List className={styles.socialsSideBar}>
            {SOCIALS.map((socialInfo, index) => (
              <IconButton key={index} target="blank" rel="noopener noreferrer" href={socialInfo.socialUrl} className={styles.socialIcons}>
                {socialInfo.socialIcon}
              </IconButton>
            ))}
        </List>
    );
}