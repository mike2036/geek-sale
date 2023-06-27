import { Home, Shop, Navigation, SignIn } from './pages'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signIn' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
