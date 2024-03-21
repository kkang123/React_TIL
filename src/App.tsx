// 1

// import "./App.css";
// // import Header from "./components/Header";
// // import Main from "./components/Main";
// // import Footer from "./components/Footer";
// import Button from "@/components/common/Button";

// // const Header = () => {
// //   return (
// //     <header>
// //       <h1>header</h1>
// //     </header>
// //   );
// // };

// // function Header() {
// //   return (
// //     <header>
// //       <h1>header</h1>
// //     </header>
// //   );
// // }

// function App() {
//   const buttonProps = { text: "메일", color: "red", a: 1, b: 2, c: 3 }; // props로 여러개의 값을 전달해줘야한다면 객체로 만들어 준 뒤 스프레이드 연산자를 사용하여 전달

//   return (
//     <>
//       {/* <Header />
//       <Main />
//       <Footer />
//       <h1>Vite + React</h1> */}

//       {/* <Button text={"메일"} color={"red"} /> */}
//       <Button {...buttonProps} />
//       <Button text={"카페"} />

//       {/* children 이라는 props로 전달되는 값 */}
//       <Button text={"블로그"}>
//         <div>자식 요소</div>
//       </Button>
//     </>
//   );
// }

// export default App;

// 2
// 이벤트 핸들링
// import "./App.css";
// import EventHandling from "@/components/EventHandling";

// function App() {
//   const buttonProps = { text: "메일", color: "red", a: 1, b: 2, c: 3 };

//   return (
//     <>
//       <EventHandling {...buttonProps} />
//       <EventHandling text={"카페"} />
//       <EventHandling text={"블로그"}>
//         <div>자식 요소</div>
//       </EventHandling>
//     </>
//   );
// }

// export default App;

// 3
// state
import "./App.css";
import { useState } from "react";

function App() {
  // [state의 현재 값, 상태 변화 함수]
  // const state = useState();
  const [count, setCount] = useState(0);
  // 최초 렌더링은 state 값
  // 버튼 클릭 할 때마다 app 컴포넌트를 다시 호출하여 리렌더링하여 숫자가 업데이트 됨
  const [light, setLight] = useState("OFF");
  // let이나 const를 사용하면 리렌더링 되지 않는다. 상태가 변할 때만 리액트는 리렌더링하기 때문인다.

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {/* 전구 끄기 / 켜기 */}
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>

      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {/* 컴포넌트를 리렌더링 */}
    </>
  );
}

export default App;

//ex
// import "./App.css";

// function App() {

//   return (
//     <>
//     </>
//   );
// }

// export default App;
