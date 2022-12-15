import React, { useState, FormEvent, ChangeEvent,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../http";
export default function Create() {
  let valuesform = {
    todo: "",
  };
  const navigate=useNavigate()
  const [todo, setTodo] = useState<Object>(valuesform);
  const [inputrequire, setinputRequire] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo({ ...valuesform, [name]: value });
    //menimpa object awal dengan object yang baru
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    // console.log(todo);
    e.preventDefault();
    // const {todo}=e.target as typeof e.target & {
    //   todo:{value:string}
    // }
    try {
      console.log(todo);
        const todoinput=document.getElementById('todo') as HTMLInputElement
      if(todoinput.value.length > 5){
          http.post(`/todo`,todo)
          .then((response)=>{
            if(!response) throw new Error(response);
            navigate('/')
          })
      }else{
          setinputRequire(true)
          setInterval(()=>{
            setinputRequire(false)
          },5000)
      }
      
    } catch (e) {
      console.log(e);
    }
    //oke typescript saia beri perintah ketika data masuk hanya field {todo:value:string} saja yang boleh kamu ijinkan masuk ke dalam sistem ini
  };

  
  return (
    <form onSubmit={submitForm}>
      <div className="flex justify-center items-center flex-col h-screen gap-3 bg-sky-400">
        <h3 className={`text-rose-900 p-4 rounded-md shadow-md shadow-rose-500 text-3xl bg-rose-400 ${inputrequire?'block':'hidden'}`}>minimal todo 6 karakter atau lebih!!!</h3>
        <h5 className="text-center">Create Data</h5>
        <label htmlFor="todo">todo</label>
        <input
          type="text"
          placeholder="todo"
          id="todo"
          className="px-3 py-1 rounded-sm outline outline-2 outline-sky-500 focus:outline-sky-700"
          name="todo"
          // value={valuesform.todo}
          onChange={handleChange}
        />
        <button
          className="px-5 py-1 bg-sky-400 shadow-md shadow-sky-900 rounded-md hover:bg-sky-200 hover:text-sky-900"
        >
          submit
        </button>
      </div>
    </form>
  );
}
