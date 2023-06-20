import axios from "axios";
import { useEffect, useState } from "react";

  
  const PostList = () => {
        const [posts, setPosts] = useState([])

        useEffect(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(resp  =>  setPosts(resp.data))
        }, [])


    return (
      <div>PostList
         <ul>
                {posts && posts.map(p => <li key={p.id}>
                    {p.title}
                </li> )}
         </ul>
      </div>
    )
  }
  
  export default PostList