import FooterLogo from "../assets/img/Navbar-Logo.png";

const FooterPages = () => {
  return (
    <>
      <footer className="flex flex-col items-center justify-center mt-24">
        <div className="bg-footer-pattern w-[80%] h-[40vh] rounded-xl flex justify-center items-center text-white flex-col drop-shadow-md">
          <h1 className="text-2xl font-semibold text-yellow-500 uppercase drop-shadow-md">
            Newsletter
          </h1>
          <h2 className="text-6xl font-bold drop-shadow-md">
            Mau Belajar Lebih Banyak?
          </h2>
          <p className="w-[40%] self-center text-center drop-shadow-md font-semibold px-3 py-2 rounded-xl">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>
          <form
            action="#"
            className="flex gap-12 px-5 py-2 bg-white rounded-xl"
          >
            <input
              type="text"
              placeholder="Masukkan Emailmu"
              className="px-5 py-2 text-black bg-transparent outline-none"
            />
            <button className="px-5 py-2 font-semibold bg-yellow-400 rounded-xl">
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex justify-around w-full p-24 mt-24 bg-white item-center">
          {/* Col 1 */}
          <div className="w-[500px]">
            <img src={FooterLogo} alt="Footer Logo" />
            <div className="flex flex-col mt-4">
              <h3 className="text-base font-bold">
                Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
              </h3>
              <p className="font-semibold text-gray-500">
                Jl. Usman Effendi No. 50 Lowokwaru, Malang
              </p>
              <p className="font-semibold text-gray-500">+62-877-7123-1234</p>
            </div>
          </div>
          {/* Col 2 */}
          <div className="flex gap-12">
            <ul className="flex flex-col gap-2">
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
            <ul>
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
            <ul>
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
        <div className="flex items-center justify-center w-full bg-white border-t-2">
          <h2 className="p-8 font-semibold text-gray-500">
            ©2023 Gerobak Sayur All Rights Reserved.
          </h2>
        </div>
      </footer>
    </>
  );
};

export default FooterPages;
