const { createStore,applyMiddleware } = require("redux");
const thunk=require('redux-thunk').default
const axios=require('axios')
//const
const GET_TODOS_REQUEST='GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS='ET_TODOS_SUCCESS';
const GET_TODOS_FAILED='ET_TODOS_FAILED';
const API_URL="https://jsonplaceholder.typicode.com/todos";
//state
const initialTodoState={
  todos:[],
  isLoading:false,
  error:null
}
//actions
const getTodoRequestAction=()=>{
    return{
        type:'GET_TODOS_REQUEST',
    }
}

const getTodoFailedAction=(error)=>{
    return{
      type:GET_TODOS_FAILED,
      payload:error
    }
}

const getTodoSuccesAction=(todos)=>{
    return{
       type:GET_TODOS_SUCCESS,
       payload:todos
   
    }
}

//Reducer
const TodoReducers=(state=initialTodoState,action)=>{
    switch(action.type)
    {
     case GET_TODOS_REQUEST:
        return{
         ...state,
         isLoading:false
        }
        break;
     case GET_TODOS_SUCCESS:
        return{
            ...state,
            isLoading:false,
            todos:action.payload
        }
        break;
    case GET_TODOS_FAILED:
        return{
            ...state,
            isLoading:false,
            error:action.payload
        }
    default:return state;
    }
    
}
//async action creator
const fetchData=()=>{
 return(dispatch)=>{
   dispatch(getTodoRequestAction())
   axios.get(API_URL)

   .then((response)=>{
    const todos=response.data;
    const todo_Title=todos.map((todo)=>(todo.title))
    dispatch(getTodoSuccesAction());
   })

   .catch((error)=>{
    const errorMessage=error.message;
    dispatch(getTodoFailedAction(errorMessage))
   })
 }
}

const redux_store=createStore(TodoReducers,applyMiddleware(thunk));
redux_store.subscribe(()=>{
    console.log(redux_store.getState())
})
redux_store.dispatch(fetchData());

