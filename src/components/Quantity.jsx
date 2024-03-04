import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import './Quantity.css';

function Quantity() {
    const [cnt,setCnt]=useState(1);
    function handleUp(){
        let tmpcnt=cnt;
        tmpcnt+=1;
        setCnt(tmpcnt);
    }
    function handleDown(){
        let tmpcnt=cnt;
        tmpcnt-=1;
        setCnt(tmpcnt);
    }
    return (
      <div className="Quantity">
        <div id="counter">
            <div style={{visibility:cnt>=10?'hidden':'visible'}}>0</div>
            {cnt}
        </div>
        <div id="arrows">
        
        <FontAwesomeIcon icon={faAngleUp} style={{color: "#000000"}} onClick={()=>{handleUp()}} />
        <FontAwesomeIcon icon={faAngleDown} style={{color: "#000000"}} onClick={()=>{handleDown()}} />
        </div>
      </div>
    );
  }
  
  export default Quantity;