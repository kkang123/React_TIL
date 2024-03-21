// 이벤트가 발생했을 때 그것을 처리하는 것

interface ButtonProps {
  text: string;
  color?: string;
  children?: React.ReactNode;
}

const Button = ({ text, color, children }: ButtonProps) => {
  // 이벤트 객체
  //React.MouseEvent<HTMLButtonElement> 타입이 되어야 합니다. 여기서 React.MouseEvent는 React에 의해 제공되는 마우스 이벤트를 위한 제네릭 타입이고, <HTMLButtonElement>는 이 이벤트가 발생하는 DOM 요소의 타입

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    console.log(text);
  };

  return (
    <>
      <button
        //   onClick={()=>{console.log(text)}}

        onClick={onClickButton} // 이벤트 해들러 함수
        // onMouseEnter={onClickButton} //마우스를 가져다 대면 콘솔 찍힘
        style={{ color: color }}
      >
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

// 합성 이벤트(SyntheticBaseEvent)
// 모든 브라우저의 이벤트 객체를 하나의 포맷으로 통일한 형태를 의미
// 서로 다른 브라우저들이 동작이 조금씩 다름
// can i use로 확인을해야함

// event 객체가 다르다
// 크롬 : target 사파리 : ETarget 부를 수 있다.

// 크로스 브라우징 이슈 해결을 위해 리액트의 합성 이벤트를 사용
