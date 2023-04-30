import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './introPanel.css'
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function IntroPanel(){
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
          •
        </Box>
      );

    const linkedIn = (
        <div>
            <IconButton href="https://www.linkedin.com/in/charles-yoon-62318a1b8/">
                <SvgIcon style={{ width: 50, height: 50, color: 'blue' }}>
                    <LinkedInIcon ></LinkedInIcon>
                </SvgIcon>
            </IconButton>
        </div>
    );

    const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Welcome! 
            </Typography>
            <Typography variant="h5" component="div">
                Char{bull}les
            </Typography>
            <Box className='center-box'>
                <Avatar sx={{ width: 150, height: 150 }} src='https://media.licdn.com/dms/image/D5603AQHcBeDu-aSNJQ/profile-displayphoto-shrink_200_200/0/1680728264513?e=1688601600&v=beta&t=yknUfQO3b2YXqcPxz2u010ZfvZXb4K9aG-Xl19BfG28'></Avatar>
            </Box>
            <Typography sx={{ mb: 2 }} >
              About Me
            </Typography>
            <Typography variant="body2">
              enjoy living and creating
              <br></br>
              below are some of works and resume
              <br />
            </Typography>
          </CardContent>
          <CardActions className='button-container'>
            {linkedIn}
          </CardActions>
        </React.Fragment>
      );

    return (
        <div>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    );
}

export default IntroPanel;