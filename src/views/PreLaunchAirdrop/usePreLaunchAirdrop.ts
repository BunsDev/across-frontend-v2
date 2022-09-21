import { useDiscord } from "hooks/useDiscord";
import { useOnboard } from "hooks/useOnboard";
import { useState } from "react";

export type FlowSelector = "splash" | "traveller" | "info";

export default function usePreLaunchAirdrop() {
  const [activePageFlow, setActivePageFlow] = useState<FlowSelector>("splash");
  const { isConnected, connect } = useOnboard();

  const { redirectToAuth, unauthenticate, isAuthenticated } = useDiscord();

  return {
    activePageFlow,
    setActivePageFlow,

    discordLoginHandler: redirectToAuth,
    discordLogoutHandler: unauthenticate,
    isDiscordAuthenticated: isAuthenticated,

    // Fns related to setting page flow
    switchToSplash: () => setActivePageFlow("splash"),
    switchToTraveller: () => setActivePageFlow("traveller"),
    switchToInfo: () => setActivePageFlow("info"),

    // Vars related to Onboard connection
    isConnected,
    connectWallet: () => connect(),
  };
}
