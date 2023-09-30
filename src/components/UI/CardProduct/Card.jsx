


const CardProduct = ({ case: { name, description, unitPrice } }) => {
    return (

        <div className="cursor-pointer hover:shadow-lg min-h-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

            <p className="mb-3  text-gray-700 dark:text-gray-400">{description}</p>
            <p className="font-medium dark:text-white">{unitPrice} sum</p>
        </div>


    );
};

export default CardProduct;