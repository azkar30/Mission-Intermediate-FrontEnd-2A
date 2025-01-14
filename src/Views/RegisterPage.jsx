/* eslint-disable react/prop-types */
import { useState } from "react";

const InputComponent = ({
  labelContent,
  inputType,
  inputID,
  inputName,
  value,
  onChange,
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

const RegisterPages = () => {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const { namaLengkap, email, password, passwordConfirm } = formData;

    if (!namaLengkap || !email || !password || !passwordConfirm) {
      setMessage("Semua field wajib diisi!");
      return;
    }

    if (password !== passwordConfirm) {
      setMessage("Kata sandi tidak cocok!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some((user) => user.email === email)) {
      setMessage("Email sudah terdaftar!");
      return;
    }

    users.push({ namaLengkap, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("Pendaftaran berhasil! Silakan masuk.");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <section className="flex items-center justify-center h-[80vh]">
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-2 p-12 bg-white rounded-xl"
      >
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-3xl font-semibold text-black">
            Pendaftaran Akun
          </h3>
          <p>Yuk, daftarkan akunmu sekarang juga!</p>
        </div>
        <div className="flex flex-col w-[450px] gap-5">
          <InputComponent
            labelContent="Nama Lengkap"
            inputType="text"
            inputName="namaLengkap"
            inputID="namaLengkap"
            value={formData.namaLengkap}
            onChange={handleInputChange}
          />
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
          <InputComponent
            labelContent="Konfirmasi Kata Sandi"
            inputType="password"
            inputName="passwordConfirm"
            inputID="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
          />
          <div className="flex flex-col w-full gap-2">
            <button
              type="submit"
              className="px-5 py-2 font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl"
            >
              Daftar
            </button>
            <a
              href="/login"
              className="px-5 py-2 font-semibold text-center text-green-500 bg-green-100 hover:bg-green-200 rounded-xl"
            >
              Masuk
            </a>
          </div>
        </div>
        {message && (
          <p
            className={`text-center ${
              message !== "Pendaftaran berhasil! Silakan masuk."
                ? `text-red-500`
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

export default RegisterPages;
