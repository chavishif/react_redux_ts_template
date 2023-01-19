import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
selectStudents,getstudentsAsync,addstudentsAsync,delstudentsAsync,updstudentsAsync
} from './studentSlice';



export function Student() {
  const students = useAppSelector(selectStudents);
  const dispatch = useAppDispatch();
  const [name, setname] = useState("")
  const [age, setage] = useState(0)

  useEffect(() => {
    dispatch(getstudentsAsync())
  }, [students.length])
  


  return (
    <div>
    NAME:  <input onChange={(e)=>setname(e.target.value)}></input>
    Age:  <input onChange={(e)=> setage(+e.target.value)}></input>

      <button onClick={()=>dispatch(addstudentsAsync({ name, age }))}>Add student</button>
     student
     {students.length > 0 && students.length}
     <br></br>
   
     {students.map((student,i) =><div key={i}>
      name:{student.name},
      age:{student.age} 
      <button onClick={() => dispatch(delstudentsAsync(student.id || -1))}>Delete</button>
      <button onClick={() => dispatch(updstudentsAsync({ name , age, id: student.id}))}>Update</button>
     </div>)}
    </div>
  );
}
