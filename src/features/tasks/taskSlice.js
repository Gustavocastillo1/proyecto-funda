import { createSlice } from "@reduxjs/toolkit";
 

const initialState= [
    {
        id:"1",
        title:"task 1",
        description:"task 1 description",
        completed:false
    },
    {
        id:"2",
        title:"task 2",
        description:"task 2 description",
        completed:false
    }
]

export const taskSlice = createSlice({
    name:'staks',
    initialState,
    reducers:{
        addTask:(state,actions) => {
          state.push(actions.payload);
        },
        deleteTask:(state,actions)=>{
        const tasksFound = state.find(task => task.id === actions.payload)
        if(tasksFound){
            state.splice(state.indexOf(tasksFound),1)
        }
        }

    }
})

export const { addTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer