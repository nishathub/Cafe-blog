

import './App.css'
import Header from './Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmarks/Bookmark'
import { useState } from 'react'

function App() {
  const [Bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleBookmarks = (item) => {
    const oldArray = Bookmarks;
    let newArray = [];
    oldArray.forEach((oldTitle) => {
      if (oldTitle !== item.title) {
        newArray.push(oldTitle)
      }
    });
    newArray.push(item.title);
    setBookmarks(newArray);
  }

  console.log('outside function', Bookmarks);



  const handleReadTime = (event, time) => {
    event.preventDefault();
    const updatedReadTime = readTime + time;
    setReadTime(updatedReadTime);
    
  }

  const handleRemove = (title) => {
    const oldBookmarks = [...Bookmarks];
    const newBookmarks = oldBookmarks.filter(name => name !== title);
    setBookmarks(newBookmarks);
  }


  return (
    <>
      <header>
        <Header></Header>
      </header>
      <main className='grid md:gap-2 grid-cols-1 md:grid-cols-12'>
        <Bookmark readTime={readTime} favorite={Bookmarks} handleRemove={handleRemove}></Bookmark>
        <Blogs handleBookmarks={handleBookmarks} handleReadTime={handleReadTime}></Blogs>
      </main>
    </>
  )
}

export default App
