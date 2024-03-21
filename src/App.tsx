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
// import "./App.css";
// import { useState } from "react";

// function App() {
//   // [state의 현재 값, 상태 변화 함수]
//   // const state = useState();
//   const [count, setCount] = useState(0);
//   // 최초 렌더링은 state 값
//   // 버튼 클릭 할 때마다 app 컴포넌트를 다시 호출하여 리렌더링하여 숫자가 업데이트 됨
//   const [light, setLight] = useState("OFF");
//   // let이나 const를 사용하면 리렌더링 되지 않는다. 상태가 변할 때만 리액트는 리렌더링하기 때문인다.

//   return (
//     <>
//       <div>
//         <h1>{light}</h1>
//         <button
//           onClick={() => {
//             setLight(light === "ON" ? "OFF" : "ON");
//           }}
//         >
//           {/* 전구 끄기 / 켜기 */}
//           {light === "ON" ? "끄기" : "켜기"}
//         </button>
//       </div>

//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//       {/* 컴포넌트를 리렌더링 */}
//     </>
//   );
// }

// export default App;

// 4
// state, props
// import "./App.css";
// import { useState } from "react";

// interface BulbProps {
//   light: "ON" | "OFF"; // 'light' prop이 "ON" 또는 "OFF"의 문자열 값만 가질 수 있음을 명시합니다.
// }

// const Bulb: React.FC<BulbProps> = ({ light }) => {
//   return (
//     <div>
//       {light === "ON" ? (
//         <h1 style={{ backgroundColor: "orange" }}>ON</h1>
//       ) : (
//         <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
//       )}
//     </div>
//   );
// };

// function App() {
//   const [count, setCount] = useState(0);
//   const [light, setLight] = useState<"ON" | "OFF">("OFF");

//   return (
//     <>
//       <div>
//         <Bulb light={light} />

//         <button
//           onClick={() => {
//             setLight(light === "ON" ? "OFF" : "ON");
//           }}
//         >
//           {/* 전구 끄기 / 켜기 */}
//           {light === "ON" ? "끄기" : "켜기"}
//         </button>
//       </div>

//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//     </>
//   );
// }

// export default App;

// 리액트 리렌더링 1. state 2. props 3. 부모가 리렌더링하면 자식도 리렌더링 성능 저하를 해결하기 위해

// 4-2
// import "./App.css";

// import Bulb from "@/components/Bulb";
// import Counter from "@/components/Counter";

// function App() {
//   return (
//     <>
//       {/* 부모 자식을 분리해서 불필요한 리렌더링 방지 */}
//       <Bulb />
//       <Counter />
//     </>
//   );
// }

// export default App;

// 5
// state로 사용자 입력 관리

// import "./App.css";

// import Register from "@/components/Register";

// function App() {
//   return (
//     <>
//       <Register />
//     </>
//   );
// }

// export default App;

// 6
// state로 사용자 입력 관리 코드 가독성 올리기

import "./App.css";

import Register from "@/components/Register1";

function App() {
  return (
    <>
      <Register />
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
