interface ViewerProps {
  count: number; // count prop의 타입을 number로 지정합니다.
}

const Viewer = ({ count }: ViewerProps) => {
  return (
    <div>
      <div>현재 카운트 :</div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;

// 컴포넌트 간 데이터 전달은 props로만 하는데 부모 자식 관계에서만 가능
// 형제 간은 불가능

// Controller에다가 setCount를 전달해야함
// 그럼 어떻게 전달해야 하는가?
// App.tsx에 count, setCount를 상태를 관리해서 viewer에는 count값을 Controller에는 setCount를 전달해준다.
