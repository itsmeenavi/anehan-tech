import { Box, Container, Typography, Card, CardContent, Avatar } from '@mui/material';

const members = [
  {
    name: 'Aldrin Abenoja',
    role: 'Project Manager',
    image: '/members/aldrin.jpg',
    description: 'Ensures projects are delivered on time and meet client expectations.'
  },
  {
    name: 'John Angelo Basco',
    role: 'QA Lead',
    image: '/members/angelo.jpg',
    description: 'Leads quality assurance to guarantee bug-free releases.'
  },
  {
    name: 'JM Cabrera',
    role: 'Mobile Developer',
    image: '/members/jm.jpg',
    description: 'Develops high-performance mobile applications.'
  },
  {
    name: 'Ivhan Salazar',
    role: 'Web Developer',
    image: '/members/ivhan.jpg',
    description: 'Builds robust and scalable web applications.'
  },

  {
    name: 'Jobert Mampusti',
    role: 'Frontend Engineer',
    image: '/members/jobert.jpg',
    description: 'Implements modern and responsive user interfaces.'
  },
  {
    name: 'Joerel Belen',
    role: 'Backend Engineer',
    image: '/members/joerel.jpg',
    description: 'Designs and maintains server-side logic and APIs.'
  },
  {
    name: 'Jerome Agarin',
    role: 'UI/UX Designer',
    image: '/members/agarin.png',
    description: 'Specializes in crafting intuitive and beautiful user experiences.'
  },
  {
    name: 'Kimberly Lapuz',
    role: 'Software Tester',
    image: '/members/kimberly.jpg',
    description: 'Ensures software quality through rigorous testing.'
  },
  {
    name: 'Kyla Mae Sorongan',
    role: 'Software Tester',
    image: '/members/kyla.jpg',
    description: 'Focuses on delivering reliable and user-friendly software.'
  },
  {
    name: 'Francisco Theodore',
    role: 'Software Tester',
    image: '/members/francisco.jpg',
    description: 'Dedicated to maintaining high standards in software quality.'
  },
];

const Members = () => {
  return (
    <Box
      id="members"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #232526 0%, #0f2027 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{
            mb: 6,
            color: '#00C47C',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          Our Team
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {members.map((member) => (
            <Box
              key={member.name}
              sx={{
                width: {
                  xs: '100%',
                  sm: 'calc(50% - 16px)',
                  md: 'calc(33.333% - 22px)',
                },
                minWidth: {
                  xs: '100%',
                  sm: '300px',
                },
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid #00C47C',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 196, 124, 0.5)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -2,
                    left: -2,
                    right: -2,
                    bottom: -2,
                    background: 'linear-gradient(45deg, #00C47C, #00C47C, #00C47C, #00C47C)',
                    borderRadius: 4,
                    zIndex: -1,
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                    filter: 'blur(8px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ 
                      width: 120, 
                      height: 120,
                      border: '2px solid #00C47C',
                      boxShadow: '0 4px 20px rgba(0, 196, 124, 0.2)'
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ 
                      color: '#fff', 
                      fontWeight: 700,
                      mb: 1
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ 
                      color: '#00C47C', 
                      mb: 2,
                      fontWeight: 500
                    }}
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.6
                    }}
                  >
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Members;