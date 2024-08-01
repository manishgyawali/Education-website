import React from "react";
import Homebanner from "../banner/Homebanner";
import LearningOnline from "../learningOnl/learningOnline";
import AllCourse from "../AllCourses/AllCourse";
import Pricing from "../pricing&Packages/pricing";
import Blog from "../Blog/Blog";
import HBanner from "../horizontalbanner/hBanner";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="">
      <Homebanner />
      <div className="w- mt-96  pt-20 mx-auto">
        <LearningOnline />
      </div>
      <HBanner />
      <div className="w-11/12 mt-40 pt-20 grid gap-14 mx-auto">
        <AllCourse />
        <Pricing />
        <Blog />
      </div>
      <div>
      <Carousel 
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={2000}
      infinite={true}
      responsive={responsive}>
  <div className="bg-red-500 p-6 border-2">Item 1</div>
  <div className="bg-green-500 p-6">Item 2</div>
  <div className="bg-yellow-500 p-6">Item 3</div>
  <div className="bg-blue-500 p-6">Item 4</div>
</Carousel>
      </div>
    </div>
  );
};

export default Home;
