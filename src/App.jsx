
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header'

function App() {
  const [bookmarks, setbooksmarks] = useState([])

  const handleAddToBookmarks = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setbooksmarks(newBookMarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:container mx-auto md:flex justify-between mt-9'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <BookMarks
          bookmarks={bookmarks}
        ></BookMarks>
      </div>
    </>
  )
}

export default App
