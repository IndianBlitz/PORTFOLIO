
import { useInView } from "react-intersection-observer";
import { myName } from "../../utils/commonDetails";

import "./workpage.css";

// document.title=`Work | ${myName}`;



const Workpage = function () {
  const [section1Ref, section1View] = useInView({
    threshold: 0.4,
  });

  const [section2Ref, section2View] = useInView({
    threshold: 0.4,
  });

  const [section3Ref, section3View] = useInView({
    threshold: 0.4,
  });

  const [section4Ref, section4View] = useInView({
    threshold: 0.4,
  });

  return (
    <>
      {section1View ? (
        <section className="work_first" ref={section1Ref}></section>
      ) : (
        <section className="work_first"></section>
      )}

      {section2View ? (
        <section className="work_project1" ref={section2Ref}></section>
      ) : (
        <section className="work_project1"></section>
      )}

      {section3View ? (
        <section className="work_project2" ref={section3Ref}></section>
      ) : (
        <section className="work_project2"></section>
      )}

      {section4View ? (
        <section className="work_project3" ref={section4Ref}></section>
      ) : (
        <section className="work_project3"></section>
      )}
    </>
  );
};

export default Workpage;
