import React from 'react'
import './About.css'
function About() {
  return (
     <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About CalToCook</h1>
        <p className="about-text">
          CalToCook is a web-based cooking assistant that helps users discover and prepare meals with ease. The platform is currently in development and already includes several useful features aimed at improving the home cooking experience.
        </p>
        <p className="about-text">
          Users can explore a variety of recipes along with key details such as calorie information, serving size, and ratings. These insights help users make informed decisions based on their health goals and preferences.
        </p>
        <p className="about-text">
          Each recipe on CalToCook includes a dynamic ingredient list and step-by-step cooking instructions, allowing users to follow along effortlessly while preparing their meals.
        </p>
        <p className="about-text">
          The platform focuses on simplicity and functionality, with a clean user interface that works well across devices. Whether you're planning your next meal or just exploring new dishes, CalToCook makes the process more organized and enjoyable.
        </p>
        <p className="about-text mt">
          Thank you for using CalToCook. We're continuously working on adding more features to help you cook smarter and eat better.
        </p>
      </div>
    </div>
  )
}

export default About