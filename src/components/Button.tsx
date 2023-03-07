type Props = {
  title?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onPress?: () => void;
  children?: React.ReactNode;
};

const Button: React.FC<Props> = ({
  title,
  type,
  disabled,
  className,
  onPress,
  children,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      onClick={onPress}
    >
      {title}
      {children}
    </button>
  );
};

export default Button;
