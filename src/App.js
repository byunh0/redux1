import React from 'react'
import {useDispatch , useSelector} from 'react-redux';
import {useState} from 'react'
import Box from './component/Box'
const App = () => {
  let count = useSelector(state=>state.count)
  let id=useSelector(state=>state.id)
  let password=useSelector(state=>state.password)
 
  const dispatch = useDispatch();
  const increase=()=>{
    dispatch({type:"INCREMENT" ,payload:{num:5} })
    //playload매개변수+필요한 정보를 보내줄 수 있음.
    //5씩 증가 시키고 싶다!
   
  }
  const login=()=>{
   dispatch({type:"LOGIN",payload:{id:"hayoung",password:"313"}})
  }

  const decrease=()=>{
    dispatch({type:"DECREASE",payload:{num:5}});
  }
  return (
    <div>
      <h1>ID:{id}, Password:{password}</h1>
 <div>Count:{count}</div>
<div>0이하일때는 감소가 되지 않습니다.</div>
 <button onClick={increase}>증가</button>
 <button onClick={login}>Login</button>
 <button onClick={decrease}>감소</button>
 <Box/>

    </div>
   

  )
}

export default App