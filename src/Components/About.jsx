import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  GlobeAltIcon, 
  HeartIcon, 
  StarIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const features = [
    {
      icon: GlobeAltIcon,
      title: 'Worldwide Destinations',
      description: 'Explore over 100+ destinations across the globe with our curated travel packages.',
    },
    {
      icon: HeartIcon,
      title: 'Personalized Experiences',
      description: 'We craft unique journeys tailored to your preferences and travel style.',
    },
    {
      icon: StarIcon,
      title: 'Premium Quality',
      description: 'Experience luxury accommodations and top-tier service on every trip.',
    },
    {
      icon: UserGroupIcon,
      title: 'Expert Team',
      description: 'Our travel experts have years of experience creating unforgettable memories.',
    },
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            About Us
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We are a team of passionate travel enthusiasts dedicated to helping you explore the world.
            Our mission is to provide personalized travel experiences that create lasting memories.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 sm:p-12 text-white"
        >
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Your Journey Starts Here
            </h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90 leading-relaxed">
              With over a decade of experience in the travel industry, we've helped thousands of 
              travelers discover their dream destinations. From exotic beach getaways to adventurous 
              mountain treks, we make every trip extraordinary.
            </p>
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

