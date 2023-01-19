import {MY_SERVER} from "../../env"
import axios from 'axios'
import Student from '../../models/student'

export async function getstudents () {

  return await axios.get(MY_SERVER).then(res => res.data);
   
}

export async function addstudents (student:Student) {

  return await axios.post(MY_SERVER,student).then(res => res.data);
   
}


export async function delstudents (id:number) {

  return await axios.delete(MY_SERVER + "/" + id).then(res => id);
   
}

export async function updstudents (student: Student) {

  return await axios.put(MY_SERVER + "/" + student.id, student).then(res => res.data);
   
}