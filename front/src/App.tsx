// import { useState } from 'react'
import './App.css'

import TextInput from './TxtInput'
import Button from './Button'

function Form() {
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

  const post = () => {
    console.log('in post');

    const status: Promise<number> = fetch('http://localhost:8000/api/a', {
      method: 'POST',
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

      <Button onClick={() => get()} value='Get!'></Button>
      <Button onClick={() => post()} value='Post!'></Button>
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
