import style from "./display_skill.module.css";

import ProgressBar from "@ramonak/react-progress-bar";

const progress = (percent,bgcolor) => {
  return <ProgressBar 
  completed={percent} 
  bgColor={bgcolor }
  height={"1.5rem"}
  width = {"75rem"}

  // isLabelVisible={false}
  labelColor={"green"}
  labelSize={"1rem"}
  // animateOnRender={true}
  borderRadius={"0px"}
  baseBgColor={"transparent"}
  />;
};

const Skill = function (props) {
  return (
    <>
      <div className={style.main}>
        <h1 className={style.name}>{props.name}</h1>
        {progress(props.percent,props.background)}
        {/* <h1>{props.percent}</h1> */}
      </div>
    </>
  );
};

export default Skill;
