
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
  const [readingTime, setReadingTime] = useState(0);

  const handleReadingTime = (time, id) => {
    const newtime = readingTime + time;
    setReadingTime(newtime)
    // markas
    const remainBookMarks = bookmarks.filter(bookMark => bookMark.id !== id)
    setbooksmarks(remainBookMarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:container mx-auto md:flex justify-between mt-9'>
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <BookMarks
          bookmarks={bookmarks}
          readingTime={readingTime}
        ></BookMarks>
      </div>
    </>
  )
}

export default App
