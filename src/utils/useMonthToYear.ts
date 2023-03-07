type Props = {
  period: string;
};

export const useMonthToYear = ({ period }: Props) => {
  function monthToYear(value: any) {
    return period === "Yearly" ? value * 10 : value;
  }

  return { monthToYear };
};
