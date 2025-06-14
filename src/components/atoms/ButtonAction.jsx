import "./ButtonAction.css";
const ButtonAction = ({ text, action, style }) => {
  return (
    <button className={style} onClick={action}>
      {text}
    </button>
  );
};

export default ButtonAction;
