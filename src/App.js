

import Navbar from 'components/Navbar'
import BlogDetails from 'pages/BlogDetails';
import Create from 'pages/Create';
import Home from 'pages/Home'
import NotFoundPage from 'pages/NotFoundPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
