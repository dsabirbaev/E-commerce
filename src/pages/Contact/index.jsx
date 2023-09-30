


import "./style.scss";


const index = () => {
    return (
        <section className="pt-[100px]">
            <div className="container">
                <div className="h-screen">
                    <h1 className="font-semibold text-4xl dark:text-white">Sabirbayev Davranbek</h1>
                    <p className="text-lg mb-2 dark:text-white">Frontend developer</p>
                    <hr />
                    <p className="mt-2 mb-2 text-[18px] flex items-center gap-x-2 dark:text-white"><span><i class='bx bx-map dark:text-white'></i></span> Uzbekistan, Tashkent</p>
                    <p className="mt-2 mb-2 text-[18px] flex items-center gap-x-2 dark:text-white"><span><i class='bx bx-envelope dark:text-white'></i></span> davran9559@gmail.com</p>
                    <p className="mt-2 mb-2 text-[18px] flex items-center gap-x-2 dark:text-white"><span><i class='bx bx-phone dark:text-white'></i></span> +998 93 361 94 47</p>
                </div>
            </div>
        </section>
    );
};

export default index;