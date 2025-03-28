import React from "react";
import Footer from "../components/Footer";
import About from "../components/AboutSection";
import KhanAcademy from "../components/AcademyWorks";
import ChildSection from "../components/ChildSection";
import ExploreSection from "../components/ExploreSection";
import HeroHeading from "../components/HeroHeading";
import JoinSection from "../components/JoinSection";
import LearningSection from "../components/LearningSection";
import SupportersSection from "../components/SupporterSection";
import TestimonialSection from "../components/TestimonialSection";

const Home = ({ searchTerm }) => {
  return (
    <div>
      <HeroHeading />
      {/* Pass searchTerm to ExploreSection */}
      <ExploreSection searchTerm={searchTerm} />
      <KhanAcademy />
      <TestimonialSection />
      <LearningSection />
      <About />
      <ChildSection />
      <JoinSection />
      <SupportersSection />
      <Footer />
    </div>
  );
};

export default Home;
