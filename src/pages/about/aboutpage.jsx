
import { useInView } from "react-intersection-observer";

import "./aboutpage.css"

const Aboutpage = function(){
    const [section1Ref, section1View] = useInView({
        threshold: 0.4,
      });
    
      const [section2Ref, section2View] = useInView({
        threshold: 0.4,
      });
    
      const [section3Ref, section3View] = useInView({
        threshold: 0.4,
      });
    return(
        <>
    


    {section1View ? (
        <section className="about_first" ref={section1Ref}></section>
      ) : (
        <section className="about_first"></section>
      )}

      {section2View ? (
        <section className="about_second" ref={section2Ref}></section>
      ) : (
        <section className="about_second"></section>
      )}

      {section3View ? (
        <section className="about_third" ref={section3Ref}></section>
      ) : (
        <section className="about_third"></section>
      )}










    

    

    </>

    );
}

export default Aboutpage ;