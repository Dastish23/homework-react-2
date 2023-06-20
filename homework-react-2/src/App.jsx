
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import PostsPage from './pages/PostsPage'
import PostList from './pages/PostList'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}> 
            <Route path='posts' element={<PostsPage />} />
            <Route path='postslist' element={<PostList />}  />
        </Route>
      </Routes>
    </>
  )
}

export default App
