import React from "react";
import Banner from "../components/banner/Banner";
import AboutMe from "../components/aboutMe/AboutMe";
import SpecializeIn from "../components/specializeIn/SpecializeIn";
import ConcernsITreat from "../components/concernsITreat/ConcernsITreat";
import WorkExperience from "../components/workExperience/WorkExperience";
import Reviews from "../components/reviews/Reviews";
import BookAnAppointment from "../components/bookAnAppointment/BookAnAppointment";

export const Home = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto mt-10">
        <div className="md:grid grid-cols-2 gap-5">
          <div>
            <AboutMe />
            <SpecializeIn />
            <ConcernsITreat />
            <WorkExperience />
            <Reviews />
          </div>
          <div>
            <BookAnAppointment />
          </div>
        </div>
      </div>
    </>
  );
};
