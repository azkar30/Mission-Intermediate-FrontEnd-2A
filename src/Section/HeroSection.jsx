const HeroSections = () => {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="bg-hero-pattern w-[80%] h-[500px] bg-cover object-center flex justify-center items-center flex-col rounded-xl mt-20">
          <h1 className="text-6xl font-bold text-white w-[80%] text-center">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p className="w-[60%] text-center text-white">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <button className="px-6 py-3 mt-12 text-xl font-bold text-white bg-green-500 rounded-xl drop-shadow-xl hover:bg-green-600">
            Temukan Video Course untuk Dipelajari!
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSections;
