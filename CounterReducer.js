//state-count:0
//action-increment,decrement,reset
//reducer
//store

//const Declared
const {createStore}=require('redux')
const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';
const RESET='RESET';
const INCREMENT_COUNTER_BY_VALUE='INCREMENT_COUNTER_BY_VALUE';
const ADD_USER='ADD_USER';


const counterInitialState={
 count:0,
 users:['Rifat']
}

//actions
const Add_UserActionType=(user)=>{
    return{
        type:ADD_USER,
        payload:user
    }
}
const IncrementActionType=()=>
{
    return{
        type:INCREMENT
    }
}

const DecremwntActionType=()=>{
    return{
        type:DECREMENT
    }
}

const ResetActionType=()=>{
    return{
        type:RESET
    }
}
const IncrementCounterByValue=(value)=>{
    return{
        type:INCREMENT_COUNTER_BY_VALUE,
        payload:value
    }
}

const CounterReducer=(state=counterInitialState,action)=>{
    switch(action.type){
        case INCREMENT_COUNTER_BY_VALUE:
            return{
               count:state.count+action.payload
            }
            break;
        case INCREMENT:
            return{
                count:state.count+1
            }
            break;
        case DECREMENT:
            return{
                count:state.count-1
            }
            break;
        case  RESET:
            return{
                count:0
            }
        break;
        default:return state;
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
//create a store
const redux_Store=createStore(CounterReducer);
const redux_store2=createStore(AddUserReducer);
//subcribe function calling
redux_Store.subscribe(()=>
{console.log(redux_Store.getState())
})
redux_store2.subscribe(()=>{
    console.log(redux_store2.getState())
})
redux_Store.dispatch(IncrementActionType());
redux_Store.dispatch(IncrementActionType());
redux_Store.dispatch(IncrementActionType());
redux_Store.dispatch(IncrementActionType());
redux_Store.dispatch(ResetActionType())
redux_Store.dispatch(DecremwntActionType());
redux_Store.dispatch(IncrementCounterByValue(5));
redux_Store.dispatch(IncrementCounterByValue(5));
redux_Store.dispatch(IncrementActionType(6));



