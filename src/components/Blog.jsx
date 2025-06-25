// src/components/Blog.jsx
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const initialPosts = [
  {
    id: 1,
    title: 'The Hobbit',
    content: 'Bilbo Baggins goes on an unexpected adventure …',
    comments: [
      { id: 1, name: 'Alice', text: 'Loved the sense of wonder!' },
      { id: 2, name: 'Bob', text: 'Such a fun read.' }
    ]
  },
  {
    id: 2,
    title: '1984',
    content: 'A chilling vision of a dystopian future …',
    comments: [
      { id: 3, name: 'Carol', text: 'Remarkably relevant today.' }
    ]
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    content: 'A classic tale of love and misunderstandings.',
    comments: [
      { id: 4, name: 'Jane', text: 'Timeless characters and drama.' },
      { id: 5, name: 'Tom', text: 'A bit slow, but worth it.' }
    ]
  },
  {
    id: 4,
    title: 'Dune',
    content: 'An epic saga of politics, prophecy, and desert survival.',
    comments: [
      { id: 6, name: 'Frank', text: 'Mind-blowing world-building!' }
    ]
  },
  {
    id: 5,
    title: 'The Catcher in the Rye',
    content: 'A teenager’s internal struggles with society and identity.',
    comments: [
      { id: 7, name: 'Sally', text: 'Very raw and relatable.' },
      { id: 8, name: 'Mark', text: 'Didn’t enjoy the narration.' },
      { id: 9, name: 'Lucy', text: 'A unique perspective.' }
    ]
  }
]

export default function Blog() {
  const { user: currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
 }

  if (!currentUser) {
    return <Navigate to="/signin" replace />;
  }

  const [posts, setPosts] = useState(initialPosts)
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [commentText, setCommentText] = useState({}) // keyed by postId

  const addPost = (e) => {
    e.preventDefault()
    if (!newTitle || !newContent) return
    setPosts([
      ...posts,
      { id: Date.now(), title: newTitle, content: newContent, comments: [] }
    ])
    setNewTitle('')
    setNewContent('')
  }

  const addComment = (postId, e) => {
    e.preventDefault()
    const text = (commentText[postId] || '').trim()
    if (!text) return
    setPosts(posts.map(p =>
      p.id === postId
        ? { ...p, comments: [...p.comments, { id: Date.now(), name: 'You', text }] }
        : p
    ))
    setCommentText({ ...commentText, [postId]: '' })
  }

  return (
    <main className="container">
      <h1>Book Club Blog</h1>

      <form className="blog-form" onSubmit={addPost}>
        <label>
          Title
          <input
            type="text"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Content
          <textarea
            value={newContent}
            onChange={e => setNewContent(e.target.value)}
            rows="3"
            required
          />
        </label>
        <button type="submit" className="btn-signup">
          {posts.length ? 'Add Another Post' : 'Create First Post'}
        </button>
      </form>

      <div className="blog-wrapper">
        {posts.map(post => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>

            <div className="comment-list">
              {post.comments.map(c => (
                <p key={c.id}>
                  <strong>{c.name}:</strong> {c.text}
                </p>
              ))}
            </div>

            <form className="comment-form" onSubmit={e => addComment(post.id, e)}>
              <input
                type="text"
                placeholder="Write a comment…"
                value={commentText[post.id] || ''}
                onChange={e => setCommentText({ ...commentText, [post.id]: e.target.value })}
              />
              <button type="submit" className="btn-signup">
                Comment
              </button>
            </form>
          </div>
        ))}
      </div>
    </main>
  )
}
