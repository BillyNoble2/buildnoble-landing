import React from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
`;

const Blog = () => {
  return (
    <BlogContainer>
      <h2>Our Blog</h2>
      <p>Coming Soon...</p>
      {/* Implement blog listing here */}
    </BlogContainer>
  );
};

export default Blog;