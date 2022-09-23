import Footer from "components/Footer";
import {
  BackgroundLayer,
  ContentWrapper,
  OpacityLayer,
  Wrapper,
} from "./PreLaunchAirdrop.styles";
import VideoBackground from "assets/prelaunch/acx-bg-video-comp.mp4";
import usePreLaunchAirdrop from "./usePreLaunchAirdrop";
import TravellerFlow from "./components/TravellerFlow";
import { SplashFlow } from "./components/SplashFlow";
import { MoreInfoFlow } from "./components/MoreInfoFlow";
import { useState } from "react";
import LinkWalletModal from "./components/LinkWalletModal";
const PreLaunchAirdrop = () => {
  const {
    activePageFlow,
    setActivePageFlow,
    switchToSplash,
    switchToInfo,
    isConnected,
    connectWalletHandler,
    account,
    linkWalletHandler,
    discordLoginHandler,
    discordLogoutHandler,
    isDiscordAuthenticated,
    rewardsData,
  } = usePreLaunchAirdrop();
  const [displayModal, setDisplayModal] = useState(false);

  let activePageComponent: JSX.Element;
  switch (activePageFlow) {
    case "traveller":
      activePageComponent = (
        <TravellerFlow setActivePageFlow={setActivePageFlow} />
      );
      break;
    case "splash":
      activePageComponent = (
        <SplashFlow
          isDiscordAuthenticated={isDiscordAuthenticated}
          discordLoginHandler={discordLoginHandler}
          discordLogoutHandler={discordLogoutHandler}
          connectWalletHandler={connectWalletHandler}
          displayLinkModal={() => setDisplayModal(true)}
          isConnected={isConnected}
          airdropDetailsLinkHandler={switchToInfo}
          account={account}
          rewardsData={rewardsData}
          setActivePageFlow={setActivePageFlow}
        />
      );
      break;
    case "info":
      activePageComponent = <MoreInfoFlow onClickBack={switchToSplash} />;
      break;
    default:
      activePageComponent = <></>;
  }

  return (
    <>
      <Wrapper>
        <BackgroundLayer autoPlay loop muted>
          <source src={VideoBackground} type="video/mp4" />
        </BackgroundLayer>
        <OpacityLayer />
        <ContentWrapper>{activePageComponent}</ContentWrapper>
        <Footer />
      </Wrapper>
      <LinkWalletModal
        linkWalletHandler={linkWalletHandler}
        isConnected={isConnected}
        connectWalletHandler={connectWalletHandler}
        displayModal={displayModal}
        exitModalHandler={() => setDisplayModal(false)}
        address={account}
      />
    </>
  );
};

export default PreLaunchAirdrop;
