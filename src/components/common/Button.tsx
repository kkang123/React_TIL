interface ButtonProps {
  text: string;
  color?: string;
  children?: React.ReactNode;
  // ReactNode 타입 사용하면 문자열, 숫자, React 요소, 배열, 조각 등 모든 타입의 자식을 포함 가능
}

// const Button = (props: ButtonProps) => {

// 구조 분해 할당을 사용하여 컴포넌트의 props를 직접 받을 때
const Button = ({ text, color, children }: ButtonProps) => {
  return (
    <>
      {/* <button style={{ color: props.color }}>
        {props.text} - {props.color?.toUpperCase()}
      </button> */}
      <button style={{ color: color }}>
        {text} - {color?.toUpperCase()}
        {children}
      </button>
    </>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
