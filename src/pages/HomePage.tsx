import './HomePage'
import styled from 'styled-components'
import {mediaSizes} from '../utils/styleVariables.js'
import HomeHeader from '../components/HomeHeader'
import FiltersForm from '../components/FiltersForm'
import MoviesList from '../components/MoviesList'
import Footer from '../components/Footer'

const HomePageContainer = styled.div`
    max-width: 1300px;
    margin: auto;
    @media (min-width: ${mediaSizes.smallscreen}) {
        width: 95%;
    }
`

const HomePage = () => {
    return (
        <>
            <HomePageContainer>
                <HomeHeader />
                <main className='main__home'>
                    <FiltersForm />
                    <MoviesList />
                    <Footer />
                </main>
            </HomePageContainer>
        </>
    )
}

export default HomePage