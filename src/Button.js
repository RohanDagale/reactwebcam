import "./button.css";

const Button = (props) => {
  return (
    <>
      <div className="main-button">
        <button className="button">{props.button}</button>
      </div>
    </>
  );
};

export default Button;
