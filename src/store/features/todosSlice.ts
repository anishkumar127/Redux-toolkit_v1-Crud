// import { createSlice } from "@reduxjs/toolkit";

// const todosSlice = createSlice({
//   name: "todos",
//   initialState : {
//     data:[],
//     loading:false,
//     error:null
//   },
//   reducers: {
//     addTodo:(state,action)=>{
//         state.data.push({id:action.payload.id,text:action.payload.text});
//     },
//     removeTodo:(state,action)=>{
//         state.data =  state.data.filter((todo)=>todo.id !==action.payload);
//     },
//     editTodo:(state,action)=>{
//         const index = state.data.findIndex((todo)=>todo.id  ===action.payload);
//         if(index!==-1){
//             state.data[index].text = action.payload.text;
//         }
//     }
//   },
// });

// export const {addTodo,removeTodo,editTodo} = todosSlice.actions;
// export default todosSlice.reducer;



import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
}

interface TodosState {
  data: Todo[];
  loading: boolean;
  error: null | string;
}

const initialState: TodosState = {
  data: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.data.push({ id: action.payload.id, text: action.payload.text });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const index = state.data.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.data[index].text = action.payload.text;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
