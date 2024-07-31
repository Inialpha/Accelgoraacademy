import Header from "../components/Header/Header";
import Main from "../components/Hero/Main";
import Footer from "../components/Footer/Footer";
import Course from "../components/Courses/section";
import Contact from "../components/Contact/contact";
import Testimonial from "../components/Testimonial";

const Home = () => {
    return (
        <>
            <Header />
            <Main />
            <Course />
            <Testimonial />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;