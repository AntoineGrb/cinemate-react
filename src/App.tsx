import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/movie/:id' element={<MoviePage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </>
    )
}

export default App