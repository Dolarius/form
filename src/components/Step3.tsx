import { Dispatch, SetStateAction } from "react";
import { FormDataType } from "../App";
import { AddOns } from "./inputs/AddOns";
import Button from "./Button";
import { useMonthToYear } from "../utils/useMonthToYear";

type Props = {
  decrementStep: () => void;
  incrementStep: () => void;
  stepData: FormDataType;
  setStepData: Dispatch<SetStateAction<FormDataType>>;
};

const Step3: React.FC<Props> = ({
  decrementStep,
  incrementStep,
  stepData,
  setStepData,
}) => {
  const { addon, period } = stepData;
  const { monthToYear } = useMonthToYear({ period });

  return (
    <div className="step-container">
      <p className="step-title">Pick add-ons</p>
      <p className="step-subtitle">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="add-on-container">
        <AddOns
          period={period}
          type="Online service"
          addon={addon}
          price={monthToYear(1)}
          setStepData={setStepData}
        />
        <AddOns
          period={period}
          type="Larger storage"
          addon={addon}
          price={monthToYear(2)}
          setStepData={setStepData}
        />
        <AddOns
          period={period}
          type="Customizable Profile"
          addon={addon}
          price={monthToYear(2)}
          setStepData={setStepData}
        />
      </div>

      <div className="button-container">
        <Button
          className="button-back"
          title="Go Back"
          onPress={decrementStep}
        />
        <Button
          disabled={false}
          className="button-next"
          title="Next Step"
          onPress={incrementStep}
        />
      </div>
    </div>
  );
};

export default Step3;
