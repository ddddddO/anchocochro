import { useState } from 'react'
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

  const [word, setWord] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const post = (word: string, description: string, link: string) => {
    console.log('in post');

    const status: Promise<number> = fetch('http://localhost:8000/api/a', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          word: word,
          description: description,
          link: link,
        }
      ),
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
      <p>WORD: {word}</p>
      <p>DESCRIPTION: {description}</p>
      <p>LINK: {link}</p>
      <TextInput title='単語/文章' onChange={setWord}></TextInput>
      <TextInput title='説明' onChange={setDescription}></TextInput>
      <TextInput title='リンク' onChange={setLink}></TextInput>

      <Button onClick={() => get()} value='Get!'></Button>
      <Button onClick={() => post(word, description, link)} value='Post!'></Button>
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
