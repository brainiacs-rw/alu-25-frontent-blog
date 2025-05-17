import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TermsAndConditions from './pages/TermsAndCondition'
import BaseLayout from './layout/base-layout'
import BlogDetails from './pages/BlogDetails'
export default function App() {

  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/terms' element={<TermsAndConditions />} />
          <Route path='/blog/:blogId' element={<BlogDetails />} />
        </Routes>
      </BaseLayout>

    </BrowserRouter>
  )
}

