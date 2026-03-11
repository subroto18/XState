import styles from "./Button.module.css";

type Props = {
  value: string | number;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  key: string | number;
};

const Button = ({ value, onClick, key }: Props) => {
  return (
    <button
      key={key}
      className={`${styles.button}`}
      onClick={(e) => onClick(e)}
      value={value}
    >
      {value}
    </button>
  );
};

export default Button;
