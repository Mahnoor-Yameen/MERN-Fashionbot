export const AccountReducer=(account_state,action)=>{
    switch (action.type) {
        case "LOGIN_USER":
            return {...account_state, person:action.person}  
            
        case "LOGOUT":
            return{...account_state, person:undefined}


        
        
      

        
        default:
            return account_state;
    }
}