import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Let's Talk</h2>
      <p>Contact form or contact information here.</p>
      {/* Implement contact form or info */}
    </ContactContainer>
  );
};

export default Contact;