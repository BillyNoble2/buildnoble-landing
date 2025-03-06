import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectsContainer = styled.div`
  padding: 50px 20px;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const Projects = () => {
  const projectsData = [
    {
      title: 'Project 1',
      description: 'A brief description of Project 1.',
      image: 'https://via.placeholder.com/400',
      link: '/project1',
    },
    {
      title: 'Project 2',
      description: 'A brief description of Project 2.',
      image: 'https://via.placeholder.com/400',
      link: '/project2',
    },
    {
        title: 'Project 3',
        description: 'A brief description of Project 3.',
        image: 'https://via.placeholder.com/400',
        link: '/project2',
      },
    // Add more project data
  ];

  return (
    <ProjectsContainer id="projects">
      <h2>Our Projects</h2>
      <ProjectsGrid>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;