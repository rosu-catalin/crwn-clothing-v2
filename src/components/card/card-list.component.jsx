import Card from "./card.component.jsx";
import getCategories from "../../libs/getCategories.js";

const CardList = () => {

    const categories = getCategories()

    return (
        <div className='grid grid-cols-3 gap-3 container mx-auto'>
            {categories.map(category => {
                return (
                    <Card key={category.id} image={category.image} name={category.title} route={category.route}/>
                )
            })}
        </div>
    )
}

export default CardList