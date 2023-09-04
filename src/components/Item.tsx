import React from 'react'

const Item:React.FC<{name:String,img:String}> = ({name,img}) => {
  return (
    <li className="item">
        <img src={`${img}`}></img>
        <div className="item-detail">
            <p className='name'>{name}</p>
            <p className='age'>25 years</p>
        </div>
    </li>
  )
}

export default Item

