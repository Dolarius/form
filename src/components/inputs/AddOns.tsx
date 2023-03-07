import { Dispatch, SetStateAction } from "react";
import { AddonObjectType, FormDataType } from "../../App";
import Button from "../Button";
import { CustomIcon } from "../rewrittenMuiComponents/CustomIcon";

import * as S from "../styled";

type Props = {
  type: string;
  addon: AddonObjectType[];
  price: number;
  setStepData: Dispatch<SetStateAction<FormDataType>>;
  period: string;
};

export const AddOns: React.FC<Props> = ({
  type,
  addon,
  price,
  setStepData,
  period,
}) => {
  const checked = addon.map(({ type }) => type).includes(type);

  const you = () => {
    !checked &&
      setStepData((prev) => {
        return {
          ...prev,
          ...{ addon: addon.concat({ type, price }) },
        };
      });
    checked &&
      setStepData((prev) => {
        return {
          ...prev,
          ...{
            addon: addon.filter((a) => a.type !== type),
          },
        };
      });
  };

  const addOnSubtitle = () => {
    switch (type) {
      case "Larger storage":
        return "Extra 1TB of cloud save";
      case "Customizable Profile":
        return "Custom theme on your profile";
      default:
        return "Access to multiplayer games";
    }
  };

  return (
    <Button className={checked ? "add-on active" : "add-on"} onPress={you}>
      <S.AddonCheckbox
        checked={checked}
        disableRipple={true}
        icon={<CustomIcon />}
        className="add-on-checkbox"
        inputProps={{
          "aria-label": "Checkbox",
        }}
      />
      <div className="add-on-title">{type}</div>
      <div className="add-on-subtitle">{addOnSubtitle()}</div>
      <div className="add-on-price">
        {period === "Monthly" ? `+$${price}/mo` : `+$${price}/yr`}
      </div>
    </Button>
  );
};
