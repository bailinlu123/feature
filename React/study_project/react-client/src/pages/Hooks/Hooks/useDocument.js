import {useEffect} from 'react'

function useDocument(counter) {
    useEffect(() => {
        document.title = `counter ${counter}`
    }, [counter])
}

export default useDocument
