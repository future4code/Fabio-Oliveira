import React from 'react'
import axios from 'axios'
import { useProtectedPage } from '../hooks/useProtectedPage'

const FeedPage = () => {

    useProtectedPage()


    return (
        <div>
            Feed Page
        </div>
    )

}

export default FeedPage