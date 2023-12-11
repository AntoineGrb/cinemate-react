import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/movie/:id' element={<MoviePage />} />
            </Routes>
        </>
    )
}

export default App