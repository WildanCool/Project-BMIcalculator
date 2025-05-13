// outputHal.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OutputHal() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    navigate("/");
    return null;
  }

  const { berat, tinggi } = location.state;
  const tinggiMeter = tinggi / 100;
  const bmi = (berat / (tinggiMeter * tinggiMeter)).toFixed(2);

  let kategori = "";
  if (bmi < 18.5) {
    kategori = "Kurus";
  } else if (bmi >= 18.5 && bmi < 25) {
    kategori = "Normal/Ideal";
  } else if (bmi >= 25 && bmi < 30) {
    kategori = "Gemuk";
  } else {
    kategori = "Obesitas";
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Hasil BMI</h2>
      <p><strong>Berat:</strong> {berat} kg</p>
      <p><strong>Tinggi:</strong> {tinggi} cm</p>
      <p><strong>BMI:</strong> {bmi}</p>
      <p><strong>Kategori:</strong> {kategori}</p>
      <button onClick={() => navigate("/")}>Hitung Ulang</button>
    </div>
  );
}

export default OutputHal;
