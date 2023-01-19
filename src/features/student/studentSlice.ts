import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { getstudents, addstudents, delstudents, updstudents } from './studentAPI';
import Student from '../../models/student'

export interface StudentState {
  students: Student[]
}

const initialState: StudentState = {
  students: []
};

export const getstudentsAsync = createAsyncThunk(
  'student/getstudents',

  async () => {

    const response = await getstudents();
    // console.log(response)
    return response;
  }
);

export const addstudentsAsync = createAsyncThunk(
  'student/addstudents',
  async (student: Student) => {
    const response = await addstudents(student);
    // console.log(response)
    return response;
  }
);

export const delstudentsAsync = createAsyncThunk(
  'student/delstudents',

  async (id: number) => {

    const response = await delstudents(id);
    // console.log(response)
    return response;
  }
);

export const updstudentsAsync = createAsyncThunk(
  'student/updstudents',

  async (student: Student) => {

    const response = await updstudents(student);
    // console.log(response)
    return response;
  }
);

export const StudentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getstudentsAsync.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.students = action.payload;
      })
      .addCase(addstudentsAsync.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.students.push(action.payload);
      })
      .addCase(delstudentsAsync.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.students = state.students.filter(student => student.id !== action.payload);
      })
      .addCase(updstudentsAsync.fulfilled, (state, action) => {
        // console.log(action.payload);
        // There is several ways to do update:
        // one is by filtering: find where is the student and than add this to the students array
        state.students = state.students.filter(student => student.id !== action.payload);
        state.students.push(action.payload)
        // the other way:
        // let temp = state.students.filter(student => student.id === action.payload)[0]
        // temp.age = action.payload.age
        // temp.name = action.payload.name
      })
  },
});

export const { } = StudentSlice.actions;
export const selectStudents = (state: RootState) => state.student.students;
export default StudentSlice.reducer;
