import BlogList from 'components/BlogList';
import React, { useEffect, useState } from 'react'

function Home() {
  const title = 'Blog list'
  const [blogs, setBlogs] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs').then(res => {
        return res.json();
      }).then((data) => {
        console.log(data);
        setBlogs(data)
        setIsLoading(false);
      })
    }, 1000);
  }, [blogs]);

  return (
    <div className="home">
      {isLoading ? <div>loading...</div> : <BlogList blogs={blogs} title={title} />}
    </div>
  )
}

export default Home