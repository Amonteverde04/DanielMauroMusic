import { Box, Typography } from "@mui/material";
import Link from "next/link";
import styles from './heroLabel.module.scss'
import { LINKCOLOR } from "@/lib/globals";

export default function HeroLabel() {
    return (
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#000000", textAlign: "center", gap:"10px", padding:"30px"}}>
            <Typography className={styles.albumAnnouncement} color={LINKCOLOR}>
                Album available October 20th
            </Typography>
            <Link href="/" className={styles.streamLink} style={{color: LINKCOLOR}}>
                Stream Daydream Here
            </Link>
        </Box>
    );
}