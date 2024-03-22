import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const refObj = useRef(0);
  console.log(refObj); // current 프로퍼티에 : 값을 저장하는 것을 확인 가능(초기값 설정 가능)
  console.log(refObj.current);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            refObj.current++;
            console.log(refObj.current);
          }}
        >
          ref + 1
        </button>

        <div>
          <input
            value={input.name}
            name="name"
            onChange={onChange}
            placeholder={"이름"}
          />
        </div>

        <div>
          <input
            value={input.birth}
            type="date"
            name="birth"
            onChange={onChange}
          />
        </div>

        <div>
          <select value={input.country} name="country" onChange={onChange}>
            <option></option>
            <option value={"kr"}>한국</option>
            <option>미국</option>
            <option>영국</option>
          </select>
          {input.country}
        </div>

        <div>
          <textarea value={input.bio} name="bio" onChange={onChange} />
          {input.bio}
        </div>
      </div>
    </>
  );
};

export default Register;
