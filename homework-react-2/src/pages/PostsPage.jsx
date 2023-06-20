 import React, {useState} from 'react'
 import { useNavigate } from 'react-router-dom'
 import axios from 'axios'
 
const PostsPage = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = async (e) => { 
    e.preventDefault();

  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body,
      userId: 1,
    });
    navigate('/postslist')
  } catch (error) {
    console.error('Ошибка при создании поста:', error)
  }
};
    return (
      <div>
        <h2>Создание поста</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Загаловок:</label>
            <input type="text" id='title' onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label htmlFor="body">Текст:</label>
            <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
          </div>
          <button type='submit'>Создать</button>
        </form>
      </div>
    )
  }
  
export default PostsPage