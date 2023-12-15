import {Routes , Route} from 'react-router-dom'
import { MoviesProvider } from './context/MoviesContext'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ProfilePage from './pages/ProfilePage'
import Error from './components/Error'

const App = () => {
    return (
        <>
            <MoviesProvider>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/movie/:id' element={<MoviePage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='*' element={<Error message="La page n'existe pas" isFullScreen={true} />} />
                </Routes>
            </MoviesProvider>
        </>
    )
}

export default App