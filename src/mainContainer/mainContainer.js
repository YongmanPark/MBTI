import React from 'react';
import './mainContainer.css';
function mainContainer(props) {
    return (
    <>        
        <div className='mainContainer'>
          <div className='firstLow'>
            <div className='firstCol'>1</div>
            <div className='firstCol'>2</div>
            <div className='firstCol'>3</div>
            <div className='firstCol'>4</div>
          </div>
          <div className='secondLow'>
            <div className='secondCol'>5</div>
            <div className='secondCol'>6</div>
            <div className='secondCol'>7</div>
            <div className='secondCol'>8</div>
          </div>
          <div className='thirdLow'>
            <div className='thirdCol'>1</div>
            <div className='thirdCol'>2</div>
            <div className='thirdCol'>3</div>
            <div className='thirdCol'>4</div>
          </div>
          <div className='forthLow'>
            <div className='forthCol'>5</div>
            <div className='forthCol'>6</div>
            <div className='forthCol'>7</div>
            <div className='forthCol'>8</div>
          </div>
          
        </div>
     </>
    );
}

export default mainContainer;