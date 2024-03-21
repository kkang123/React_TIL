// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState } from "react";

const Register = () => {
  const [name, setName] = useState<string>("이름");
  const [birth, setBirth] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setName(e.target.value); //input에 입력한 값을 setName함수가 실행되면서 name 상태에 저장됨
  };

  const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };

  const onChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  const onChangeBio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  return (
    <>
      <div>
        <div>
          <input value={name} onChange={onChangeName} placeholder={"이름"} />
        </div>

        <div>
          <input value={birth} type="date" onChange={onChangeBirth} />
        </div>

        <div>
          <select value={country} onChange={onChangeCountry}>
            <option></option>
            <option value={"kr"}>한국</option>
            <option>미국</option>
            <option>영국</option>
          </select>
          {country}
        </div>

        <div>
          <textarea value={bio} onChange={onChangeBio} />
          {bio}
        </div>
      </div>
    </>
  );
};

export default Register;
