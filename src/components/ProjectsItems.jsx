import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineConnector,
  TimelineSeparator,
  TimelineContent,
} from "@mui/lab";

import { Link } from "react-router-dom";
import classes from "./ProjectsItems.module.css";

const ProjectsItems = () => {
  return (
    <div>
      <div className={classes.text}>
        <h1>Projects</h1>
        <hr className={classes.horLine} />
      </div>
      <>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className={classes.box}>
                <Link
                  to={
                    "https://github.com/RoshanDalami/Coursezz-Site-to-sell-courses.git"
                  }
                  target="_blank"
                  className={classes.projectTitle}
                >
                  <h1 className={classes.title}> Coursezz-Site-to-sell-courses Public</h1>
                </Link>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className={classes.box}>
                <Link
                  to={"https://github.com/RoshanDalami/NGOAssignment.git"}
                  target="_blank"
                  className={classes.projectTitle}
                >
                  <h1 className={classes.title}>Support Umbrella Nepal Website</h1>
                </Link>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className={classes.box}>
                <Link
                  to={"https://github.com/RoshanDalami/ChuckNorrisJokes.git"}
                  target="_blank"
                  className={classes.projectTitle}
                >
                  <h1 className={classes.title}>Chuck Norris Jokes Generator</h1>
                </Link>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className={classes.box}>
                <Link
                  to={"https://github.com/RoshanDalami/debuginit_cards.git"}
                  target="_blank"
                  className={classes.projectTitle}
                >
                  <h1 className={classes.title}>Customized React Card Components</h1>
                </Link>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" variant="outlined" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {" "}
              <div className={classes.box}>
                <Link
                  to={"https://github.com/RoshanDalami/DBMS-mini-Project.git"}
                  target="_blank"
                  className={classes.projectTitle}
                >
                  <h1 className={classes.title}>
                    Fifa Player Management System. Mini Project
                  </h1>
                </Link>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </>
    </div>
  );
};

export default ProjectsItems;
