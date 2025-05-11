import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {

    const { availability, category, description, image, is_veg, name, price, rating, _id } = item;

    return (
        <Link to={`/item_details/${_id}`} className="p-4 shadow-md bg-gray-50 text-gray-800">
            <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                    <p rel="noopener noreferrer" className="mb-0 capitalize text-gray-800">{category}</p>
                </div>
                <div>
                    <p rel="noopener noreferrer">is_veg: {is_veg}</p>
                </div>
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
                    <div rel="noopener noreferrer" className="block">
                        <h3 className="text-xl font-semibold text-default-600">{name}</h3>
                    </div>
                    <p className="leading-snug text-gray-600">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ItemCard;