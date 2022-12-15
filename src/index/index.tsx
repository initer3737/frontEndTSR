import React ,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import http from '../http'
export default function Index() {
  const [todo,setTodo] =useState([])
  const navigate=useNavigate();
 useEffect(()=>{
      fetchalldata();
  },[todo]) 

  const fetchalldata=async()=>{
    try {
      await http.get('/todos').then(res=>{
        setTodo(res.data)
      })
    } catch (er) {
      console.log(`eror ${er}`);
    }
  }



const deletedata=async(id:number | never)=>{
    try {
     const res=await http.delete(`/todo/${id}/delete`)

    } catch (er) {
      console.log(`eror ${er}`);
    }
}
  return (
    <div className="flex flex-col m-5 bg-sky-400 border border-3 border-rose-900 shadow-md shadow-rose-800 text-amber-900 py-3 px-2">
      {todo.map(({id,todo},index)=>(
      <div className="flex gap-3 place-items-center" key={index}>
        <ul className='flex flex-col gap-3 place-items-end' key={index}>
          <li key={id} className={"py-2"}>{index+1}.{todo}</li>
          <li key={index} className={'flex gap-3'}> 
            <button  className='px-5 py-2 shadow-md shadow-rose-700 bg-red-900 rounded-md text-white hover:text-red-500'
              onClick={()=>deletedata(id)}
            >delete</button>
            <a href={`/update/${id}`} className='px-5 py-2 shadow-md shadow-sky-700 bg-sky-900 rounded-md text-white hover:text-sky-300'>edit</a>
          </li>
        </ul>
      </div>
      ))}

    </div>
  )
}
