import { useLoaderData } from 'react-router-dom';

const ItemDetails = () => {
    const item = useLoaderData();
    const { availability, category, description, image, is_veg, name, price, rating } = item;

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
            <img
                src={image}
                alt={name}
                className="w-full md:w-1/3 h-64 object-cover rounded-md"
            />
            <div className="flex-1 text-center md:text-start">
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700 mb-1"><span className="font-semibold">Category:</span> {category}</p>
                <p className="text-gray-700 mb-1"><span className="font-semibold">Price:</span> ${price.toFixed(2)}</p>
                <p className="text-gray-700 mb-1"><span className="font-semibold">Rating:</span> {rating} ⭐</p>
                <p className="text-gray-700 mb-1"><span className="font-semibold">Availability:</span> {availability ? 'In Stock' : 'Out of Stock'}</p>
                <p className="text-gray-700 mb-1"><span className="font-semibold">Type:</span> {is_veg ? 'Vegetarian' : 'Non-Vegetarian'}</p>
                <p className="text-gray-600 mb-3">{description}</p>

                <button className='btn btn-accent'>Add to Card</button>
            </div>
        </div>
    );
};

export default ItemDetails;
