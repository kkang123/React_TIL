import "./App.css";
// import Header from "./components/Header";
// import Main from "./components/Main";
// import Footer from "./components/Footer";
import Button from "@/components/common/Button";

// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// };

// function Header() {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

function App() {
  return (
    <>
      {/* <Header />
      <Main />
      <Footer />
      <h1>Vite + React</h1> */}

      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  );
}

export default App;