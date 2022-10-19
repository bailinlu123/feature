import React,{useState, useEffect} from 'react'
import axios from 'axios'

function ReducerDataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(res => {
              setLoading(false)
            //   console.log(res)
              setPost(res.data)
              setError('')
          })
          .catch(err => {
            setLoading(false)
            setPost({})
            setError('Something went wrong')
          })
    }, [])

    return (
        <div>
            {loading ? 'Lodaing' : post.title}
            {error ? error : null}
        </div>
    )
}

export default ReducerDataFetchingOne
