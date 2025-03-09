import React from "react";
import { Button } from "@ibrahimstudio/button";
import Page from "../components/frames/page";
import Section, { SectionHead } from "../components/frames/section";
import Image from "../components/contents/image";
import CountCard from "../components/cards/count-card";
import FeatureCard from "../components/cards/feature-card";
import NewsCard from "../components/cards/news-card";
import hrocss from "./styles/hero.module.css";
import abtcss from "./styles/about.module.css";
import ftrcss from "./styles/feature.module.css";
import nwscss from "./styles/news.module.css";

const HomePage = () => {
  return (
    <Page>
      <Section>
        <header className={hrocss.heroHead}>
          <h1 className={hrocss.heroTitle}>Lorem ipsum dolor sit amet.</h1>
          <div className={hrocss.heroContent}>
            <p className={hrocss.heroDesc}>Aenean ut lectus dui. Nullam vulputate commodo euismod. In sodales imperdiet nisl vel scelerisque. Duis venenatis fermentum lacinia. Quisque in porta dui, vel dictum odio.</p>
            <Button buttonText="Explore More" endContent={<Image width="var(--pixel-25)" height="auto" src="/svg/arrow-downright.svg" />} />
          </div>
        </header>
        <section className={hrocss.heroBody}>
          <Image className={hrocss.heroVideoIcon} alt="" src="/img/img-01.jpg" />
        </section>
      </Section>
      <Section>
        <SectionHead title="About Us" desc="Phasellus ac tellus non neque pellentesque laoreet. Aenean sit amet elit sit amet sem ornare blandit. Quisque in augue id ligula auctor mattis at at diam." />
        <section className={abtcss.aboutCount}>
          <CountCard title="140K+" desc="Individual & Organization" />
          <CountCard title="85K+" desc="Partners & Network in Indonesia" />
          <CountCard title="40K+" desc="Regularly Program Participants" />
        </section>
        <section className={abtcss.aboutContent}>
          <Image className={abtcss.contentImageIcon} alt="" src="/img/img-02.jpg" />
          <aside className={abtcss.contentAside}>
            <Image className={abtcss.asideImageIcon} alt="" src="/img/img-03.jpg" />
            <p className={abtcss.asideDesc}>Sed at rutrum nisl. Quisque tempus, arcu vel molestie aliquam, augue enim tempor odio, eu malesuada tortor lacus quis nisi.</p>
          </aside>
        </section>
        <Button buttonText="See Discography" endContent={<Image style={{ transform: "scaleY(-1)", width: "var(--pixel-25)", height: "var(--pixel-25)" }} src="/svg/arrow-downright.svg" />} />
      </Section>
      <Section>
        <SectionHead title="What we have?" desc="Integer ut mollis sapien. Duis pellentesque leo pretium pretium egestas. Pellentesque a luctus mi, sit amet ornare erat. Etiam commodo pharetra accumsan. Nunc cursus massa leo, et tempus massa feugiat eu." />
        <section className={ftrcss.featureGrid}>
          <FeatureCard icon="/svg/stack.svg" title="Fusce nunc quam, posuere in ornare nec" desc="Phasellus eget mauris nec nibh consequat congue nec quis dolor. Nulla ante felis, rutrum id dignissim in, aliquam a tortor. Cras elementum neque sed orci egestas viverra." />
          <FeatureCard icon="/svg/blink.svg" title="Donec euismod orci neque" desc="In dictum at lacus sed faucibus. Suspendisse ligula lectus, tempor nec semper et, blandit id dolor. Donec vel velit sem. Quisque in condimentum risus." />
          <FeatureCard icon="/svg/location.svg" title="In maximus dictum pellentesque" desc="Sed at consequat nisl. Aliquam sit amet turpis nec mauris tempus maximus. Morbi turpis ipsum, commodo et dolor vel, molestie malesuada tortor." />
          <FeatureCard icon="/svg/gift.svg" title="Fusce vulputate pulvinar enim vel volutpat" desc="Aliquam erat volutpat. Maecenas placerat lorem eget purus semper maximus. Quisque placerat faucibus dapibus. In ac justo sed ipsum elementum dictum." />
        </section>
      </Section>
      <Section>
        <SectionHead sectionTitle="Stay Updated with Latest News" sectionDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut lectus dui. Nullam vulputate commodo euismod. In sodales imperdiet nisl vel scelerisque." />
        <section className={nwscss.newsScroll}>
          <NewsCard image="/img/img-04.jpg" category="HOT NEWS" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." desc="Aenean ut lectus dui. Nullam vulputate commodo euismod. In sodales imperdiet nisl vel scelerisque. Duis venenatis fermentum lacinia." />
          <NewsCard image="/img/img-05.jpg" category="LATEST NEWS" title="Quisque in porta dui, vel dictum odio." desc="Phasellus ac tellus non neque pellentesque laoreet. Aenean sit amet elit sit amet sem ornare blandit." />
          <NewsCard image="/img/img-06.jpg" category="POPULAR NEWS" title="Quisque in augue id ligula auctor mattis at at diam. Sed at rutrum nisl." desc="Quisque tempus, arcu vel molestie aliquam, augue enim tempor odio, eu malesuada tortor lacus quis nisi." />
          <NewsCard image="/img/img-07.jpg" category="RECOMMENDED" title="Integer ut mollis sapien. Duis pellentesque leo pretium pretium egestas." desc="Pellentesque a luctus mi, sit amet ornare erat. Etiam commodo pharetra accumsan. Nunc cursus massa leo, et tempus massa feugiat eu." />
        </section>
        <Button buttonText="See All News" endContent={<Image style={{ transform: "scaleY(-1)", width: "var(--pixel-25)", height: "var(--pixel-25)" }} src="/svg/arrow-downright.svg" />} />
      </Section>
    </Page>
  );
};

export default HomePage;
