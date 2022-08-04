import SectionBanner from '../components/SectionBanner'
import SectionFaq from '../components/SectionFaq'
import SectionHero from '../components/SectionHero'
import SectionService from '../components/SectionService'
import SectionTestimony from '../components/SectionTestimony'
import SectionWhyUs from '../components/SectionWhyUs'

const Home = () => {
    return(
        <>
            <SectionHero />
            <SectionService />
            <SectionWhyUs />
            <SectionTestimony />
            <SectionBanner />
            <SectionFaq />
        </>
    )
}

export default Home;