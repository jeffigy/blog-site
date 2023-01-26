import React, {useState} from 'react'

function Home() {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
  const handleClick = () => {
    console.log('hello');
  };
  const clickAgain = (name) => {
    console.log('hello' + name);
  }
  return (
    <div className="home">
      <h2>Home page</h2>

          {blogs.map(
            (blog) => (
              <div className="blog-preview" key={blog.id}>
                  <h2>{blog.title}</h2>
                  <p>Written by: {blog.author}</p>
              </div>
            )
          )}
    </div>
  )
}

export default Home