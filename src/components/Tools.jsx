import { Tooltip } from "@mui/material";
import VSCode from "../assets/vsCode.svg";
import StackOverFlow from "../assets/stackOverflow.svg";
import GitHub from "../assets/gitHubNew.svg";

import GitBash from "../assets/gitBash.svg";
import classes from "./Tools.module.css";
const Tools = () => {
  const ToolsIcons = [
    {
      image: VSCode,
      title: "Visual Studio Code",
    },
    {
      image: StackOverFlow,
      title: "Stack Over Flow",
    },
    {
      image: GitBash,
      title: "Git Bash",
    },
    {
      image: GitHub,
      title: "GitHub",
    },
  ];
  return (
    <>
      <div className={classes.text}>
        <h1>Tools</h1>
        <hr className={classes.horLine} />
      </div>
      <div className={classes.wrapper}>
        {ToolsIcons.map((icon) => {
          return (
            <div className={classes.languageContainer}>
              <Tooltip
                arrow={true}
                title={icon.title}
                className={classes.tooltip}>
                <img src={icon.image} alt="" className={classes.items} />
              </Tooltip>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tools;
