import {
    Timeline,
    TimelineItem,
    TimelineDot,
    TimelineConnector,
    TimelineSeparator,
    TimelineContent,
  } from "@mui/lab";
  import { Tooltip } from '@mui/material';
  import ReactCertificate from "../assets/reactCertificate.jpg";
  import FrontEndCertificate from '../assets/frontEnd.jpg';
  import DSACertificate from '../assets/dsa.jpg';
  import PythonBasic from '../assets/python_basic_certificate.jpg'
  import classes from "./Certificate.module.css";
  
  
  
  const Certificate = () => {
    return (
      <div>
        <div className={classes.text}>
          <h1>
            Certificates
          </h1>
          <hr className={classes.horLine}/>
        </div>
              <> 
            <Timeline position="alternate">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="secondary" variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <Tooltip title={'Certificate Provided By LearnCodeOnline.in for Completing Basic FrontEnd Course'} className={classes.tooltip} arrow={true}>
                <TimelineContent >
                  {" "}
                  <img src={FrontEndCertificate} className={classes.image} alt="" />
                </TimelineContent>
                </Tooltip>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="secondary" variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <Tooltip title={'Certificate Provided By Udemy.com for Completing DataStructure And Alogrithm Course '} className={classes.tooltip} arrow={true}>
                <TimelineContent >
                  {" "}
                  <img src={DSACertificate} className={classes.image} alt="" />
                </TimelineContent>
                </Tooltip>
                
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="secondary" variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <Tooltip title={'Certificate Provided by Hackerrank.com for completing Python Basic Challange'} className={classes.tooltip} arrow={true}>
                <TimelineContent >
                  {" "}
                  <img src={PythonBasic} className={classes.image} alt="" />
                </TimelineContent>
                </Tooltip>
                
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color="secondary" variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <Tooltip title={'Certificate Provided By Udemy.com for Completing Complete React Course'} className={classes.tooltip} arrow={true}>
                <TimelineContent >
                  {" "}
                  <img src={ReactCertificate} className={classes.image} alt="" />
                </TimelineContent>
                </Tooltip>
              </TimelineItem>
              
            </Timeline>
            </>
         
      </div>
    );
  };
  
  export default Certificate;
  