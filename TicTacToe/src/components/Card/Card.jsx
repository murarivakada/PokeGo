import React from "react";
import Icon from "../Icon/Icon";
import './Card.css';
function Card({onPlay,Player,index,gameEnd}){
    let icon=<Icon/>
    if(Player==='X'){
        icon=<Icon name={'cross'}/>
    }
    else if(Player==='O'){
        icon=<Icon name={'circle'}/>
    }
    return(
        
        <div className="card" onClick={()=>!gameEnd && Player===" "&&onPlay(index)}>
            {icon}
        </div>
        
    )
}

export default Card;