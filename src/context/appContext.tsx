import React, { JSX } from 'react'
import { userList } from '../utils/users'

const AppContext = React.createContext({userList})

const AppProvider:React.FC<{children:JSX.Element}> = props =>{
    return (
        <AppContext.Provider value={{userList}}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext , AppProvider }



