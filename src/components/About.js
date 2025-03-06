import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: #f8f8f8; /* A slightly darker background */
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled.h2`
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutTitle>About BuildNoble</AboutTitle>
      <AboutContent>
        <AboutText>
          At BuildNoble, we're passionate about crafting high-quality software solutions that solve real-world problems. We specialise in developing custom web applications, mobile apps, and desktop applications tailored to meet the unique needs of our clients.
        </AboutText>
        <AboutText>
          Our team of experienced developers is dedicated to delivering innovative, reliable, and scalable software. We believe in building strong relationships with our clients based on trust, transparency, and collaboration.
        </AboutText>
        <AboutText>
          Whether you're a startup looking to launch your first product or an established business seeking to improve your digital presence, we're here to help you achieve your goals.
        </AboutText>
        {/* You can add more paragraphs or even team photos here */}
      </AboutContent>
    </AboutContainer>
  );
};

export default About;