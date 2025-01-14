import { useEffect, useState } from "react";
import Avatar from "../assets/img/Avatar.png";
import NavbarLogo from "../assets/img/Navbar-Logo.png";

const NavbarNavs = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (authToken) {
      const [email] = atob(authToken).split(":");
      const user = users.find((user) => user.email === email);
      if (user) setUserName(user.namaLengkap);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setUserName("");
    window.location.reload();
  };

  return (
    <nav className="w-full h-[50px] bg-white flex justify-around items-center py-4">
      <img src={NavbarLogo} alt="Navbar Logo" className="flex" />
      <ul className="flex items-center justify-center gap-4">
        <div className="flex gap-2">
          {userName ? (
            <>
              <span className="flex items-center justify-center font-semibold text-black">
                Hello, {userName}
              </span>
              <img src={Avatar} alt="" />
              <button
                onClick={handleLogout}
                className="px-4 py-1 font-semibold text-white bg-red-500 border-2 border-red-500 rounded-lg"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <a href="/login">
                <button className="px-5 py-2 font-semibold text-white bg-green-500 border-2 border-green-500 rounded-lg">
                  Login
                </button>
              </a>
              <a href="/register">
                <button className="px-5 py-2 font-semibold text-green-500 bg-white border-2 border-green-500 rounded-lg">
                  Register
                </button>
              </a>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default NavbarNavs;
