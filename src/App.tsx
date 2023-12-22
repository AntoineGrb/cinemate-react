import {Routes , Route} from 'react-router-dom'
import { MoviesProvider } from './context/MoviesContext'
import { UserProvider } from './context/UserContext'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import ProfilePage from './pages/ProfilePage'
import Error from './components/Error'

//On fournit les deux contexte en amont puis on configure le routeur
const App = () => {
    return (
        <>
            <UserProvider>
                <MoviesProvider>

                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/movie/:id' element={<MoviePage />} />
                        <Route path='/profile' element={<ProfilePage />} />
                        <Route path='*' element={<Error message="La page n'existe pas" $isFullScreen={true} />} />
                    </Routes>

                </MoviesProvider>
            </UserProvider>
        </>
    )
}

export default App