import { useState } from "react";

export default function useInput (initValue, focusHandle) {
  const [value, setValue] = useState(initValue);
  return {
    input: {
      value,
      onChange: (e) => {
        setValue(e.target.value)
      }
    },
    setValue
  }
} 