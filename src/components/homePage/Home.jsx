import React from "react";
import HeaderNav from "./headerNav/HeaderNav";
import VidSec from "./vdSection/VidSec";
import SliderProd from "./PopProdCarro/SliderProd";
import GiftsHerhim from "./giftsHerHimSect/GiftsHerhim";
import ShopbyCateg from "./shopByCategSect/ShopbyCateg";
import PersonSect from "./personalizeItSec/PersonSect";
import EngageBanner from "./EngagmentBanner/EngageBanner";
import DiamondsStroy from "./diamondsStroy/DiamondsStroy";
import RoGeExperience from "./rgExperience/RoGeExperience";
import BfFooter from "./bfFooter/BfFooter";
import FooterSect from "./footer/FooterSect";

const Home = () => {
  return (
    <section>
      <HeaderNav />
      <VidSec />
      <SliderProd />
      <GiftsHerhim />
      <ShopbyCateg />
      <PersonSect />
      <EngageBanner />
      <DiamondsStroy />
      <RoGeExperience />
      <BfFooter el={"Home"} />
      <FooterSect />
    </section>
  );
};

export default Home;
