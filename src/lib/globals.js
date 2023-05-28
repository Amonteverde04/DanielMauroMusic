import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faApple, faInstagram, faYoutube, faAmazon, faTiktok } from '@fortawesome/free-brands-svg-icons'

export const APPURL = process.env.NODE_ENV === "development" ?
"http://localhost:3000" : "https://daniel-mauro-music-fe.vercel.app";

export const MAINWHITE = "#FAFAFA";
export const MAINYELLOW = "#f8f1a8";
export const MAINBLUE = "#79beef";
export const MAINPINK = "#ffbfb9";
export const NAVITEMCOLOR = MAINYELLOW;
export const NAVCOLORLEFT = "#020717";
export const NAVCOLORRIGHT = "#01000c";
export const LINKCOLOR = "#f7f1a8";

export const SOCIALS = [
  {socialUrl: "https://open.spotify.com/artist/0eh6TL4x6u9lcanAdWrz5Z?si=UKAGcVIgSii79AubZi59og&nd=1", socialIcon: <FontAwesomeIcon color={NAVITEMCOLOR} icon={faSpotify}/>, alt: "Daniel Mauro's Spotify"},
  {socialUrl: "https://music.apple.com/us/artist/daniel-mauro/1573319648", socialIcon: <FontAwesomeIcon color={NAVITEMCOLOR} icon={faApple}/>, alt: "Daniel Mauro's Apple Music"},
  {socialUrl: "https://www.instagram.com/danielmauromusic/?hl=en", socialIcon: <FontAwesomeIcon color={NAVITEMCOLOR} icon={faInstagram}/>, alt: "Daniel Mauro's Instagram"},
  {socialUrl: "https://www.youtube.com/channel/UCrf2dSH0iVPcD2PrKxpIQMQ", socialIcon: <FontAwesomeIcon color={NAVITEMCOLOR} icon={faYoutube}/>, alt: "Daniel Mauro's Youtube"},
  {socialUrl: "https://music.amazon.com/artists/B07DKBMHV4/daniel-mauro?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_vWwuK24FxnodXMfUwoCptaDv0", socialIcon: <FontAwesomeIcon color={NAVITEMCOLOR} icon={faAmazon}/>, alt: "Daniel Mauro's Amazon Music"},
  {socialUrl: "https://www.tiktok.com/@danielmauromusic?_d=secCgwIARCbDRjEFSACKAESPgo8RgO232wfrdmtARVetY8LvowQnnDnQtlqxY75iTUcA7HyH4rAAhIptf19dkqKIz%2FLJUeY5aR4d%2FLL%2B515GgA%3D&checksum=014503afcb6624ed6a69d30d75e51390a008c3771ed29f8aba768250d900bf7b&language=en&sec_uid=MS4wLjABAAAAuGxmZ_OtrOK1fP9Bf6iM4vAppG3Ka0voD_47SBg5YWTuQ3KnRzAo3vpYtzNopQ6K&sec_user_id=MS4wLjABAAAAuGxmZ_OtrOK1fP9Bf6iM4vAppG3Ka0voD_47SBg5YWTuQ3KnRzAo3vpYtzNopQ6K&share_app_id=1233&share_author_id=6976837457049797637&share_link_id=52AC1505-147A-4F3E-B5F7-2ABA4CFFEB76&tt_from=copy&u_code=dj88i7892k9baf&user_id=6976837457049797637&utm_campaign=client_share&utm_medium=ios&utm_source=copy&_r=1", socialIcon: <FontAwesomeIcon color={NAVITEMCOLOR} icon={faTiktok}/>, alt: "Daniel Mauro's TikTok"},
];
export const ROUTES = [{routeName:"Merch",route:"/merch"}];