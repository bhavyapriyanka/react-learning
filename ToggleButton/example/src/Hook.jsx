import { useState } from "react";
export function useToggle(intialValue = false) {
  const [isOn, setIsOn] = useState(intialValue);
  function toggle() {
    setIsOn(!isOn);
  }
  return [isOn, toggle];
  // your code here
}
