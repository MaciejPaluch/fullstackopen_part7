import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
      <div>
        <Link style={padding} to="/">anecdotes</Link>
        <Link style={padding} to="/create">create</Link>
        <Link style={padding} to="/about">about</Link>
      </div>
    // <div>
    //   <a href='#' style={padding}>anecdotes</a>
    //   <a href='#' style={padding}>create new</a>
    //   <a href='#' style={padding}>about</a>
    // </div>
  )
}

export default Menu