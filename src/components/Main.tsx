// 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 객체는 렌더링 할 수 없다.그래서 점표 기법을 사용하여 문자열이나 숫자값을 출력해야한다.
// 4. 모든 태그는 닫혀있어야 한다.
// 5. 최상위 태그는 반드시 하나여야만 한다.

// const Main = () => {
//   const number = 10;
//   const obj = { a: 7 };

//   return (
//     <main>
//       <h1>main</h1>
//       <h2>{number + 5}</h2>
//       <h3>{number % 2 === 0 ? "짝수" : "홀수"}</h3>
//       {10}
//       {number}
//       {[1, 2, 3]}
//       {true}
//       {undefined}
//       {obj.a}
//     </main>
//   );
// };

// export default Main;
import "./Main.css";

const Main = () => {
  const user = {
    name: "이정한",
    isLogin: true,
  };

  if (user.isLogin) {
    return (
      <div
        className="logout"
        style={{
          // backgroundColor: "red",
          borderBottom: "5px solid blue",
        }}
      >
        {/* 스타일이 길어지면 가독성이 안 좋아짐 */}
        {/* 별도의 css 만들기 styled-component가 아닌 css파일을 사용하네*/}
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }

  // return (
  //   <>{user.isLogin ? <button>로그아웃</button> : <button>로그인</button>}</>
  // );
};

export default Main;
