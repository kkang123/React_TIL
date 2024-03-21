import { useState } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  console.log(input);

  //   const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setInput({ ...input, name: e.target.value });
  //     // ...input을 사용하면 name 이외의 값들은 변경하지 않고 사용한다는 의미
  //     // 사용하지 않으면 birth나 country나 bio가 아예 사라질 수 있다.
  //   };

  //   const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setInput({ ...input, birth: e.target.value });
  //   };

  //   const onChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     setInput({ ...input, country: e.target.value });
  //   };

  //   const onChangeBio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //     setInput({ ...input, bio: e.target.value });
  //   };

  // 통합 이벤트 핸들러
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
        <div>
          <input
            value={input.name}
            // onChange={onChangeName}
            name="name"
            onChange={onChange}
            placeholder={"이름"}
          />
        </div>

        <div>
          <input
            value={input.birth}
            type="date"
            //   onChange={onChangeBirth}
            name="birth"
            onChange={onChange}
          />
        </div>

        <div>
          <select
            value={input.country}
            //   onChange={onChangeCountry}
            name="country"
            onChange={onChange}
          >
            <option></option>
            <option value={"kr"}>한국</option>
            <option>미국</option>
            <option>영국</option>
          </select>
          {input.country}
        </div>

        <div>
          <textarea
            value={input.bio}
            //   onChange={onChangeBio}
            name="bio"
            onChange={onChange}
          />
          {input.bio}
        </div>
      </div>
    </>
  );
};

export default Register;

// 중복되는게 많아 비효율적인거 같아
// state를 하나의 객체로 묶어버리는 방법
// 이벤트 핸들러도 하나로 합치기 가능할듯?

// 2번째 코드가독성 상승
// 어디에다가 어떤 값을 작성해도 onChange 작성
// [e.target.name] 새로운 객체 생성 - 변수 이름 (키값)
// name="birth"을 하여 birth값을 작성하면 e.target.birth를 수정해라 라는 의미가 됨
