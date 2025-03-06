import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #e0e0e0;
  padding: 20px;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    margin: 0 10px;
    color: #3498db;
    font-size: 1.5em;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} BuildNoble. All rights reserved.</p>
      <SocialLinks>
        <a href="YOUR_GITHUB_LINK" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="YOUR_LINKEDIN_LINK" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;