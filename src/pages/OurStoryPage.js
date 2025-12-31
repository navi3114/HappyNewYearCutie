import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaLaugh, FaHandHoldingHeart, FaInfinity } from 'react-icons/fa';
import BackgroundImage from '../components/BackgroundImage';
import './OurStoryPage.css';

// Our story timeline page
const OurStoryPage = () => {
  const timelineItems = [
    {
      icon: <FaHeart />,
      title: "Hyderabad Days 💫",
      description: "Asal yela define cheyali bhavyasriii. Baboiiiiii prathi roju happiness aa asala yeppudu sushmitha pg ki vaddama ani exitement asala. ",
      color: "#ff69b4",
    },
    {
      icon: <FaLaugh />,
      title: "Mana Godavalu 😂",
      description: "Asalaaaa nannu trigger cheyadam ante enteyy antha istam niku. 2 hours lo pida poddi is my favv asala. inka unnai kani baguntai",
      color: "#ffa6c9",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Tirupathi Trip 🤍",
      description: "Thanks Thanks Bhavyasriii manchi memorable movements ichhav naku. kani mi tammudi mundi naveen ki girlfriend undi adugu ante enti asala train lo adhi kuda nuv anatam Hmmmmm..! but trip blast blast ayyindi superrrr memory year end lo ",
      color: "#d8b4fe",
    },
    {
      icon: <FaInfinity />,
      title: "Still Choosing You ❤️",
      description: "Every single day, I choose you. Today, tomorrow, and all the days after.",
      color: "#ff85a1",
    },
  ];

  return (
    <div className="story-page">
      <BackgroundImage imageSrc="/images/story.jpg" opacity={0.15} />
      <motion.div
        className="story-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="story-title">Nitho na Beautiful Journey 🫴</h1>
        <p className="story-subtitle">Every chapter is cute and beautiful.</p>
      </motion.div>

      <div className="timeline-container">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-content" style={{ borderColor: item.color }}>
              <div className="timeline-icon" style={{ background: item.color }}>
                {item.icon}
              </div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="story-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="footer-text">And I hope this is just the beginning not the end ani... 🫠</p>
      </motion.div>
    </div>
  );
};

export default OurStoryPage;
