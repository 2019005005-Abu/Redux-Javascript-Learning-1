 const{createStore}=require('redux')
 const ADD_USER='ADD_USER';
const counterInitialState={
    count:0,
    users:['Rifat']
   }
   const Add_UserActionType=(user)=>{
    return{
        type:ADD_USER,
        payload:user
    }
}
const  AddUserReducer=(state=counterInitialState,action)=>{
    switch(action.type){
        case ADD_USER:
            return{
              users:[...state.users,action.payload],
              count:state.count+1

            }
        default:return state;
    }
}

const redux_store2=createStore(AddUserReducer);
redux_store2.subscribe(()=>{
    console.log(redux_store2.getState())
})
redux_store2.dispatch(Add_UserActionType("Kifayet"));
redux_store2.dispatch(Add_UserActionType('Sharda','LPU'))
