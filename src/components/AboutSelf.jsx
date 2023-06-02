
import classes from './AboutSelf.module.css';
import SelfImage from '../assets/bamya2ndLot.jpg';
const AboutSelf = () => {
    const Info = [
        {
            image: SelfImage,
        }
    ]
  return (
    <>
        <div className={classes.text}>
          <h1>
            What About Me ?!
          </h1>
          <hr className={classes.horLine}/>
        </div>
        <div className={classes.wrapper}>
        {Info.map((info) => {
          return (
            
              <div className={classes.languageContainer}>
                  <img src={info.image} alt="" className={classes.items} />
               
              </div>
            
          );
        })}
      </div>
      <div className={classes.introText}>
        <h1 className={classes.nameText}>
            <i>"ROSHAN DALAMI"</i>
        </h1>
        <p className={classes.infoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iure blanditiis illum iste dolores dicta culpa qui debitis repellat provident sapiente cumque nostrum cum, itaque nihil modi? Placeat, minima vero.</p>
      </div>
    </>
  )
}

export default AboutSelf