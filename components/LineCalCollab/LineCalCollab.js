/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "/public/images/logofj.png"
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
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  return (
    <motion.h1
      className="text-4xl font-bold  mb- md:mb-0 md:mr-4 ml-4"
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
    config: { mass: 1, tension: 100, friction: 10 },
  });

  return (
    <animated.div
      className="add-to-calendar-box"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: spring.y.interpolate((y) => `translateY(${y}px)`),
      }}
    >
      {children}
    </animated.div>
  );
};

/* for collab cards */
const SquareCards = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

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

  const cardDelay = 0.4;

  /* collab cards data, we could also separate this into another file */
  const SquareCardsData = [
    {
      title: "SALESFORCE",
      description: "Admin & Development",
      imgUrl: "/images/salesforce.png",
      subIcon: "/images/check-box.png"

    },
    {
      title: "FRONTEND",
      description: "Design & Development",
      imgUrl: "/images/code.png",
      subIcon: "/images/check-box.png",

    },
    {
      title: "IT",
      description: "Support & Security",
      imgUrl: "/images/technical-pc.png",
      subIcon: "/images/check-box.png"

    },
    {
      title: "LEADERSHIP",
      description: "Collaboration & PM",
      imgUrl: "/images/leadership.png",
      subIcon: "/images/check-box.png"

    },
  ];

  return (
    <div ref={ref} className="areas-of-work-container  my-8">
      {/* the 4 cards in collabs section */}
      <div
        className="collabs-container  grid grid-cols-4 md:grid-cols-4 gap-6  m-auto md:self-center"
        ref={ref}
      >
        <div className="collab-paragraph  md:mr-12 flex flex-col md:flex-row  justify-center">
          <h1 className="areas-of-collab-title   text-5xl font-bold text-gray-800 mb-11 md:mb-0 md:mr-4">
            Some Areas I Collab
          </h1>
          <p className="areas-of-work-paragraph text-base text-gray-500  mb-11">
            To excel in my specialties, efficient work-flows, strong
            communication, and self-discipline are crucial. My unwavering work
            ethic drives me to deliver outstanding results in web development,
            Salesforce administration, development, management, and leadership.
            By prioritizing communication, organization, and discipline, I
            optimize my workflow and consistently exceed expectations.
          </p>
          <div className="exp-line">
            <ExperienceLine /> {/* confetti line */}
          </div>
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
              <div className="flex items-center  justify-center mb-4">
                <Image src={card.imgUrl} width={50} height={50} alt="Collaboration Areas" />
              </div>
              <h2 className="collab-card-title text-lg font-bold text-black mb-2 text-5xl">
                {card.title}
              </h2>
              <p className="collab-card-p text-base text-dark-500 text-black">
                {card.description}
              </p>
{/*               <Image src={card.subIcon} width={28} height={28} alt="Getting the job done!" />
 */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* time is gold, video parent container */}
      <div className="add-to-calendar-primary-container">
        <div className="add-to-cal-parent-items-center">
          {/* time is gold box */}
          <div className="text-center add-to-cal-time-is-gold-box">
            <HangingBox>
              <AnimatedH1>

                <span className="time-white">Time is</span>{" "}
                <span className="gold-span">G🕤LD</span>
                <br></br> <span className="time-white">its gold to meet </span>
        
                <span className="you-span text-5xl font-bold gold-span">
                  {" "}
                  Y🕤U!{" "}
                </span>
              </AnimatedH1>
 
            </HangingBox>

            


          </div>

          {/* calendar box */}

          <div className="calendar-box">
            <div className="calendar-box-title-msg">
              <AnimatedH1 className="">
                Let&lsquo;s Talk! <br></br>
                <span className="meeting-span">Schedule a meeting</span>
              </AnimatedH1>
                {/* personal img */}
              <div className="cal-img-box">
                <a href="https://www.linkedin.com/in/faradeen/">
                  <Image
                    src="https://media.licdn.com/dms/image/D5603AQGRTHIbNliotw/profile-displayphoto-shrink_400_400/0/1679771124043?e=1686182400&v=beta&t=5eF2DMOgKMQ4pHWMabW-PhSWZFdI8cOjdXOtcKhy7tI"
                    className="calImage calimgone"
                    height={60}
                    width={60}
                  ></Image>
                </a>
                {/* img for logo */}
                <a href="https://www.linkedin.com/in/faradeen/">
                   <Image
                    src={logo}
                    className="calImage calimgtow"
                    height={60}
                    width={60}
                  ></Image>
                </a>
              </div>
            </div>
            <AddToCalendar />
            
          </div>
  
        </div>
        
      </div>
      <FeedbacksSection />
      
    </div>
  );
};
export default SquareCards;
