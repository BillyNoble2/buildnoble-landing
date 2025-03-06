import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  text-align: center;
  padding: 100px 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
`;

const HeroButton = styled.a`
  background-color: white;
  color: #3498db;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Building Innovative Software Solutions</HeroTitle>
      <HeroSubtitle>Crafting digital experiences that drive your business forward.</HeroSubtitle>
    </HeroContainer>
  );
};

export default Hero;