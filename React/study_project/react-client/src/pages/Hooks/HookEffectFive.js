import React ,{useState, useEffect} from 'react'
import axios from 'axios'

function HookEffectFive() {
    // const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFormbuttonClick, setIdFormbuttonClick] = useState(1)

    useEffect(() => {
        axios
         .get(`https://jsonplaceholder.typicode.com/posts/${idFormbuttonClick}`)
         .then(res => {
             console.log(res)
            //  setPosts(res.data)
            setPost(res.data)
         })
         .catch(err => {
             console.error(err)
         })
    }, [idFormbuttonClick])

    const handleClick= () => {
        setIdFormbuttonClick(id)
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={handleClick}>Fetch Data</button>
            <div>{post.title}</div>
            {/* <ul>
                {posts.map(post => (<li key={post.id}>{post.title}</li>))}
            </ul> */}
        </div>
    )
}

export default HookEffectFive
