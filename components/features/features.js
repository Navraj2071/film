import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import Text from "../subcomponents/headings";
import Card from "@mui/material/Card";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import GroupsIcon from "@mui/icons-material/Groups";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PreviewIcon from "@mui/icons-material/Preview";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import TokenIcon from "@mui/icons-material/Token";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import { useMediaQuery } from "@mui/material";

const Features = () => {
  const theme = useTheme();

  const featuresList = [
    {
      title: "Wallet login",
      text: "We value the privacy of our users. Users are able to log into the platform using blockchain wallets like Metamask & True Wallet. No email or phone number. Users choose to stay as anonymous as they like.",
      // icon: (
      //   <AccountBalanceWalletIcon sx={{ fontSize: "100px" }} color="primary" />
      // ),
      icon: <img src="/icons/walletconnect.png" style={{ height: "100px" }} />,
    },
    {
      title: "Crowd Funding",
      text: "Content creators / Film makers can raise funding for their projects from film enthusiasts around the globe. No need to rely upon existing messy fund raising techniques. The platform takes care of raising awareness about the project.",
      // icon: <GroupsIcon sx={{ fontSize: "100px" }} color="primary" />,
      icon: <img src="/icons/crowdfunding.png" style={{ height: "100px" }} />,
    },
    {
      title: "Investing",
      text: "Film projects are a great form of investment, but only limited to a handful of investors in the film industry. Now with Film Finance App, anyone can invest and grow their funds by choosing the film projects they like want to watch.",
      // icon: <AttachMoneyIcon sx={{ fontSize: "100px" }} color="primary" />,
      icon: <img src="/icons/investing.png" style={{ height: "100px" }} />,
    },
    {
      title: "Token Exchange",
      text: "A decentralized exchange (DEX) to buy, trade and sell film tokens",
      // icon: <CurrencyExchangeIcon sx={{ fontSize: "100px" }} color="primary" />,
      icon: <img src="/icons/tokenexchange.png" style={{ height: "100px" }} />,
    },
    {
      title: "Media Streaming",
      text: "A robust streaming platform to binge watch your favourite movies, short films and web series.",
      // icon: <OndemandVideoIcon sx={{ fontSize: "100px" }} color="primary" />,
      icon: <img src="/icons/mediastreaming.png" style={{ height: "100px" }} />,
    },
    {
      title: "Watch-to-Earn",
      text: "Users get paid to watch ads on the platform. This is possible by using micro transactions per ad view.",
      // icon: <PreviewIcon sx={{ fontSize: "100px" }} color="primary" />,
      icon: <img src="/icons/watch2earn.png" style={{ height: "100px" }} />,
    },
    {
      title: "Pay-per-view ads",
      text: "Advertisers only pay for the ads that are actually viewed by users.",
      // icon: <PriceChangeIcon sx={{ fontSize: "100px" }} color="primary" />,
      icon: <img src="/icons/payperview.png" style={{ height: "100px" }} />,
    },
    {
      title: "NFTs",
      text: "Exclusive NFTs by content creators that provide special benefits to NFT holders.",
      // icon: <TokenIcon sx={{ fontSize: "100px" }} color="primary" />,
      icon: <img src="/icons/NFT.png" style={{ height: "100px" }} />,
    },
    {
      title: "Mobile App",
      text: "Available on Android and IOS.",
      // icon: (
      //   <SystemSecurityUpdateGoodIcon
      //     sx={{ fontSize: "100px" }}
      //     color="primary"
      //   />
      // ),
      icon: <img src="/icons/mobileapp.png" style={{ height: "100px" }} />,
    },
  ];

  return (
    // <Box sx={{ backgroundColor: theme.palette.background.dark }} id="Features">
    <Box id="Features">
      <Container
        maxWidth="xl"
        sx={{
          //   minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: { xs: "5rem", sm: "10rem" },
          paddingBottom: { xs: "5rem", sm: "10rem" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            text="Features"
            variant="h2"
            sx={{ fontWeight: 600, textShadow: "0px 0px 10px black" }}
            gutterBottom
          />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: "20px",
            }}
          >
            {featuresList.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                text={feature.text}
                Icon={feature.icon}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

const FeatureCard = (props) => {
  const { title, text, Icon } = props;
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: theme.palette.background.light,
        padding: "20px",
        paddingTop: "40px",
      }}
    >
      {Icon}
      <Text
        text={title}
        gutterBottom
        variant="h4"
        sx={{ marginTop: "0.5rem" }}
      />
      <Text text={text} gutterBottom variant="h6" />
    </Card>
  );
};
