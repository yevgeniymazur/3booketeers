// src/components/Features.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const rowOne = [
  {
    title: 'Build your own book club and connect with people from all over the world',
    img: 'images/connect.png',
    to: '/bookclub',
  },
  {
    title: 'User-made reviews and recommendations',
    img: 'images/reviews.png',
    to: '/blog',
  },
]

const rowTwo = [
  {
    title: 'Use forums to connect/discuss with other users',
    img: 'images/forums.png',
    to: '/blog',
  },
  {
    title: 'Recommended locations for clubs',
    img: 'images/locations.png',
    to: '/bookclub',
  },
  {
    title: 'Subscribe for notifications about new literary hits',
    img: 'images/subscribe.png',
    to: '/signin',
  },
]

export default function Features() {
  return (
    <>
      <div className="row-two container">
        {rowOne.map((item, idx) => (
          <Link key={idx} to={item.to} className="card">
            <img src={item.img} alt={item.title} className="card-bg" />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>

      <div className="row-three container">
        {rowTwo.map((item, idx) => (
          <Link key={idx} to={item.to} className="card">
            <img src={item.img} alt={item.title} className="card-bg" />
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
