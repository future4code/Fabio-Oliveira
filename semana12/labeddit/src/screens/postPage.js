import React from 'react'
import axios from 'axios'
import { useProtectedPage } from '../hooks/useProtectedPage'

const PostPage = () => {

    useProtectedPage()
    return (
        <div>
            Post Page
        </div>
    )
}

export default PostPage