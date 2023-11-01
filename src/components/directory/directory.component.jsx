import Card from "../category/category.component.jsx";
import getCategories from "../../libs/getCategories.js";

const Directory = () => {

    const categories = getCategories()

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container mx-auto px-4 my-4'>
            {categories.map(category => {
                const {id, image, title, route} = category
                return (
                    <Card key={id} image={image} name={title} route={route}/>
                )
            })}
        </div>
    )
}

export default Directory