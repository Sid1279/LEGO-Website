import React from 'react'
import "./brand.css"
import { mindstorms, rebrickable, lego, ninjago, bricklink, } from './imports';

const 
Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
    <div className='img'>
      <img src={ninjago} alt = "" width = "200" height = "50"/>
    </div>
    <div></div>
    <div className='img'>
      <img src={mindstorms} alt = "" width = "200" height = "100"/>
    </div>
    <div></div>
    <div className='img'>
      <img src={bricklink} alt = "" width = "300" height = "50"/>
    </div>
    <div></div>
    <div className='img'>
      <img src={rebrickable} alt = "" width = "300" height = "50"/>
    </div>
  </div>
  ) 
}

export default 
Brand