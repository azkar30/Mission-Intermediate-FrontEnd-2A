import NavbarNavs from "../Components/NavbarNav";
import NavbarNavMobiles from "../Components/NavbarNavMobile";
import HeroSections from "../Section/HeroSection";
import VideoListSections from "../Section/VideoListSection";
import FooterPages from "./FooterPage";
import HeroSectionMobiles from "../Section/HeroSectionMobile";
import VideoListSectionMobiles from "../Section/VideoListMobileSection";
import FooterMobilePages from "./FooterMobilePage";
import { useMediaQuery } from "react-responsive";

const HomePages = () => {
  const isDekstop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <>
      {isDekstop && <NavbarNavs />}
      {isDekstop && <HeroSections />}
      {isDekstop && <VideoListSections />}
      {isDekstop && <FooterPages />}
      {isTabletOrMobile && <NavbarNavMobiles />}
      {isTabletOrMobile && <HeroSectionMobiles />}
      {isTabletOrMobile && <VideoListSectionMobiles />}
      {isTabletOrMobile && <FooterMobilePages />}
    </>
  );
};

export default HomePages;
