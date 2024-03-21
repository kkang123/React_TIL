interface ButtonProps {
  text: string;
  color?: string;
}

// const Button = (props: ButtonProps) => {

// 구조 분해 할당을 사용하여 컴포넌트의 props를 직접 받을 때
const Button = ({ text, color }: ButtonProps) => {
  return (
    <>
      {/* <button style={{ color: props.color }}>
        {props.text} - {props.color?.toUpperCase()}
      </button> */}
      <button style={{ color: color }}>
        {text} - {color?.toUpperCase()}
      </button>
    </>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
