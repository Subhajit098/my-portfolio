import React from 'react'
import "./Certificate.css";
import { Tooltip } from "react-tooltip";
// import "./styles.css";

// container->certificates , certificate->cards , button->btn
const Certificate = () => {
  return (
    <div className='all-certificates'>
      <h2>My Certificates</h2>
      <div className='certificates'>
        <div className='certificate'>
          <div className='image-section img-one'></div>
          <div className='content'>
            <h2>Certificate </h2>
            <a data-tooltip-id="my-tooltip"
              data-tooltip-content="Hello world!" className='btn'>Read more</a>
            <Tooltip id="my-tooltip" place='bottom' />
          </div>
        </div>

        <div className='certificate'>
          <div className='image-section img-two'></div>
          <div className='content'>
            <h2>Certificate </h2>
            <a href='#' className='btn'>Read more</a>
          </div>
        </div>

        <div className='certificate'>
          <div className='image-section img-three'></div>
          <div className='content'>
            <h2>Certificate </h2>
            <a href='#' className='btn'>Read more</a>
          </div>
        </div>

        {/* after three */}

        <div className='certificate'>
          <div className='image-section img-three'></div>
          <div className='content'>
            <h2>Certificate </h2>
            <a href='#' className='btn'>Read more</a>
          </div>
        </div>

        <div className='certificate'>
          <div className='image-section img-three'></div>
          <div className='content'>
            <h2>Certificate </h2>
            <a href='#' className='btn'>Read more</a>
          </div>
        </div>

        <div className='certificate'>
          <div className='image-section img-three'></div>
          <div className='content'>
            <h2>Certificate </h2>
            <a href='#' className='btn'>Read more</a>
          </div>
        </div>

        <div className='certificate'>
          <div className='image-section img-three'></div>
          <div className='content'>
            <h2>Certificate </h2>
            <a href='#' className='btn'>Read more</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Certificate