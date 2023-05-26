import { Box, Typography } from "@mui/material";
import Link from "next/link";
import styles from './heroLabel.module.scss'
import { LINKCOLOR } from "@/lib/globals";

export default function HeroLabel(props) {
    const name = props.featuredContent.length  ? 
        props.featuredContent[0].name : "Name";
    const link = props.featuredContent.length ? 
        props.featuredContent[0].link : "Link";
    const action = props.featuredContent.length ? 
        props.featuredContent[0].action : "Action";

    return (
        <Box sx={{width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#000000", textAlign: "center", gap:"20px", padding: "40px 0"}}>
            <Typography className={styles.albumAnnouncement} color={LINKCOLOR}>
                Album available October 20th
            </Typography>
            <Link href={link} target="blank" className={styles.streamLink} style={{color: LINKCOLOR}}>
                {action} {name} Here
            </Link>
        </Box>
    );
}