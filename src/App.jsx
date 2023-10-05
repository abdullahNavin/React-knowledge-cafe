
import './App.css'
import Blogs from './components/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:container mx-auto md:flex justify-between items-center mt-9'>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App
