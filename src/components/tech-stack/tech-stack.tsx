import React from 'react';
import type { ReactElement } from 'react';
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaPhp,
  FaReact,
  FaSass,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiDart,
  SiFirebase,
  SiFlutter,
  SiTailwindcss,
  SiFigma,
  SiMysql,
  SiNextdotjs,
} from 'react-icons/si';
import { Box, Container, Typography } from '@mui/material';

interface TechSkill {
  name: string;
  icon: ReactElement;
  category: string;
}

const TechStack: React.FC = () => {
  const skills: TechSkill[] = [
    { name: 'HTML5', icon: <FaHtml5 size={60} color="#E34F26" />, category: 'Frontend' },
    { name: 'CSS3', icon: <FaCss3Alt size={60} color="#1572B6" />, category: 'Frontend' },
    { name: 'JavaScript', icon: <FaJsSquare size={60} color="#F7DF1E" />, category: 'Frontend' },
    { name: 'React', icon: <FaReact size={60} color="#61DAFB" />, category: 'Frontend' },
    { name: 'Next.js', icon: <SiNextdotjs size={60} color="#000000" />, category: 'Frontend' },
    { name: 'Bootstrap', icon: <FaBootstrap size={60} color="#7952B3" />, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={60} color="#38B2AC" />, category: 'Frontend' },
    { name: 'Sass', icon: <FaSass size={60} color="#CC6699" />, category: 'Frontend' },
    { name: 'PHP', icon: <FaPhp size={60} color="#777BB4" />, category: 'Backend' },
    { name: 'MySQL', icon: <SiMysql size={60} color="#4479A1" />, category: 'Database' },
    { name: 'Firebase', icon: <SiFirebase size={60} color="#FFCA28" />, category: 'Database' },
    { name: 'Flutter', icon: <SiFlutter size={60} color="#02569B" />, category: 'Mobile' },
    { name: 'Dart', icon: <SiDart size={60} color="#0175C2" />, category: 'Mobile' },
    { name: 'WordPress', icon: <FaWordpress size={60} color="#21759B" />, category: 'CMS' },
    { name: 'Figma', icon: <SiFigma size={60} color="#F24E1E" />, category: 'Design' },
  ];

  return (
    <Box id="tech-stack" sx={{ py: 10, background: 'linear-gradient(135deg, #232526 0%, #0f2027 100%)' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          textAlign="center" 
          sx={{ 
            fontWeight: 700, 
            mb: 6, 
            color: '#00C47C',
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Tech Stack
        </Typography>
        <Box 
          display="grid" 
          gridTemplateColumns={{
            xs: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
            lg: 'repeat(5, 1fr)'
          }}
          gap={3}
        >
          {skills.map((skill, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                perspective: '1000px',
                height: '200px',
                '&:hover .flip-card-inner': {
                  transform: 'rotateY(180deg)',
                },
              }}
            >
              <Box
                className="flip-card-inner"
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  transition: 'transform 0.6s',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Front of card */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    p: 2,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  {skill.icon}
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      color: '#fff',
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Box>

                {/* Back of card */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0, 196, 124, 0.1)',
                    border: '1px solid rgba(0, 196, 124, 0.2)',
                    borderRadius: 2,
                    p: 2,
                    boxShadow: '0 4px 20px rgba(0, 196, 124, 0.1)',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#00C47C',
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    {skill.category}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TechStack; 