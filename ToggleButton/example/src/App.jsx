import { useCallback, useState } from "react";
import { useToggle } from "./Hook";
// ✅ Complete the custom hook below

export default function App() {
  // ✅ Use the custom hook inside this component
  const [isOn, toggle] = useToggle();

  return (
    /* your toggle function for the onClick method */
    <button
      data-testid="toggle-button"
      // onClick={() => {
      //   if (value == "OFF") {
      //     setValue("ON");
      //   } else {
      //     setValue("OFF");
      //   }
      //   setValue("Suresh");
      // }}
      onClick={() => {
        toggle();
      }}
    >
      {isOn ? "ON" : "OFF"}

      {/* Render "ON" or "OFF" based on state */}
    </button>
  );
}
