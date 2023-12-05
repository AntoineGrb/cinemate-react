import {Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import Movie from '../pages/Movie'

const MyRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movie/:id' element={<Movie />} />
            </Routes>
        </>
    )
}

export default MyRouter