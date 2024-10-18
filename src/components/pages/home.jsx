import Hero from "./sections/hero"
import CategoryItem from './sections/CtegoryItem'
import Sale from "./sections/Sale"
import Latest from "./sections/Latest"
import All from "./sections/All"


const Home = () => {


    return (
        <div>
            <Hero />
            <CategoryItem />
            <Sale />
            <Latest />
            <All/>
        </div>
    )
}


export default Home
