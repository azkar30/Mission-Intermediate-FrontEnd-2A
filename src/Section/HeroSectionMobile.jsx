const HeroSectionMobiles = () => {
  return (
    <>
      <section className="flex items-center justify-center">
        <div className="bg-hero-pattern w-[90%] h-[400px] bg-cover object-center flex justify-center items-center flex-col rounded-xl mt-12">
          <h1 className="text-2xl font-bold text-white w-[90%] text-center">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p className="w-[80%] text-center text-white text-sm">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <button className="px-5 py-3 mt-8 text-sm font-bold text-white bg-green-500 sm:mt-12 rounded-xl drop-shadow-xl hover:bg-green-600">
            Temukan Video Course untuk Dipelajari!
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSectionMobiles;
