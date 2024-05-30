import React, { useEffect, useReducer } from 'react'
import { createContext } from 'react'
export const AccountContextVariable=createContext("initial value")   
//loginreducer function banaya tha humny in reducer file, wahan pe export kiya tha yaahn pe import krwa rhy for using that
import { AccountReducer } from './AccountReducer'
import Cookies from 'js-cookie'


//yeh ek object ha.
let data = {
  person: Cookies.get('token') || undefined
};
 
export default function LoginContextProvider({children}) {
//const [account_state, setaccount_state/dispatch] = userReducer(function containing all cases, initial data)
    const [account_state,dispatch]=useReducer(AccountReducer, data)

    useEffect(() => {
      Cookies.set('token', account_state.person)
  }, [account_state.person])



  return (
    <AccountContextVariable.Provider value={{account_state,dispatch}}>
        {children}
    </AccountContextVariable.Provider>
  )
}