import { DotStepper } from "components";
import {
  Wrapper,
  HeroBlock,
  Title,
  Description,
  DotStepWrapper,
  ButtonWrapper,
} from "./TravellerFlow.styles";
import {
  SecondaryButtonV2,
  TertiaryButton,
  ButtonV2,
} from "components/Buttons/ButtonV2";
import useTravellerFlow from "./useTravellerFlow";
import { FlowSelector } from "views/PreLaunchAirdrop/usePreLaunchAirdrop";
interface Props {
  setActivePageFlow: React.Dispatch<React.SetStateAction<FlowSelector>>;
}
const numDots = 4;
const TravellerFlow: React.FC<Props> = ({ setActivePageFlow }) => {
  const { step, setStep, view } = useTravellerFlow();
  const Icon = view.Icon;
  return (
    <Wrapper>
      <HeroBlock>
        <Icon />
      </HeroBlock>
      <Title>{view.title}</Title>
      <Description>{view.description}</Description>
      <ButtonWrapper>
        <TertiaryButton
          onClick={() => {
            // Return back to view, not sure where yet.
            // Change when integrating this into regular view.
            setStep((pv) => Math.max(1, pv - 1));
          }}
          size="md"
        >
          {step === 1 ? "Back to Home" : "Back"}
        </TertiaryButton>
        {step < numDots ? (
          <SecondaryButtonV2
            onClick={() => {
              setStep((pv) => Math.min(pv + 1, numDots));
            }}
            size="md"
          >
            Next
          </SecondaryButtonV2>
        ) : (
          <ButtonV2 size="md" onClick={() => setActivePageFlow("splash")}>
            Go to Bridge
          </ButtonV2>
        )}
      </ButtonWrapper>
      <DotStepWrapper>
        <DotStepper numDots={numDots} step={step} />
      </DotStepWrapper>
    </Wrapper>
  );
};

export default TravellerFlow;
