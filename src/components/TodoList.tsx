// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo, editTodo, removeTodo } from "../store/features/todosSlice";

// type Props = {};

// const TodoList = (props: Props) => {
//   const [todo, setTodo] = useState("");
//   const [editId, setEditId] = useState(null);
//   const todos = useSelector((state) => state.todos.data);
//   console.log(todos);
//   const dispatch = useDispatch();
//   const handleRemoveTodo = (id) => {
//     console.log("id", id);
//     dispatch(removeTodo(id));
//   };

//   const handleEditTodo = (id, text) => {
//     setEditId(id);
//     setTodo(text);
//   };

//   const handleAddTodo = () => {
//     if (todo) {
//       dispatch(addTodo({ id: Date.now(), text: todo }));
//       setTodo("");
//     }
//   };

//   const handleSaveEdit = () => {
//     if (todo && editId !== null) {
//       dispatch(editTodo({ id: editId, text: todo }));
//       setEditId(null);
//       setTodo("");
//     }
//   };
//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//           placeholder="add todo"
//         />
//         {editId !== null ? (
//           <button onClick={handleEditTodo}>Remove</button>
//         ) : (
//           <button onClick={handleAddTodo}>Remove</button>
//         )}
//       </div>
//       {todos?.map((item) => (
//         <li key={item.id}>
//           {editId === item.id ? (
//             <input
//               type="text"
//               value={todo}
//               onChange={(e) => setTodo(e.target.value)}
//               placeholder="add todo"
//             />
//           ) : (
//             item.text
//           )}
//           {editId === item.id ? (
//             <button onClick={handleSaveEdit}>Save</button>
//           ) : (
//             <>
//               <button onClick={() => handleEditTodo(item.id, item.text)}>
//                 Edit
//               </button>
//               <button onClick={() => handleRemoveTodo(item.id)}>Remove</button>
//             </>
//           )}
//           {item.text}

//           <button onClick={() => handleRemoveTodo(item.id)}>Remove</button>
//         </li>
//       ))}

//       <div>
//         <button onClick={handleAddTodo}>Add Todo</button>
//       </div>
//     </div>
//   );
// };

// export default TodoList;



// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo, editTodo, removeTodo } from "../store/features/todosSlice";

// const TodoList = () => {
//   const [todo, setTodo] = useState("");
//   const [editId, setEditId] = useState(null);
//   const todos = useSelector((state) => state.todos.data);
//   const dispatch = useDispatch();

//   const handleRemoveTodo = (id) => {
//     dispatch(removeTodo(id));
//   };

//   const handleEditTodo = (id, text) => {
//     setEditId(id);
//     setTodo(text);
//   };

//   const handleAddTodo = () => {
//     if (todo) {
//       dispatch(addTodo({ id: Date.now(), text: todo }));
//       setTodo("");
//     }
//   };

//   const handleSaveEdit = () => {
//     if (todo && editId !== null) {
//       dispatch(editTodo({ id: editId, text: todo }));
//       setEditId(null);
//       setTodo("");
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//           placeholder="Add/Edit todo"
//         />
//         {editId !== null ? (
//           <button onClick={handleSaveEdit}>Save Edit</button>
//         ) : (
//           <button onClick={handleAddTodo}>Add Todo</button>
//         )}
//       </div>
//       <ul>
//         {todos.map((item) => (
//           <li key={item.id}>
//             {editId === item.id ? (
//               <input
//                 type="text"
//                 value={todo}
//                 onChange={(e) => setTodo(e.target.value)}
//               />
//             ) : (
//               item.text
//             )}
//             {editId === item.id ? (
//               <button onClick={handleSaveEdit}>Save</button>
//             ) : (
//               <>
//                 <button onClick={() => handleEditTodo(item.id, item.text)}>
//                   Edit
//                 </button>
//                 <button onClick={() => handleRemoveTodo(item.id)}>Remove</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "../store/features/todosSlice";

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);
  const todos = useSelector((state: { todos: { data: Todo[] } }) => state.todos.data);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = (id: number, text: string) => {
    setEditId(id);
    setTodo(text);
  };

  const handleAddTodo = () => {
    if (todo) {
      dispatch(addTodo({ id: Date.now(), text: todo }));
      setTodo("");
    }
  };

  const handleSaveEdit = () => {
    if (todo && editId !== null) {
      dispatch(editTodo({ id: editId, text: todo }));
      setEditId(null);
      setTodo("");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add/Edit todo"
        />
        {editId !== null ? (
          <button onClick={handleSaveEdit}>Save Edit</button>
        ) : (
          <button onClick={handleAddTodo}>Add Todo</button>
        )}
      </div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {editId === item.id ? (
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            ) : (
              item.text
            )}
            {editId === item.id ? (
              <button onClick={handleSaveEdit}>Save</button>
            ) : (
              <>
                <button onClick={() => handleEditTodo(item.id, item.text)}>
                  Edit
                </button>
                <button onClick={() => handleRemoveTodo(item.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
