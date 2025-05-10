
const ItemCard = ({ item }) => {

    const { availability, category, description, image, is_veg, name, price, rating } = item;

    return (
        <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-gray-800">{category}</a>
                </div>
                <a rel="noopener noreferrer" href="#">is_veg: {is_veg}</a>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                    <p className="text-center">{availability}</p>
                    <div className="flex justify-between items-center text-xs">
                        <span>Price: {price}</span>
                        <span>Rating: {rating}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold text-default-600">{name}</h3>
                    </a>
                    <p className="leading-snug text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;