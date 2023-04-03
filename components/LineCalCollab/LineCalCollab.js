/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import Image from "next/image";
import calendarImage from '/public/images/fara.jpg'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AddToCalendar from "../AddToCalendar/AddToCalendar";
import { useSpring, animated } from "react-spring";
import ExperienceLine from "../ExperienceLine/ExperienceLine";
import FeedbacksSection from "../FeedbacksSection/FeedbacksSection";

/* all styles in styles/global.css */
/* this component has many components */



/* framer animation motion */
/* text animation */
const AnimatedH1 = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };
  return (
    <motion.h1 className="text-4xl font-bold  mb- md:mb-0 md:mr-4 ml-4"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.h1>
  );
};



/* react spring animation */
/* for CTA gold to meet you text and add calendar btns animation */
const HangingBox = ({ children }) => {
  const [hovered, setHovered] = useState(false);

  // Define the animation spring
  const spring = useSpring({
    y: hovered ? 0 : 10,
    config: { mass: 1, tension: 100, friction: 10 }
  });

  return (
    <animated.div
      className="add-to-calendar-box"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: spring.y.interpolate(y => `translateY(${y}px)`)
      }}
    >
     

      {children}
    </animated.div>
  );
};







/* for collab cards */
const SquareCards = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const cards = [
    { color: "red", title: "Card 1" },
    { color: "blue", title: "Card 2" },
    { color: "green", title: "Card 3" },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: "-20%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.9, type: "spring", damping: 7, stiffness: 122 },
    },
  };
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardDelay = 0.3;


/* collab cards data, we could also separate this into another file */
  const SquareCardsData = [
    {
      title: "SALESFORCE",
      description: "ADMINISTRATION & DEVELOPMENT",
     
      imgUrl: "https://cdn-icons-png.flaticon.com/512/873/873143.png"
    },
    {
      title: "FRONTEND",
      description: "DESIGN & DEVELOPMENT",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/9163/9163452.png"
    },
    {
      title: "IT",
      description: "GENERAL FOUNDATIONS",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/9573/9573990.png"
    },
    {
      title: "LEADERSHIP",
      description: "PROJECT MANAGEMENT & TEAM-WORK",
      imgUrl: "https://cdn-icons-png.flaticon.com/512/8187/8187421.png"
    },
  ];


  return (
    <div ref={ref} className="areas-of-work-container  my-8">
      
      {/* the 4 cards in collabs section */}
       <div className="collabs-container grid grid-cols-4 md:grid-cols-4 gap-6  m-auto md:self-center" ref={ref}>
        
       <div className="collab-paragraph  md:mr-12 flex flex-col md:flex-row  justify-center">
        <h1 className="areas-of-collab-title   text-5xl font-bold text-gray-800 mb-11 md:mb-0 md:mr-4">Some Areas I Collab</h1>
        <p className="areas-of-work-paragraph text-base text-gray-600  mb-11">
        To excel in my specialties, efficient work-flows, strong communication, and self-discipline are crucial. 
        My unwavering work ethic drives me to deliver outstanding results in web development, Salesforce administration,
         development, management, and leadership. By prioritizing communication, organization, and discipline, 
         I optimize my workflow and consistently exceed expectations.
        </p>
      
      </div>

      <div className="collab-cards-box grid grid-cols-2 md:grid-cols-2    md:self-center">


{/* mapping cards data */}
      {SquareCardsData.map((card, i) => (
        <motion.div
          key={i}
          className="areas-of-work-cards  p-4 rounded-lg shadow-xl"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, delay: i * 0.1 }}
        > 
          <div className="flex items-center justify-center mb-4">
            <Image src={card.imgUrl} width={50} height={50} alt="Icon" />
          </div>
          <h2 className="collab-card-title text-lg font-bold text-black mb-2 text-5xl">{card.title}</h2>
          <p className="collab-card-p text-base text-dark-500 text-black">{card.description}</p>
       
        </motion.div>
      ))}
    </div>

    </div>

    <div className="exp-line">
    <ExperienceLine /> {/* confetti line */}
      <FeedbacksSection />

    </div>


{/* time is gold, video parent container */}
<div className="add-to-cal-parent-items-center">

{/* time is gold box */}
  <HangingBox>
      
  <AnimatedH1 className="add-to-calendar-title">
    <span className='time-white'>Time is</span> <span className='gold-span'>G🕤LD</span><br></br> <span className='time-white'>its gold to meet </span><br></br>
    <span className="you-span text-6xl font-bold gold-span"> Y🕤U! </span>

    <svg enableBackground="new 0 0 512 512" height="155" viewBox="0 0 512 512" width="" xmlns="http://www.w3.org/2000/svg"><g id="_x32__x2C__right_x2C__forward_x2C__arrow_x2C__next"><g><g><path d="m356 76 100 180-100 180h-110l100-180-100-180z" fill="#fbb400"/><path d="m166 76 100 180-100 180h-110l100-180-100-180z" fill="#ed6f6f"/><g fill="#2169ac"><path d="m166 441h-110c-1.771 0-3.411-.938-4.31-2.465-.898-1.526-.921-3.415-.061-4.963l98.651-177.572-98.651-177.572c-.86-1.549-.837-3.437.061-4.964s2.538-2.464 4.31-2.464h110c1.816 0 3.489.984 4.371 2.572l100 180c.839 1.51.839 3.346 0 4.856l-100 180c-.882 1.588-2.555 2.572-4.371 2.572zm-101.502-10h98.561l97.222-175-97.223-175h-98.56l95.873 172.572c.839 1.51.839 3.346 0 4.856z"/><path d="m356 441h-110c-1.771 0-3.411-.938-4.31-2.465-.898-1.526-.921-3.415-.061-4.963l98.651-177.572-98.651-177.572c-.86-1.549-.837-3.437.061-4.964s2.538-2.464 4.31-2.464h110c1.816 0 3.489.984 4.371 2.572l100 180c.839 1.51.839 3.346 0 4.856l-100 180c-.882 1.588-2.555 2.572-4.371 2.572zm-101.503-10h98.561l97.222-175-97.222-175h-98.561l95.873 172.572c.839 1.51.839 3.346 0 4.856z"/></g></g></g></g></svg>
  </AnimatedH1>

 
  </HangingBox>
  
{/* calendar box */}
<div className="calendar-box">
  <video className="cal-video" width={400} height={0} controls>
  <source src="https://www.example.com/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
  </video>

  <div className="calendar-box-title-msg">
    <AnimatedH1 className="">
      
       Let's Talk!  <br></br>

   <span className="meeting-span">Schedule a meeting</span>
   
  </AnimatedH1>
  
  <div className="calendar-socials">
    <a href="#">{/*Instant msging > your linkedin, direct ms, messenger msg url */}
      <svg height="" viewBox="0 0 32 32" width="50" xmlns="http://www.w3.org/2000/svg"><g id="Layer_6"><g><g><path d="m30 2.625h-28c-1.1 0-2 .9-2 2v17c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-17c0-1.1-.9-2-2-2z"/></g><g><path d="m5.75 23.625v5.75l6-5.75z"/></g><g><circle cx="8.25" cy="9.125" fill="#c9c9" r="2.5"/></g><g><circle cx="15.937" cy="9.125" fill="#c9c" r="2.5"/></g><g><circle cx="23.625" cy="9.125" fill="#eee" r="2.5"/></g><g><path d="m5.75 18.333h20.375v1h-20.375z" fill="#fff"/></g><g><path d="m5.75 14.625h20.375v1h-20.375z" fill="#fff"/></g></g></g></svg>
     IM Me
   
    </a>
 
    
  </div>

  
  </div>
  <AddToCalendar />
</div>


</div>
</div>);}
export default SquareCards;
