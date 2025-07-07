import React from 'react'
import leftImg from '/assets/desktop/image-hero-left.png'
import rightImg from '/assets/desktop/image-hero-right.png'
const Banner = () => {
  return (
    <div className='banner'>
      <img src={leftImg} alt="" />
      <div className="banner__middle">
        <h1>Group Chat for Everyone</h1>
        <p>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
        <div className="banner_btn-group">
            <button className="btn green_btn">
                Download v1.3
            </button>
            <button className="btn purple_btn">
                what is it?
            </button>
        </div>
      </div>
      <img src={rightImg}/>
    </div>
  )
}

export default Banner
