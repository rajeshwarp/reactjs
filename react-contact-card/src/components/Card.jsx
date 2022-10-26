
import React  from 'react';
import Avatar from './Avatar'
import Detail from './Detail';

function Card(props){
    return <div className="card">
    <div className="top">
      <h2 className ="name" >{props.name}</h2>
      <Avatar src={props.photo} alt={props.alt}/>
     
    </div>
    <div className="bottom">
    <Detail detailInfo={props.phone} />
    <Detail detailInfo={props.email} />
    </div>
  </div>
}

export default Card;

      