import React from 'react';
const images = [
  {
    id: 1,
    imgSrc: '/assets/desktop/image-woman-in-videocall.jpg',
  },
  {
    id: 2,
    imgSrc: '/assets/desktop/image-women-videochatting.jpg',
  },
  {
    id: 3,
    imgSrc: '/assets/desktop/image-men-in-meeting.jpg',
  },
  {
    id: 4,
    imgSrc: '/assets/desktop/image-man-texting.jpg',
  },
];
const Feature_1 = () => {
  return (
    <section className="padding-sm feature margin-bottom-lg">
      <div className="flex-row margin-bottom-sm">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.imgSrc}
            className="feature_img"
            alt=""
          />
        ))}
      </div>
      <div className='container flex-col-center'>
        <h3 className='uppercase'>Built for modern use</h3>
        <h2>Smarter meetings, all in one place</h2>
        <p className='paragraph'>

          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </section>
  );
};

export default Feature_1;
