import { useState } from "react";
import { formatNumberMaxFracDigits } from "utils";
import { StakingRewardPropType } from "../../types";
import StakingInputBlock from "../StakingInputBlock";
import { AlertInfo } from "./AlertInfo";
import {
  Title,
  Wrapper,
  InnerWrapper,
  Divider,
  StakingClaimAmountWrapper,
  StakingClaimAmountText,
  StakingClaimAmountTitle,
  StakingClaimAmountInnerWrapper,
  PresentIcon,
  StyledAcrossLogo,
  StakingInputBlockWrapper,
} from "./StakingReward.styles";

export const StakingReward = ({
  maximumClaimableAmount,
  isConnected,
  walletConnectionHandler,
}: StakingRewardPropType) => {
  const [amountToClaim, setAmountToClaim] = useState("");

  const buttonHandler = isConnected ? () => {} : walletConnectionHandler;
  const buttonTextPrefix = isConnected ? "" : "Connect wallet to ";

  const valueOrFill = (value: any) => (isConnected ? value : "-");

  // Stub Function
  const stakingAmountValidationHandler = (value: string): boolean => {
    const numericValue = Number(value);
    return (
      !Number.isNaN(numericValue) &&
      numericValue > 0 &&
      numericValue <= maximumClaimableAmount
    );
  };

  // Stub Function
  const isAmountExceeded = (value: string): boolean => {
    const numericValue = Number(value);
    return !Number.isNaN(numericValue) && numericValue > maximumClaimableAmount;
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <Title>Rewards</Title>
      </InnerWrapper>
      <StakingInputBlockWrapper>
        {isConnected && (
          <AlertInfo>
            Claiming tokens will reset your multiplier and decrease your ACX APY
          </AlertInfo>
        )}
        <StakingInputBlock
          value={amountToClaim}
          setValue={setAmountToClaim}
          Logo={StyledAcrossLogo}
          buttonText={`${buttonTextPrefix} claim`}
          valid={!isConnected || stakingAmountValidationHandler(amountToClaim)}
          maxValue={String(maximumClaimableAmount)}
          omitInput={!isConnected}
          onClickHandler={buttonHandler}
        />
        {isAmountExceeded(amountToClaim) && (
          <AlertInfo danger>
            The amount entered exceeds your claimable amount
          </AlertInfo>
        )}
      </StakingInputBlockWrapper>
      <InnerWrapper>
        <Divider />
      </InnerWrapper>
      <InnerWrapper>
        <StakingClaimAmountWrapper>
          <StakingClaimAmountTitle>Claimable Rewards</StakingClaimAmountTitle>
          {valueOrFill(
            <StakingClaimAmountInnerWrapper>
              <PresentIcon />
              <StakingClaimAmountText>
                {formatNumberMaxFracDigits(maximumClaimableAmount)}
              </StakingClaimAmountText>
            </StakingClaimAmountInnerWrapper>
          )}
        </StakingClaimAmountWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default StakingReward;
