import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <p>the page you are tring to access was not found</p>
      <Link to='/'>Back to home page</Link>
    </div>
  )
}

export default NotFoundPage