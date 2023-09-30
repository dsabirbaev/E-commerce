import { useState, useEffect } from "react";
import "./style.scss";

import Brand from "../../components/UI/Brand/Brand";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import useBrand from "../../services/brand/useBrand";
import useSubCategory from "../../services/category/useCategory";
import useSize from "../../services/size/useSize";
import useProduct from "../../services/product/useProduct";

import CardProduct from "../../components/UI/CardProduct/Card";
const index = () => {
    const [brand, setBrand] = useState([]);
    const [category, setCategory] = useState([]);
    const [size, setSize] = useState([]);
    const [product, setProduct] = useState([]);
    const getBrand = async () => {
        try {
            const response = await useBrand.getBrand();
            setBrand(response.data);
        } catch (err) {
            console.log(err.message);
        }
    }

    const getSubCategory = async () => {
        try {
            const response = await useSubCategory.getSubCategory();
            setCategory(response.data);
        } catch (err) {
            console.log(err.message)
        }
    }

    const getSize = async () => {
        try {
            const response = await useSize.getSize();
            setSize(response.data);

        } catch (err) {
            console.log(err.message)
        }
    }

    const getProduct = async() => {
        try {
            const response = await useProduct.getProduct();
            setProduct(response.data);
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getBrand();
        getSubCategory();
        getSize();
        getProduct();
    }, [])

    const uniqueSize = [];
    if(size.length){
        size.map((item) => uniqueSize.push(item.size))
    }
    const sortedArr = [...new Set(uniqueSize)];
    
    
    return (

        <section className="py-[100px]" >
            <div className="container">

                <div className="flex gap-x-5">
                    <aside className="w-[25%] rounded-md shadow p-5">
                        <div className="mb-10">
                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Categories</h3>
                            <ul className="text-sm font-medium text-gray-900 bg-white  dark:bg-transparent border dark:border-gray-400  dark:text-white rounded-md">

                                {
                                    category.length ? category?.map((item) => (
                                        <li key={item.id} className="w-full hover:shadow-lg dark:hover:shadow-xl">
                                            <div className="flex items-center pl-3">
                                                <input id={item?.id} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor={item?.id} className=" cursor-pointer w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300">{item?.name}</label>
                                            </div>
                                        </li>
                                    )): <h1 className="text-center text-2xl">Category Not Found</h1>
                               }



                            </ul>

                        </div>

                        <div>
                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Sizes</h3>
                            <ul className="text-sm font-medium text-gray-900 bg-white  dark:bg-transparent border dark:border-gray-400  dark:text-white rounded-md">
                               
                                {
                                    sortedArr.length ? sortedArr?.map((item, index) => (
                                        <li key={Date.now()+index} className="w-full hover:shadow-lg dark:hover:shadow-xl">
                                            <div className="flex items-center pl-3">
                                                <input id={Date.now()+index} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor={Date.now()+index} className=" cursor-pointer w-full py-3 ml-2 text-md font-medium text-gray-900 dark:text-gray-300"> {item}</label>
                                            </div>
                                        </li>
                                    )): <h1 className="text-center text-2xl">Size Not Found</h1>
                               }
                               
                            </ul>

                        </div>



                    </aside>

                    <div className="wrapper  w-[75%]">
                        <div className="brands flex h-[330px] relative mb-5">
                            {
                                brand.length ?
                                    <Swiper
                                        spaceBetween={20}
                                        slidesPerView={3}
                                        slidesPerGroup={2}
                                        pagination={{ clickable: true }}
                                        modules={[Pagination, Autoplay]}
                                        loop={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        centeredSlides={true}

                                        className="brand-slider"

                                    >
                                        {
                                            brand?.map((item) => (
                                                <SwiperSlide key={item.id} className="flex pt-[10px] justify-center">
                                                    <Brand  case={item} />
                                                </SwiperSlide>

                                            ))
                                        }


                                    </Swiper> : <h1 className="text-center text-2xl">Data Not Found</h1>
                            }


                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            {
                                product.length ? product.map((item) => {
                                    return <CardProduct key={item.id} case={item}/>
                                }): <h1 className="text-center text-2xl">Product Not Found</h1>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default index;