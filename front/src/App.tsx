// import { useState } from 'react'
import './App.css'

function TextInput(props) {
  return (
    <div>
      <label>{props.title} : </label>
      <input type='text'></input>
    </div>
  );
}

function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.value} {props.count}
    </button>
  );
}

function Form(props) {
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

  return (
    <div>
      <TextInput title='単語/文章'></TextInput>
      <TextInput title='説明'></TextInput>
      <TextInput title='リンク'></TextInput>

      <Button onClick={() => get()} value='Request!!!'></Button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="card">
        <Form></Form>
      </div>
    </div>
  )
}

export default App
