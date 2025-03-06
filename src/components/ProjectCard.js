import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  margin-bottom: 10px;
`;

const CardLink = styled.a`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-top: 15px;

  &:hover {
    background-color: #2980b9;
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardImage src={project.image} alt={project.title} />
      <CardTitle>{project.title}</CardTitle>
      <p>{project.description}</p>
      <CardLink href={project.link}>Learn More</CardLink>
    </Card>
  );
};

export default ProjectCard;