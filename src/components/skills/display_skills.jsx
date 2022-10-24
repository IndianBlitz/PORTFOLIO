import style from "./display_skill.module.css";

import ProgressBar from "@ramonak/react-progress-bar";
import Card from "./card";

const progress = (percent,bgcolor) => {
  return <ProgressBar 
  completed={percent} 
  bgColor={bgcolor }
  height={"1.5rem"}
  width = {"75rem"}
  maxCompleted={100}
  // maxCompleted={true}
  // isLabelVisible={false}
  labelColor={"green"}
  labelSize={"1rem"}
  transitionDuration={"1.3s"}
  borderRadius={"0px"}
  baseBgColor={"green"}
  />;
};

const Skill = function (props) {
  return (
    <>
   
      <Card>
        <div className={style.name_div}>

          <h1 className={style.name}>{props.name}</h1>


        </div>
       
        {progress(props.percent,props.background)}

        {/* <h1>{props.percent}</h1> */}
      </Card>
   
    </>
  );
};

export default Skill;
