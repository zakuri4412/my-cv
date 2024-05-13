import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HouseIcon from '@mui/icons-material/House';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CodeIcon from '@mui/icons-material/Code';
import Link from '@mui/material/Link';

function App() {
  const [sidebarTop, setSidebarTop] = useState<number | undefined>(undefined);

  useEffect(() => {
    const sidebarEl = document.querySelector('.sidebar') as HTMLElement;
    if (sidebarEl) {
      const sidebarRect = sidebarEl.getBoundingClientRect();

      setSidebarTop(sidebarRect.top);
    }
  }, []);

  useEffect(() => {
    const isSticky = (e: Event) => {
      const sidebarEl = document.querySelector('.sidebar') as HTMLElement;
      const scrollTop = window.scrollY;
      if (sidebarTop && scrollTop >= sidebarTop - 10) {
        sidebarEl.classList.add('is-sticky');
      } else {
        sidebarEl.classList.remove('is-sticky');
      }
    };

    if (sidebarTop !== undefined) {
      window.addEventListener('scroll', isSticky);
      return () => {
        window.removeEventListener('scroll', isSticky);
      };
    }
  }, [sidebarTop]);
  return (
    <div className="App">
      <Box
        sx={{
          mx: 'auto',
          p: 4,
          m: 10,
          background: '#535353',
        }}
      >
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <Stack spacing={4} className='sidebar'>
          <Box
            sx={{
              mx: 'auto',
              p: 2,
              m: 10,
              background: '#d6d6d6',
              borderRadius: 1,
              fontSize: '1.5rem',
            }}
          >
            <Stack spacing={2} sx={{alignItems: 'center',
                                  justifyContent: 'center',}}>
              <Avatar alt="Cao Dai Thanh" 
                      src="/avatar/avatar2.jpg"  
                      sx={{ height: '180px', width: '180px'
                          }} />
              <Typography variant="h3" color="text.secondary">Software Engineer</Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Stack direction="row" spacing={0.6}>
                    <LocalPhoneIcon/>
                    <Typography variant="body1" color="text.secondary">0913177414 - 0373116713</Typography>
                  </Stack>
                  
                </Grid>
                <Grid item xs={6} >
                <Stack direction="row" spacing={0.6}>
                    <MailIcon/>
                    <Typography variant="body1" color="text.secondary">thanhcdcao231@gmail.com</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                <Stack direction="row" spacing={0.6}>
                    <LinkedInIcon/>
                    <Typography variant="body1" color="text.secondary">linkedin.com/in/cao-thanh-4a7835165</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                <Stack direction="row" spacing={0.6}>
                    <HouseIcon/>
                    <Typography variant="body1" color="text.secondary">Go Vap district, Ho Chi Minh City</Typography>
                  </Stack>
                </Grid>
                
              </Grid>
            </Stack>
          </Box>
              
          <Box
            sx={{
              mx: 'auto',
              p: 2,
              m: 10,
              background: '#d6d6d6',
              borderRadius: 1,
              fontSize: '1.5rem',
            }}
          >
            <Typography variant="h4" color="text.secondary"
      sx={{ letterSpacing: '1.5px', marginLeft: '4px',textDecoration:'underline'  }}>Objective</Typography>
            <Typography variant="body1" color="text.secondary" sx={{alignItems: 'center',
                                  justifyContent: 'center', letterSpacing: '1.5px', marginTop: 1 }}>
              As a recent programmer just graduate. I looking for a change to start my career in software development. I  have a passion about creating innovative for software solutions. I look forward to participating in an inspiring work environment where I can learn and develop my skills under the guidance of professionals. With creativity, progression and teamwork are my strengths, I commited to contributing to the success of the project and going far in mu career
            </Typography>
          </Box>
          
          <Box
            sx={{
              mx: 'auto',
              p: 2,
              m: 10,
              background: '#d6d6d6',
              borderRadius: 1,
              fontSize: '1.5rem',
            }}
          >
            <Typography variant="h4" color="text.secondary"
      sx={{ letterSpacing: '1.5px', marginLeft: '4px',textDecoration:'underline'  }}>Hobby</Typography>
            <Grid container spacing={2} sx={{marginTop: 1}}>
              <Grid item xs={6} >
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}}>
                      <AutoStoriesIcon sx={{height: '30px', width: '30px'}}/>
                      <Typography variant="h5" color="text.secondary">Reading</Typography>
                    </Stack>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}}>
                      <VideogameAssetIcon sx={{height: '30px', width: '30px'}}/>
                      <Typography variant="h5" color="text.secondary">Play Game</Typography>
                    </Stack>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}}>
                      <MusicNoteIcon sx={{height: '30px', width: '30px'}}/>
                      <Typography variant="h5" color="text.secondary">Listen music</Typography>
                    </Stack>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}}>
                      <CodeIcon sx={{height: '30px', width: '30px'}}/>
                      <Typography variant="h5" color="text.secondary">Coding</Typography>
                    </Stack>
                </Box>
              </Grid>
              
              

            </Grid>

          </Box>

          </Stack>  
                
        </Grid>
        <Grid item xs={8}>
        <Box
            sx={{
              mx: 'auto',
              background: '#d6d6d6',
              borderRadius: 1,
              fontSize: '1.5rem',
              p: 4
            }}
          >
            <Stack>
              <Typography variant="h4" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '4px',textDecoration:'underline'  }}>Education</Typography>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontWeight: 'bold', marginTop: 1  }}>FPT University</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '100px' }}>9/2019 - 5/2023</Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px' }}>Software Engineer - Specialization: Embeded System</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '50px' }}>- Graduate: Bachelor with good grades </Typography>
            </Stack>

            <Stack sx={{marginTop: 5}}>
              <Typography variant="h4" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '4px',textDecoration:'underline'  }}>Skills</Typography>
              <Grid container spacing={3} sx={{marginTop: 1}}>
              <Grid item xs={4} >
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="C#" 
                      src="/Images/c-sharp.png"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">C#</Typography>
                    </Stack>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="TypeScript" variant='square'
                      src="/Images/NET_Logo.png"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">ASP.NET</Typography>
                    </Stack>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="Java" 
                      src="/Images/java.png"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">Java</Typography>
                    </Stack>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="C++" 
                      src="/Images/c-.png"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">C/C++</Typography>
                    </Stack>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="Python" 
                      src="/Images/python.png"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">Python</Typography>
                    </Stack>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="HTML" 
                      src="/Images/html-5.png"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">HTML</Typography>
                    </Stack>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="CSS" 
                      src="/Images/css-3.png"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">CSS</Typography>
                    </Stack>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="JavaScript" variant='square'
                      src="/Images/js.png"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">JavaScript</Typography>
                    </Stack>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="TypeScript" variant='square'
                      src="/Images/typescript.png"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">TypeScript</Typography>
                    </Stack>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="TypeScript" variant='square'
                      src="/Images/node-js.png"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">Nodejs</Typography>
                    </Stack>
                </Box>
              </Grid>
              
              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="TypeScript" variant='square'
                      src="/Images/React-icon.png"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">ReactJs</Typography>
                    </Stack>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="TypeScript" variant='square'
                      src="/Images/angularjs.jpg"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">AngularJs</Typography>
                    </Stack>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="TypeScript"
                      src="/Images/git.png"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">Git</Typography>
                    </Stack>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Box sx={{
                  mx: 'auto',
                  background: '#ebebeb ',
                  borderRadius: 1,
                  fontSize: '1.5rem',
                  height: '1.5px', 
                  p: 4,
                  }} display="flex"
                  alignItems="center">
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1}} style={{alignItems:'center'}}>
                    <Avatar alt="TypeScript" variant='square'
                      src="/Images/SQL.jpg"  
                      sx={{ height: '50px', width: '50px'
                          }} />
                      <Typography variant="h5" color="text.secondary">SQL server</Typography>
                    </Stack>
                </Box>
              </Grid>

              
              

            </Grid>
            </Stack>

            <Stack sx={{marginTop: 5}}>
              
              <Typography variant="h4" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '4px',textDecoration:'underline'  }}>Career Summary</Typography>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography variant="h6" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontWeight: 'bold', marginTop: 1  }}>FPT Software, RTWE</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '100px' , marginTop: 1 }}>6/2022 - 5/2023</Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontStyle:'italic', marginTop: 1  }}>Outline</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'}}>- Created a versatile application featuring both web and mobile platforms, designed to monitor and analyze well cavity processes. This innovative tool retrieves and displays crucial data such as depth measurements, soil composition, and rock material analysis. Leveraging advanced data mocking techniques, it seamlessly integrates information from diverse file formats, ensuring comprehensive and accurate results</Typography>
              <Typography variant="h5" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontStyle:'italic', marginTop: 4.5  }}>Key Responsibilities</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px' }}>- Participate in meetings with key developer members of the client side to find solutions to bugs and new functions.</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px' }}>- Use Jenkins to deploy code.</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'  }}>- Use Docker to test deployments in 2 different virtual machines.</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'  }}>- Code for new functions and bug fixes.</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'  }}>- Coding front-end and back-end solutions in various programming languages</Typography>
                    <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'  }}>- Use C# to code new functions for desktop application and gRPC server</Typography>

              <Grid container spacing={2} sx={{marginTop:2}}>
                <Grid item xs={8}>
                  <Typography variant="h6" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontWeight: 'bold', marginTop: 1  }}>FPT Software, Digital Project Management (DPM)</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '100px' , marginTop: 1}}>3/2022 - 5/2022</Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontStyle:'italic', marginTop: 1  }}>Outline</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'}}>- Designed and developed an advanced application streamlining data transmission processes through automation and digitization. Implemented integration with a proprietary Risk Register system, as well as seamless connectivity with third-party platforms to enhance overall functionality and efficiency</Typography>
              <Typography variant="h5" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontStyle:'italic', marginTop: 4.5  }}>Key Responsibilities</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px' }}>- Code and fix bugs as required.</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px' }}>- Engage in organizational frameworks (Scrum) with clients .</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'  }}>- Coding front-end and back-end solutions in various programming languages</Typography>
              

              <Grid container spacing={2} sx={{marginTop:2}}>
                <Grid item xs={8}>
                  <Typography variant="h6" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontWeight: 'bold', marginTop: 1  }}>FPT Software, Integrated Daily Drilling Reports (iDDR)</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '100px', marginTop: 1 }}>5/2021 - 2/2022</Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontStyle:'italic', marginTop: 1  }}>Outline</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'}}>- An application developed to reduce and eliminate manual data entry into the client-side application by Drill Monitoring. This application allows Drill Monitor to import various file formats from Baroid, Cement and Safety Supervisor, review data, and export data to a database with the click of a button. This will save 1-2 hours per day. </Typography>
              <Typography variant="h5" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontStyle:'italic', marginTop: 4.5  }}>Key Responsibilities</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px' }}>- Code and fix bugs as required.</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px' }}>- Write Unit Tests for back-end and front-end .</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'  }}>- Coding front-end and back-end solutions in various programming languages</Typography>
              
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px' }}>- Meeting with customers to better understand requirements  .</Typography>
              
            </Stack>


            <Stack sx={{marginTop: 5}}>
              
              <Typography variant="h4" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '4px',textDecoration:'underline'  }}>Personal Project</Typography>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography variant="h6" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontWeight: 'bold', marginTop: 1  }}>Slaughter control and quarantine process management system of the veterinary department of Dong Nai province</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '100px', marginTop: 1 }}>9/2022 - 12/2022</Typography>
                </Grid>
              </Grid>
              <Typography variant="h5" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontStyle:'italic', marginTop: 1  }}>Outline</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'}}>- An application developed to eliminate manual data entry in documents and sent to stations that can take several hours, the application allows employees from slaughterhouses, quarantines to station managers to easily receive information in no more than half an hour,  help save the time of employees. </Typography>
              <Typography variant="h5" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontStyle:'italic', marginTop: 4.5  }}>Key Responsibilities</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px' }}>- Meet with customers to get specific requests .</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px' }}>- Writing document.</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'  }}>- Design, build systems, design user interactive charts, class charts, database design, sequential chart design.</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'  }}>- Recommunicate customer requests to team members.</Typography>
              <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'  }}>- Coding front-end and back-end solutions in various programming languages</Typography>
                    <Typography variant="body1" color="text.secondary"
                    sx={{ letterSpacing: '1.5px', marginLeft: '20px'  }}>- Fix bugs and refactor code</Typography>

              <Typography variant="h5" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '20px',fontStyle:'italic', marginTop: 2.5  }}>Link Git</Typography>
              <Typography variant="body1" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '20px'  }}>- Backend: <Link href="https://gitlab.com/torinoutacnh/thu_y_v2">https://gitlab.com/torinoutacnh/thu_y_v2</Link></Typography>
              <Typography variant="body1" color="text.secondary"
              sx={{ letterSpacing: '1.5px', marginLeft: '20px'  }}>- Frontend: <Link href="https://gitlab.com/torinoutacnh/thu_y_frontend_v2">https://gitlab.com/torinoutacnh/thu_y_frontend_v2</Link></Typography>
            </Stack>



          
          </Box>
          
        </Grid>
      </Grid>
      </Box>
    </div>
  );
}

export default App;
