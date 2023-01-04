import  "./RenderProjects.css";
import React from 'react'
import { Carousel } from '@mantine/carousel';
import Img1 from "../assets/bg-other.jpg";
import Img2 from "../assets/main_bg.jpg";
import Img3 from "../assets/github_profile.jpg";

const RenderProjects = () => {
  return (
    <div className="main">
        <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
      loop
      align="start"
    >
      <Carousel.Slide>
        <div>
        <img src={Img1}/>
        <p>hello</p>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
      <div>
        <img src={Img1}/>
        <p>hello</p>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
      <div>
        <img src={Img1}/>
        <p>hello</p>
        </div>
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
    </div>
  );
}

export default RenderProjects


