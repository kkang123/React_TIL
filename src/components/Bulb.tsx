import { useState } from "react";

// 내부에서 prop를 관리하기 때문에 interface 정의가 필요없다.
const Bulb = () => {
  const [light, setLight] = useState<"ON" | "OFF">("OFF");

  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {/* 전구 끄기 / 켜기 */}
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
