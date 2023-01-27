import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Juan');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog add');
            setIsPending(false);
            // navigate.go(-1);
            navigate('/');
        })

    };
    return (
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required />
                <label >Blog body:</label>
                <textarea onChange={(e) => setBody(e.target.value)} value={body} required ></textarea>
                <label >Blog author</label>
                <select value={author} onChange={e => setAuthor(e.target.value)}>
                    <option value="Juan">Juan</option>
                    <option value="Jose">Jose</option>
                </select>
                {isPending ? <button disabled>Submitting</button> : <button >Submit</button>}

            </form>
        </div>
    )
}

export default Create