import React, { FC, useState, FormEvent, ChangeEvent,useEffect } from "react";
    import { useNavigate,useParams } from "react-router-dom";
    import http from "../http";

const  Update:FC=()=> {
      const navigate=useNavigate()
      const {id}=useParams();
      const [todo,setTodo]=useState('')
      const [updateValue,setUpdateValue]=useState({todo:''})
      useEffect(()=>{
        getTodo();
        
      },[])
        const getTodo=async()=>{
          try {
            await http.get(`/todo/${id}`)
            .then(res=>{
              const {data}=res
              setTodo(data[0].todo);
            })
          } catch (err) {
            console.log(err);
          }
        }

        const PutTodo=async(e:FormEvent<HTMLFormElement>)=>{
            e.preventDefault()
          try {
            await http.put(`/todo/${id}/update`,updateValue)
            .then(res=>{
             if( res.status === 200) {
                navigate('/')
              }
            })
          } catch (err) {
            console.log(err);
          }
        }
          const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
            const {name,value}=e.target;
            setTodo(value)
            setUpdateValue({...updateValue,[name]:value})
          }
            
      return (
        <form onSubmit={PutTodo }>
          {''}
          <div className="flex justify-center items-center flex-col h-screen gap-3 bg-sky-400">
            {" "}
            <h5 className="text-center">update Data</h5>
            <label htmlFor="todo">todo</label>
            {/* {todo.map(({id,todo},index)=>(   */}
            <input
              // key={index}
              type="text"
              placeholder="todo"
              id="todo"
              className="px-3 py-1 rounded-sm outline outline-2 outline-sky-500 focus:outline-sky-700"
              name="todo"
              value={todo}
              onChange={handleChange}
            />
               {/* ))} */}
            <button
              className="px-5 py-1 bg-sky-900 shadow-md shadow-sky-900 rounded-md hover:bg-sky-700 text-sky-100 border-0"
            >
              submit
            </button>
          </div>
        </form>
      );
    
}

export default Update;