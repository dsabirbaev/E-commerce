

const imgPath = "http://165.22.110.111:8080";
import "./style.scss";

const Brand = ({case:{name, brandIconPath}}) => {
    
    return (
        <div className="brand">
            <div className="hover:shadow-lg  cursor-pointer w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg  h-[200px] w-full object-center object-contain" src={`${imgPath}/${brandIconPath.replace('\\', '/')}`} alt="image" />
                <div className="p-5">
                    <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Brand;