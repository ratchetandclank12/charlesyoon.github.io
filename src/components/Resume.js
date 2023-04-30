import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Divider, List, ListItem, ListItemText } from '@mui/material';


function Resume(){

    return (
        <Timeline position="alternate">
        <Typography sx={{ fontSize: 27 }}  gutterBottom>
        Resume
        </Typography>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            EDUCATION
            <br></br>
            <br></br>      
            University of Illinois at Urbana-Champaign 2016- 2020 
            <br></br>
            Bachelor of Science in Computer Science, Math 
            <br></br>
            <br></br>
            Northwestern University 2018 
            <br></br>
            Bachelor of Science in Math 
            <br></br>   
            <br></br>
            <br></br>   
            <br></br>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            WORK EXPERIENCE
            <br></br>
            <br></br>        
            MJ4am
            <br></br>
            Software Engineer Intern
            <br></br>
            <br></br>
            <List>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemText primary="Designed an IOS application to increase accessibility to a wider audience and was the lead designer in the home page" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemText primary="Partnered with local companies that were interested in using the app and discussed design patterns and UX feedback to improve UX experience" />
                </ListItem>
            </List>
            <br></br>
            <br></br>   
            Amazon
            <br></br>
            FullStack Software Engineer
            <br></br>   
                <List>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemText primary="Worked on full stack development of widgets with a Spring Boot platform and used a series of APIs to handle the backend using GraphQL libraries and schemas" />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    <ListItem>
                        <ListItemText primary="Worked on migrating to a REACT application and used AWS to re-architect into a server less environment using Lambdas" />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    <ListItem>
                        <ListItemText primary="Utilized client-side APIs to create investigator tooling to diagnose customer accounts to see whether or not they were fraudulent" />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    <ListItem>
                        <ListItemText primary="Updated visual graphs to consolidate data into a modern dashboard" />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    <ListItem>
                        <ListItemText primary="Decreased latency for web application by using new dependencies and proxies as well as pagination" />
                    </ListItem>
                    <Divider variant="inset" component="li" />

                    <ListItem>
                        <ListItemText primary="Helped lead the design for tech migration to use AWS cloud infrastructure such as AWS Lambda, SQS/SNS, CloudFront on EC2 and ECS based services" />
                    </ListItem>
                </List>
            <br></br>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            ACCOMPLISHMENTS
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
};

export default Resume;