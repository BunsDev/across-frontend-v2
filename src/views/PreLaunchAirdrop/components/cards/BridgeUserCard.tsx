import AirdropCard from "../AirdropCard";
import RewardsCard from "./RewardsCard";
import { RewardsApiInterface } from "utils/serverless-api/types";

import { ReactComponent as BridgeIcon } from "assets/icons/plaap/bridge.svg";
import { ReactComponent as WalletIcon } from "assets/icons/wallet-icon.svg";
import { CheckIconState } from "../CardIcon";

interface Props {
  rewardsData: RewardsApiInterface;
  account?: string;
  isConnected: boolean;
}

function useBridgeUserCard(
  rewardsData: RewardsApiInterface,
  isConnected: boolean
) {
  const isEligible =
    isConnected && rewardsData?.liquidityProviderRewards?.eligible;

  const check: CheckIconState = !isConnected
    ? "undetermined"
    : isEligible
    ? "eligible"
    : "ineligible";

  const cardDescription = isConnected
    ? isEligible
      ? "Congratulations! You are now eligible for the Across Early Bridge User airdrop."
      : "This wallet didn’t bridge on Across before the Across Referral Program launch (July 18th, 2022)."
    : "Users who bridge assets on Across before the Across Referral Program launch (July 18th, 2022) may be eligible for the $ACX airdrop.";

  return { check, cardDescription };
}

const BridgeUserCard: React.FC<Props> = ({
  rewardsData,
  account,
  isConnected,
}) => {
  const { check, cardDescription } = useBridgeUserCard(
    rewardsData,
    isConnected
  );
  return (
    <AirdropCard
      title="Early Bridge User"
      description={cardDescription}
      Icon={BridgeIcon}
      check={check}
      rewardAmount={rewardsData?.earlyUserRewards?.payout}
      children={
        check === "eligible" && (
          <RewardsCard
            label="Eligible wallet"
            address={account ?? ""}
            Icon={<WalletIcon />}
            bottomText="Rewards are estimated as of September 1, 2022 and are subject to
    change."
          />
        )
      }
    />
  );
};

export default BridgeUserCard;
