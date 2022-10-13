import style from "./card.module.css"



const Card =function (props){
    return(
        <div className={style.card}>

            <div className={style.content}>
                    <h1>js</h1>

                    {props.children}
                 
            </div>
           
            
        </div>
    );
}



export default Card;