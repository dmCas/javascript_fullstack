import React, {useState} from 'react';
import logo from './logo.svg'
import './App.css';

// vue 三明治
// react js + template App.js
// .css 另外文件  .js + .css
function App(){

  const [todos,setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Get haircut',
      isCompleted: false,
    },
    {
      content: 'Build a todo app in React',
      isCompleted: false,
    }
  ])
  return (
    <div className="app">
      hello, react
      <ul>
        {
          // js运行区域
          // vue v-for
          todos.map((todo, i) => {
            <li>{todo.content}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App;

