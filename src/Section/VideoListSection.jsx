import { useState, useEffect } from "react";
import VideoCardData from "../json/VideoCardData.json";

const VideoListSections = () => {
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
            <h2 className="text-4xl font-bold">
              Koleksi Video Pembelajaran Unggulan
            </h2>
            <p className="font-semibold text-gray-500">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
            <ul className="flex gap-6 mt-12 font-semibold text-gray-500 cursor-pointer">
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
          <div className="container flex flex-wrap items-center justify-center gap-8">
            {data.length > 0 ? (
              data
                .filter((item) => category === "" || item.category === category)
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start w-[30%] p-6 gap-3 bg-white shadow-md rounded-xl"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="object-cover w-full h-56 mb-4 rounded-md"
                    />
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="font-semibold text-gray-500">{item.desc}</p>
                    <div className="flex flex-row gap-4">
                      <img
                        src={item.profile}
                        className="w-[12%] rounded-xl"
                        alt="Profile Image"
                      />
                      <div>
                        <h2 className="font-semibold">{item.userName}</h2>
                        <p>{item.userRole}</p>
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

export default VideoListSections;
