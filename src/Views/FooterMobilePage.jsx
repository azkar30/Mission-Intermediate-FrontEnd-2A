import FooterLogo from "../assets/img/Navbar-Logo.png";

const FooterMobilePages = () => {
  return (
    <>
      <footer className="flex flex-col items-center justify-center px-4 mt-24">
        {/* Newsletter Section */}
        <div className="bg-footer-pattern w-full sm:w-[80%] h-[50vh] sm:h-[40vh] rounded-xl flex justify-center items-center text-white flex-col drop-shadow-md">
          <h1 className="text-xl font-semibold text-yellow-500 uppercase sm:text-2xl drop-shadow-md">
            Newsletter
          </h1>
          <h2 className="px-4 text-4xl font-bold text-center sm:text-6xl drop-shadow-md">
            Mau Belajar Lebih Banyak?
          </h2>
          <p className="w-[90%] sm:w-[40%] self-center text-center drop-shadow-md font-semibold px-3 py-2 rounded-xl mt-4">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>
          <form
            action="#"
            className="flex flex-col gap-4 px-5 py-2 mt-4 bg-white sm:flex-row sm:gap-12 rounded-xl"
          >
            <input
              type="text"
              placeholder="Masukkan Emailmu"
              className="w-full px-5 py-2 text-black bg-transparent outline-none sm:w-auto"
            />
            <button className="px-6 py-3 font-semibold bg-yellow-400 rounded-xl">
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links Section */}
        <div className="flex flex-col justify-between w-full mt-12 bg-white sm:flex-row sm:p-24 sm:item-center">
          {/* Col 1 */}
          <div className="w-full sm:w-[500px] text-center sm:text-left">
            <img
              src={FooterLogo}
              alt="Footer Logo"
              className="mx-auto sm:mx-0"
            />
            <div className="flex flex-col mt-4">
              <h3 className="text-sm font-bold sm:text-base">
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </h3>
              <p className="font-semibold text-gray-500">
                Jl. Usman Effendi No. 50 Lowokwaru, Malang
              </p>
              <p className="font-semibold text-gray-500">+62-877-7123-1234</p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-wrap justify-center w-full gap-8 mt-8 sm:flex-nowrap sm:gap-12 sm:justify-start sm:mt-0">
            <ul className="flex flex-col gap-2 sm:gap-4">
              <h3 className="font-bold">Kategori</h3>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Digital & Teknologi
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Pemasaran
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Manajemen Bisnis
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Pengembangan Diri
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Desain
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 sm:gap-4">
              <h3 className="font-bold">Perusahaan</h3>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Ketentuan Layanan
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Bantuan
                </a>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 sm:gap-4">
              <h3 className="font-bold">Komunitas</h3>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Tips Sukses
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold text-gray-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Copyright Section */}
        <div className="flex items-center justify-center w-full bg-white border-t-2">
          <h2 className="w-full p-8 font-semibold text-center text-gray-500">
            ©2023 Gerobak Sayur All Rights Reserved.
          </h2>
        </div>
      </footer>
    </>
  );
};

export default FooterMobilePages;
