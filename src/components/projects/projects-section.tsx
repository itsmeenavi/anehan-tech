import { Box, Container, Typography, useTheme, Modal, IconButton } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import React, { useState } from 'react';

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  isExternal: boolean;
  images?: string[]; // Array of additional images for carousel
}

const projectList: Project[] = [
  {
    name: 'Solarna',
    description: 'A Blockchain NFT Platform for Farmers',
    image: '/projects/solarna.png',
    link: '#',
    technologies: ['Flutter', 'Firebase'],
    isExternal: false,
    images: Array.from({ length: 11 }, (_, i) => `/projects/solarna/${i + 1}.png`),
  },
  {
    name: 'Tutor',
    description: 'A Mobile Application for Finding and Connecting with Tutors',
    image: '/projects/tutor.png',
    link: '#',
    technologies: ['Flutter', 'Firebase'],
    isExternal: false,
  },
  {
    name: 'Climheat',
    description: 'A Mobile Application for Climate and Weather Information',
    image: '/projects/climheat.png',
    link: '#',
    technologies: ['Flutter', 'Firebase'],
    isExternal: false,
  },
  {
    name: 'Agrictrl',
    description: 'A website for a project in Agri-Tech',
    image: '/projects/agrictrl.png',
    link: 'https://agrictrl.online',
    technologies: ['ReactJS', 'Tailwind CSS'],
    isExternal: true,
  },
  {
    name: 'Siklisto',
    description: 'A Mobile Based Electric Bike Charging Station Locator',
    image: '/projects/siklisto.png',
    link: '#',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    isExternal: false,
  },
  {
    name: 'Notepad App',
    description: 'Allows users to create temporary, shareable notes with an expiration time.',
    image: '/projects/notepad.png',
    link: 'https://notepad-app-eight.vercel.app',
    technologies: ['Next.js', 'Tailwind CSS', 'Upstash KV', 'Redis'],
    isExternal: true,
  },
  {
    name: 'World Timezone',
    description: 'See different timezones around the world simultaneously',
    image: '/projects/worldtimezone.png',
    link: 'https://world-timezone-gamma.vercel.app',
    technologies: ['ReactJS', 'Tailwind CSS'],
    isExternal: true,
  },
  {
    name: 'Lyceum of Alabang Performance Evaluation System',
    description: 'Faculty Evaluation System with Sentiment Analysis',
    image: '/projects/loa.png',
    link: 'https://github.com/LOA-Capstone/eval-system-capstone',
    technologies: ['Html', 'Javascript', 'CSS', 'PHP', 'Python', 'Mysql'],
    isExternal: true,
  },
  {
    name: 'Random Bible Verse',
    description: 'Generates random bible verses to display',
    image: '/projects/bible.png',
    link: 'https://random-bible-verse-flame.vercel.app',
    technologies: ['Nextjs'],
    isExternal: true,
  },
  {
    name: 'Random Advice Generator',
    description: 'Generates random advice',
    image: '/projects/advice.png',
    link: 'https://random-advice-app-seven.vercel.app',
    technologies: ['Nextjs'],
    isExternal: true,
  },
  {
    name: 'Basic Photography Gallery',
    description: 'A website made for a project in Basic Photography',
    image: '/projects/basic.png',
    link: 'https://basic-photo-finals.vercel.app/photography',
    technologies: ['ReactJS', 'Tailwind'],
    isExternal: true,
  },
];

export const ProjectsSection: React.FC = () => {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleImageClick = (project: Project) => {
    setSelectedProject(project);
    setSelectedImage(project.image);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject?.images) {
      const nextIndex = (currentImageIndex + 1) % selectedProject.images.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(selectedProject.images[nextIndex]);
    }
  };

  const handlePrevImage = () => {
    if (selectedProject?.images) {
      const prevIndex = (currentImageIndex - 1 + selectedProject.images.length) % selectedProject.images.length;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(selectedProject.images[prevIndex]);
    }
  };

  return (
    <Box id="projects" sx={{ py: 10, background: '#232526' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          textAlign="center" 
          sx={{ 
            fontWeight: 700, 
            mb: 6, 
            color: '#fff',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Our Work
        </Typography>
        <Box 
          display="flex" 
          flexWrap="wrap" 
          gap={theme.spacing(4)} 
          justifyContent="center" 
          alignItems="stretch"
        >
          {projectList.map((project) => (
            <Box
              key={project.name}
              sx={{
                flexGrow: 1,
                flexShrink: 1,
                flexBasis: {
                  xs: '100%',
                  sm: `calc((100% - ${theme.spacing(4)}) / 2)`,
                  md: `calc((100% - 2 * ${theme.spacing(4)}) / 3)`,
                },
                minWidth: '280px',
                maxWidth: '350px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                p: 3,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                },
                textDecoration: 'none',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
                cursor: project.isExternal ? 'pointer' : 'default',
              }}
              component={project.isExternal ? 'a' : 'div'}
              href={project.isExternal ? project.link : undefined}
              target={project.isExternal ? '_blank' : undefined}
              rel={project.isExternal ? 'noopener noreferrer' : undefined}
              tabIndex={0}
              aria-label={project.name}
            >
              {project.image ? (
                <Box
                  onClick={() => !project.isExternal && handleImageClick(project)}
                  sx={{
                    width: '100%',
                    height: 160,
                    position: 'relative',
                    cursor: project.isExternal ? 'pointer' : 'zoom-in',
                    '&:hover': {
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '14px',
                        opacity: project.isExternal ? 0 : 1,
                      }
                    }
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      borderRadius: 8,
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }} 
                  />
                </Box>
              ) : (
                <Box sx={{ 
                  width: '100%', 
                  height: 160, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  background: 'rgba(0, 0, 0, 0.2)', 
                  borderRadius: 2, 
                  mb: 2,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <InsertPhotoIcon sx={{ fontSize: 48, color: 'rgba(255, 255, 255, 0.3)' }} />
                </Box>
              )}
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#fff', 
                  fontWeight: 700, 
                  mt: 1, 
                  mb: 1, 
                  textAlign: 'center'
                }}
              >
                {project.name}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  textAlign: 'center', 
                  mb: 2,
                  lineHeight: 1.6
                }}
              >
                {project.description}
              </Typography>
              <Box 
                display="flex" 
                flexWrap="wrap" 
                gap={1} 
                justifyContent="center" 
                mb={1}
              >
                {project.technologies.map((tech) => (
                  <Box 
                    key={tech} 
                    sx={{ 
                      px: 1.5, 
                      py: 0.5, 
                      borderRadius: 2, 
                      border: '1px solid #00C47C', 
                      color: '#00C47C', 
                      fontSize: 12, 
                      fontWeight: 500,
                      background: 'rgba(0, 196, 124, 0.1)'
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Image Preview Modal with Carousel */}
      <Modal
        open={!!selectedImage}
        onClose={handleCloseModal}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            outline: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {selectedProject?.images && selectedProject.images.length > 0 && currentImageIndex > 0 && (
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: 'absolute',
                left: -60,
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
          )}
          {selectedProject?.images && selectedProject.images.length > 0 && currentImageIndex < selectedProject.images.length - 1 && (
            <IconButton
              onClick={handleNextImage}
              sx={{
                position: 'absolute',
                right: -60,
                color: '#fff',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          )}
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Project Preview"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: 8,
              }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}; 