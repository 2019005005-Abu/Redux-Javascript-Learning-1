const { createStore, combineReducers ,applyMiddleware} = require("redux");
const{ default:logger} =require("redux-logger");
//
const GET_PRODUCTS='GET_PRODUCTS';
const ADD_PRODUCTS='ADD_PRODUCTS';
//
const GET_CART_ITEMS='GET_CART_ITEMS';
const ADD_CART_ITEMS='ADD_CART_ITEMS';
//Product state
const initislProductState={
    products:["suger","salt"],
    numberOfProducts:2,
}

//Cart state
const initialCartstate={
    cart:["Sugar"],
    numberOfCart:1
}
//actions for Product
const getProductActionType=()=>{
    return{
      type: GET_PRODUCTS 
    }
}

const Add_productsActionTypes=(product)=>{
    return{
        type:ADD_PRODUCTS,
        payload:product
    }
}

//action for Cart
const getCartActionType=()=>{
return{
    type:GET_CART_ITEMS,
}
}
const  AddCartItemsActionType=(item)=>{
    return{
        type:ADD_CART_ITEMS,
        payload:item
    }
}

//Product Reducer
const ProductReducer=(state=initislProductState,action)=>{
 switch(action.type){
    case GET_PRODUCTS:
        return{
        ...state,
        }
        break;
    case ADD_PRODUCTS:
        return{
            products:[...state.products,action.payload],
            numberOfProducts:state.numberOfProducts+1
        }
        break;
    default:return state;
 }
}
//Card Reducer
const Card_Reducer=(state=initialCartstate,action)=>{
 switch(action.type){
    case GET_CART_ITEMS:
        return{
            ...state,
        }
        break;
    case ADD_CART_ITEMS:
        return{
            cart:[...state.cart,action.payload],
            numberOfCart:state.numberOfCart+1,
        }

 }
}

const store1=createStore(ProductReducer,applyMiddleware(logger));
const store2=createStore(Card_Reducer);
store1.subscribe(()=>{console.log(store1.getState())});
store1.dispatch(getProductActionType());
store1.dispatch(Add_productsActionTypes("Salt"));
store2.dispatch(getCartActionType());
store2.dispatch(AddCartItemsActionType("T-shirt"));


