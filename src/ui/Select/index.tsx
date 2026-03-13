import Styles from "./Style.module.css";
type Props = {
  htmlFor?: string;
  name?: string;
  value?: string;
  id?: string;
  label?: string;
  options?: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
};

const index = ({ id, options, label, onChange, disabled, value }: Props) => {
  return (
    <>
      <select
        onChange={onChange}
        className={Styles.select}
        id={id}
        disabled={disabled}
        value={value}
      >
        <option key={"select"} value="" selected disabled>
          {label || "Select"}
        </option>

        {options?.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default index;
