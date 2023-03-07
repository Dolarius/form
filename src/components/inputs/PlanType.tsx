import { Dispatch, SetStateAction } from "react";
import { FormDataType, PlanObjectType } from "../../App";
import { useMonthToYear } from "../../utils/useMonthToYear";
import Button from "../Button";

type Props = {
  setStepData: Dispatch<SetStateAction<FormDataType>>;
  plan: PlanObjectType;
  period: string;
  icon: string;
  type: string;
  price: number;
};
export const PlanType: React.FC<Props> = ({
  setStepData,
  plan,
  period,
  icon,
  type,
  price,
}) => {
  const { monthToYear } = useMonthToYear({ period });
  return (
    <Button
      className={plan.type === type ? "plan active" : "plan"}
      onPress={() =>
        setStepData((prevState) => {
          return {
            ...prevState,
            plan: { type: type, price: monthToYear(price) },
          };
        })
      }
    >
      <img src={icon} alt="IconArcade" />
      <span className="plan-type">{type}</span>
      <span className="plan-price">
        {period === "Monthly" ? `$${price}/mo` : `$${monthToYear(price)}/yr`}
      </span>
      {period === "Yearly" && (
        <span className="plan-discount">2 months free</span>
      )}
    </Button>
  );
};
