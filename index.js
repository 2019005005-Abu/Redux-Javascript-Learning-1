
const {createStore}=require('redux')



const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';

//State
const InitialcounterState={
    count:0,
   
}
const InitialUserState={
  users:[
    {
     name:"Abu Al Shahriar Rifat",
     System_Id:2019005005
    }
  ]
}
//Action
//INCREMENT_COUNTER
//DECREMENT_COUNTER
const  incrementCounterAction=()=>{
    return{
        type:INCREMENT
    }
}


const decrementCounterAction=()=>{
    return{
        type:DECREMENT
    }
}


const AddUser=()=>{
    return{
        type:ADD_USER,
        payload:{Profession:"Software Enginner"}
    }
}

//create a reducer for counter
const Counter_reducer=(state=InitialcounterState,action)=>{
 switch(action.type){
    case INCREMENT:
        return  {
            count:state.count+1
        }
        break;
    case DECREMENT:
        return{
            count:state.count-1
        }
        break;
    default:return state

 }
}


const store=createStore(Counter_reducer);
store.subscribe(()=>{
    console.log(store.getState())
})

//dispatch action
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());

//1.State
//dispatch a action
//according to the type update the reducer
//Update the Store



