import classes from "./AboutSelf.module.css";
import SelfImage from "../assets/bamya2ndLot.jpg";
const AboutSelf = () => {
  const Info = [
    {
      image: SelfImage,
      id: 1,
    },
  ];
  return (
    <>
      <div className={classes.text}>
        <h1>What About Me ?!</h1>
        <hr className={classes.horLine} />
      </div>
      <div className={classes.wrapper}>
        {Info.map((info) => {
          return (
            <div className={classes.languageContainer} key={info.id}>
              <img src={info.image} alt="" className={classes.items} />
            </div>
          );
        })}
      </div>
      <div className={classes.introText}>
        <h1 className={classes.nameText}>
          <i> "ROSHAN DALAMI" </i>
        </h1>
        <p className={classes.infoText}>
        Tech Enthusiast. Just Completed B.E Computer Science and Engineering. Passionate Web Developer. Currently exploring different technologies. Learning How to built world a better place with Code 
        </p>
      </div>
    </>
  );
};

export default AboutSelf;
