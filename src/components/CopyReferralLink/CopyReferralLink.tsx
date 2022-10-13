import styled from "@emotion/styled";
import { ButtonV2 } from "components/Buttons";
import { useReferralLink } from "hooks/useReferralLink";
import { ReactComponent as UnstyledCopyIcon } from "assets/icons/copy-16.svg";
import { useEffect, useState } from "react";

type CopyReferralLinkType = {
  condensed?: boolean;
};

const CopyReferralLink = ({ condensed }: CopyReferralLinkType) => {
  const { referralLink, condensedReferralLink, referralLinkWithProtocol } =
    useReferralLink();
  const text = condensed ? condensedReferralLink : referralLink;

  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (completed) {
      navigator.clipboard.writeText(referralLinkWithProtocol ?? "");
      const timeoutId = setTimeout(() => {
        setCompleted(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [completed, referralLinkWithProtocol]);

  return (
    <Wrapper>
      <LinkText>{text}</LinkText>
      <CopyReferralButton size="lg" onClick={() => setCompleted(true)}>
        {!condensed && "Copy referral link"}
        <StyledCopyIcon completed={completed} />
      </CopyReferralButton>
    </Wrapper>
  );
};

export default CopyReferralLink;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  gap: 255px;

  width: 100%;

  background: #2d2e33;
  border-top: 1px solid #3e4047;
  border-radius: 0px 0px 10px 10px;
`;

const LinkText = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  font-feature-settings: "tnum" on, "lnum" on;

  color: #9daab2;

  width: fit-content;
`;

const CopyReferralButton = styled(ButtonV2)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  font-style: normal;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #e0f3ff;

  background: transparent;

  &:active::after {
    border: none !important;
  }
`;

type StyledCopyIconType = {
  completed?: boolean;
};
const StyledCopyIcon = styled(UnstyledCopyIcon)<StyledCopyIconType>`
  height: 24px;
  width: 24px;
  & path {
    stroke: ${({ completed }) => (completed ? "#6cf9d8" : "#e0f3ff")};

    transition: stroke 0.5s;
  }
`;
