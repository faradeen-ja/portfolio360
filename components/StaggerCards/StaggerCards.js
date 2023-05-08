/* eslint-disable @next/next/no-img-element */
import React from "react";


const StaggerCards = ({ imgSrc, title }) => {
  return (
    <div className="small-card">
      <img src={imgSrc} alt={title} className="small-card-image" />
      <h3 className="small-card-title">{title}</h3>
    </div>

    
  );
};

export default StaggerCards;

/*   </div><div className="PageLoaderCards">
        <StaggerCards
          imgSrc="/path/to/your/image1.jpg"
          title="Image 1 Title" />
        <StaggerCards
          imgSrc="/path/to/your/image2.jpg"
          title="Image 2 Title" />
        <StaggerCards
          imgSrc="/path/to/your/image3.jpg"
          title="Image 3 Title" />
        <StaggerCards
          imgSrc="/path/to/your/image4.jpg"
          title="Image 4 Title" />
      </div></> */

      /* put this into main page import  */