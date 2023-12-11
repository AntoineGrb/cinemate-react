import './HomePage'
import HomeHeader from '../components/HomeHeader'
import FiltersForm from '../components/FiltersForm'
import MoviesList from '../components/MoviesList'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <>
            <HomeHeader />
            <FiltersForm />
            <MoviesList />
            <Footer />
        </>
    )
}

export default HomePage