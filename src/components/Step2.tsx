import { Dispatch, SetStateAction } from "react";
import { FormDataType } from "../App";
import { PlanType } from "./inputs/PlanType";
import Button from "./Button";
import IconArcade from "../assets/images/icon-arcade.svg";
import IconAdvanced from "../assets/images/icon-advanced.svg";
import IconPro from "../assets/images/icon-pro.svg";

import * as S from "./styled";

type Props = {
  decrementStep: () => void;
  incrementStep: () => void;
  stepData: FormDataType;
  setStepData: Dispatch<SetStateAction<FormDataType>>;
};

const Step2: React.FC<Props> = ({
  decrementStep,
  incrementStep,
  stepData,
  setStepData,
}) => {
  const { plan, period, addon } = stepData;

  const toggleChecked = () => {
    addon.map((a) => [
      a.type,
      period === "Monthly" ? (a.price *= 10) : (a.price /= 10),
    ]);
    period === "Monthly" ? (plan.price *= 10) : (plan.price /= 10);
    setStepData((prevState) => {
      return {
        ...prevState,
        period: prevState.period === "Monthly" ? "Yearly" : "Monthly",
      };
    });
  };
  // console.log(plan, period);

  return (
    <div className="step-container">
      <p className="step-title">Select your plan</p>
      <p className="step-subtitle">
        You have the option of monthly or yearly billing.
      </p>

      <div className="plan-container">
        <PlanType
          icon={IconArcade}
          plan={plan}
          price={9}
          period={period}
          type="Arcade"
          setStepData={setStepData}
        />
        <PlanType
          icon={IconAdvanced}
          plan={plan}
          price={12}
          period={period}
          type="Advanced"
          setStepData={setStepData}
        />
        <PlanType
          icon={IconPro}
          plan={plan}
          price={15}
          period={period}
          type="Pro"
          setStepData={setStepData}
        />
      </div>
      <div className="period-container">
        <span
          onClick={toggleChecked}
          className={!(period === "Yearly") ? "period active" : "period"}
        >
          Monthly
        </span>
        <S.AntSwitch
          checked={period === "Yearly"}
          inputProps={{ "aria-label": "ant design" }}
          onChange={toggleChecked}
        />
        <span
          onClick={toggleChecked}
          className={period === "Yearly" ? "period active" : "period"}
        >
          Yearly
        </span>
      </div>

      <div className="button-container">
        <Button
          className="button-back"
          title="Go Back"
          onPress={decrementStep}
        />
        <Button
          disabled={plan.type === ""}
          className="button-next"
          title="Next Step"
          onPress={incrementStep}
        />
      </div>
    </div>
  );
};

export default Step2;
