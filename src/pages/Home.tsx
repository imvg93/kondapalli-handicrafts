import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { FeaturedCollection } from "../components/FeaturedCollection";
import { Process } from "../components/Process";
import { Heritage } from "../components/Heritage";
import { ArtisanSpotlight } from "../components/ArtisanSpotlight";
import { Commitments } from "../components/Commitments";
import { Press } from "../components/Press";
import { Testimonials } from "../components/Testimonials";
import { Newsletter } from "../components/Newsletter";

export default function Home() {
  return (
    <main className="flex-grow pt-20 pb-12 px-4 sm:px-6 md:px-10 max-w-screen-2xl mx-auto w-full flex flex-col gap-10 md:gap-14">
      <Hero />
      <Stats />
      <FeaturedCollection />
      <Process />
      <Heritage />
      <ArtisanSpotlight />
      <Commitments />
      <Press />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
