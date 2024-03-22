import { useState, ChangeEvent } from "react";
// ChangeEvent는 React에서 폼 입력 요소의 상태 변경을 다룰 때 사용되는 이벤트 타입

// 커스텀 훅
// useInput 훅의 반환 타입을 명시적으로 지정
function useInput(): [
  string,
  (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void
] {
  const [input, setInput] = useState<string>("");

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
