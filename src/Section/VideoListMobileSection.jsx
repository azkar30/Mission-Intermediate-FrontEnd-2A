import { useState, useEffect } from "react";
import VideoCardData from "../json/VideoCardData.json";

const VideoListSectionMobiles = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const mappedData = VideoCardData.map((item) => ({
      img: item.img,
      category: item.category,
      profile: item.profile,
      userName: item.userName,
      userRole: item.userRole,
      name: item.name,
      desc: item.description,
    }));
    setData(mappedData);
  }, []);

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-8 p-8 text-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col self-start gap-2 p-8">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Koleksi Video Pembelajaran Unggulan
            </h2>
            <p className="font-semibold text-gray-500">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
            <ul className="flex flex-wrap gap-6 mt-8 font-semibold text-gray-500 cursor-pointer">
              <li
                className={`px-5 py-2 ${
                  category === ""
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("")}
              >
                Semua Kelas
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "Pemasaran"
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("Pemasaran")}
              >
                Pemasaran
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "Desain"
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("Desain")}
              >
                Desain
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "Pengembangan Diri"
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("Pengembangan Diri")}
              >
                Pengembangan Diri
              </li>
              <li
                className={`px-5 py-2 ${
                  category === "Bisnis"
                    ? "text-orange-500 border-b-4 border-orange-500"
                    : ""
                }`}
                onClick={() => handleCategoryClick("Bisnis")}
              >
                Bisnis
              </li>
            </ul>
          </div>
          <div className="container grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.length > 0 ? (
              data
                .filter((item) => category === "" || item.category === category)
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start w-full gap-3 p-6 bg-white shadow-md sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-xl"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="object-cover w-full h-48 mb-4 rounded-md sm:h-56"
                    />
                    <h2 className="text-lg font-bold sm:text-xl">
                      {item.name}
                    </h2>
                    <p className="text-sm font-semibold text-gray-500 sm:text-base">
                      {item.desc}
                    </p>
                    <div className="flex flex-row gap-4">
                      <img
                        src={item.profile}
                        className="w-[14%] sm:w-[12%] rounded-xl"
                        alt="Profile Image"
                      />
                      <div>
                        <h2 className="text-sm font-semibold sm:text-base">
                          {item.userName}
                        </h2>
                        <p className="text-xs sm:text-sm">{item.userRole}</p>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-lg text-gray-500">Loading...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoListSectionMobiles;
