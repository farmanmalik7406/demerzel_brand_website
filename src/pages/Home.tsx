import { SEO } from "../components/SEO";
import { BrandValues } from "../components/sections/BrandValues";
import { CapabilityGrid } from "../components/sections/CapabilityGrid";
import { ContactCTA } from "../components/sections/ContactCTA";
import { Ecosystem } from "../components/sections/Ecosystem";
import { FieldComingSoon } from "../components/sections/FieldComingSoon";
import { FieldTechnology } from "../components/sections/FieldTechnology";
import { Hero } from "../components/sections/Hero";
import { MissionSection } from "../components/sections/MissionSection";
import { OpticsShowcase } from "../components/sections/OpticsShowcase";
import { ResourcesTeaser } from "../components/sections/ResourcesTeaser";
import { StorySection } from "../components/sections/StorySection";
import { images } from "../lib/assets";

export function Home() {
  return (
    <>
      <SEO description="DEMERZEL Enterprises is a field-technology brand for observation, navigation, monitoring, surveying, security and exploration equipment areas." title="DEMERZEL Enterprises | Technology for the Field" />
      <Hero
        copy="Precision equipment for wildlife, forestry, surveying, security and exploration."
        image={images.hero}
        primary={{ label: "Explore Our Capabilities", to: "/solutions" }}
        secondary={{ label: "Talk to DEMERZEL", to: "/contact" }}
        title="Technology for the field."
      />
      <CapabilityGrid />
      <MissionSection />
      <StorySection />
      <OpticsShowcase />
      <FieldTechnology />
      <FieldComingSoon />
      <BrandValues />
      <Ecosystem />
      <ResourcesTeaser />
      <ContactCTA />
    </>
  );
}
