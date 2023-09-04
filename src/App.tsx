import React, { useState, useContext, useEffect } from 'react'
import Logo from './assets/party.png'
import './App.css'
import Item from './components/Item'
import { AppContext } from './context/appContext'

const App: React.FC = () => {

  const { userList } = useContext(AppContext)

  const date = new Date()
  // var dateFormat = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  var getMonth = date.toLocaleString("default", { month: "2-digit" });
  var getDay = date.toLocaleString("default", { day: "2-digit" });
  var dateFormat = getMonth + "/" + getDay;

  type userProp = {
    id: Number,
    birthday: String,
    year:String,
    name: String,
    img: String,
  }

  interface IUser{
    isBirthToDay:userProp[]
    users:userProp[]
  }

  const [state,setState] = useState<IUser>({isBirthToDay:[],users:[]})

  const searchBirthToDay = async () =>{
    const userFilter = await userList.filter((item)=>{
      if(item.birthday === getMonth + "/" + getDay){
        return item;
      }
    })
    setState({
      ...state,isBirthToDay:userFilter
    })
  }
  
  useEffect(()=>{
    searchBirthToDay()
  },[])

  return (
    <div className='App'>
      <h3 className='title'>{state.isBirthToDay.length} Birthdays today</h3>
      <ul className="birthday-list">
        {userList.map((item,index) => {
          if(item.birthday === dateFormat){
            return <Item key={index} name={item.name} img={item.img}/>
          }
          // <Item key={index} name={item.name} img={item.img} />
        })}
      </ul>
      <button className='btn-success'>View All</button>
    </div>
  )
}

export default App
