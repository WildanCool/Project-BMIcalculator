// inputHal.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputHal() {
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!berat || !tinggi) {
      alert("Mohon isi berat dan tinggi badan.");
      return;
    }

    navigate("/output", {
      state: {
        berat: parseFloat(berat),
        tinggi: parseFloat(tinggi),
      },
    });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Input Berat dan Tinggi Badan</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Berat Badan (kg): </label>
          <input
            type="number"
            value={berat}
            onChange={(e) => setBerat(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tinggi Badan (cm): </label>
          <input
            type="number"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
            required
          />
        </div>
        <button type="submit">Hitung BMI</button>
      </form>
    </div>
  );
}

export default InputHal;
