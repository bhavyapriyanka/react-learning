import { useState, useEffect } from "react";

function ChipsInput() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  // Load chips from localStorage once
  useEffect(() => {
    const storedChips = JSON.parse(localStorage.getItem("chips"));
    if (storedChips) {
      setItems(storedChips);
    }
  }, []);

  // Save chips to localStorage whenever items change
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("chips", JSON.stringify(items));
    } else {
      localStorage.removeItem("chips");
    }
  }, [items]);

  const addChip = () => {
    if (value.trim() === "") return;
    setItems((prev) => [...prev, value.trim()]);
    setValue("");
  };

  const removeChip = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="main-container">
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press Enter"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addChip();
          }
        }}
      />
      <div className="Chips">
        {items.map((item, index) => (
          <p key={index} data-testid="chip">
            {item}{" "}
            <button className="Cross" onClick={() => removeChip(index)}>
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
