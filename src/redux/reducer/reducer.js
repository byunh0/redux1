
let initialState={
    count:0,
    id:"",
    password:"",
    
    
}

function reducer(state=initialState,action){
// 항상 return을 해줘야함 그래야 store이 받을 수 있음.state에 있는 count 즉, state.count쓴거임.
// ...state 다른 state의 값은 유지하되!! 라는 뜻
//새로운 객체를 전달해줘야지 store가 본인이 바뀐걸 안다. 
console.log("action은 무엇일까?",action)
//switch 와 action type
if(action.type=="INCREMENT"){
    return{...state,count:state.count+action.payload.num}
    //...을 붙여줘서 아예 새로운 객체 주소를 전달 해줘야 store가 본인이 바뀐걸 안다.
}else if(action.type=="LOGIN"){
    return{...state,id:action.payload.id,password:action.payload.password}
}else if(action.type=="DECREASE"){
    const newCount = state.count - (action.payload?.num || 1);
      return { ...state, count: Math.max(newCount, 0) }; // count가 0보다 작지 않도록함.
      //Math.max(newCount, 0)는 newCount와 0 중 큰 값을 선택하여 count가 0보다 작아지지 않도록 함.
}
// switch(action.type){
//     case "INCREMENT":
//         return {...state,count: state.count+1};
//     default:
//         return{...state}
// }
return {...state}
//if의 case가 아니더라도 값을 받을 수 있어야 합니다.
}

export default reducer