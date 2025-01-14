/* eslint-disable react/prop-types */
import { useState } from "react";

const InputComponent = ({
  labelContent,
  inputType,
  inputID,
  inputName,
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor={inputID} className="text-base">
        {labelContent} <span className="text-red-500">*</span>
      </label>
      <input
        type={inputType}
        id={inputID}
        name={inputName}
        value={value}
        onChange={onChange}
        className="px-5 py-3 bg-white border-2 outline-none outline-white rounded-xl"
      />
    </div>
  );
};

// Login Page
const LoginPages = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      setMessage("Login successful!");
      localStorage.setItem("authToken", btoa(`${user.email}:${user.password}`));
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <section className="flex items-center justify-center h-[80vh]">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-2 p-12 bg-white rounded-xl"
      >
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-semibold text-black">Masuk ke Akun</h3>
          <p>Yuk, lanjutin belajarmu di videobelajar</p>
        </div>
        <div className="flex flex-col w-[450px] gap-5">
          <InputComponent
            labelContent="E-mail"
            inputType="email"
            inputName="email"
            inputID="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <InputComponent
            labelContent="Kata Sandi"
            inputType="password"
            inputName="password"
            inputID="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <a
            href="#"
            className="self-center px-5 font-semibold hover:underline"
          >
            Lupa Password?
          </a>
          <div className="flex flex-col w-full gap-2">
            <button
              type="submit"
              className="px-5 py-2 font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl"
            >
              Masuk
            </button>
            <a
              href="/register"
              className="px-5 py-2 font-semibold text-center text-green-500 bg-green-100 hover:bg-green-200 rounded-xl"
            >
              Daftar
            </a>
          </div>
        </div>
        {message && (
          <p
            className={`text-center ${
              message !== "Login successful!"
                ? `text-red-500 `
                : `text-green-500`
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </section>
  );
};

export default LoginPages;
