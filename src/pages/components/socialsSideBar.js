import { List, IconButton } from "@mui/material";
import { SOCIALS } from "../../lib/globals";
import styles from "./socialsSideBar.module.scss";

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