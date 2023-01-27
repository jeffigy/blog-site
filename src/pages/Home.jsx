import BlogList from 'components/BlogList';
import React from 'react'
import useFetch from 'useFetch';
function Home() {
  const title = 'Blog list'
  const { data, isLoading, error } = useFetch('http://localhost:8000/blogs')
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading ? <div>loading...</div> : <BlogList blogs={data} title={title} />}
    </div>
  )
}

export default Home