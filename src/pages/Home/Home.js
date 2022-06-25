import React from 'react'
import PostCard from './components/post-card/post-card'
import Header from './components/Header/Header'
import Stories from './components/Stories/Stories'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Stories />
        <PostCard />
      </main>
    </>
  )
}

export default Home