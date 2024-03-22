interface ControllerProps {
  onClickButton: (value: number) => void; // onClickButton prop의 타입을 지정합니다.
}

const Controller = ({ onClickButton }: ControllerProps) => {
  return (
    <div>
      <button
        onClick={() => {
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickButton(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClickButton(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickButton(+1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
