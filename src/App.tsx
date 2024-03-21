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
import "./App.css";
import EventHandling from "@/components/EventHandling";

function App() {
  const buttonProps = { text: "메일", color: "red", a: 1, b: 2, c: 3 };

  return (
    <>
      <EventHandling {...buttonProps} />
      <EventHandling text={"카페"} />
      <EventHandling text={"블로그"}>
        <div>자식 요소</div>
      </EventHandling>
    </>
  );
}

export default App;
