import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.value} {props.count}
    </button>
  );
}


function App() {
  const get = () => {
    console.log('in get');

    const status: Promise<number> = fetch('http://localhost:8000/api/a', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => {
        if (!response.ok) {
          console.error('err', response.status);
          return response.status;
        }

        console.log('succeeded!', response.status, response.json());
        return response.status;
      })
    
    return status;
  }


  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Chrome extensions</h1>
      <div className="card">
        {/* count propsを設けるのは微妙... */}
        <Button onClick={() => setCount((count) => count + 1)} value='count is ' count={count}></Button>
        <Button onClick={() => get()} value='Request!!'></Button>
      </div>
    </div>
  )
}

export default App
