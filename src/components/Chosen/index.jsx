


import "./style.scss";
import jacket1 from "../../assets/images/jacket1.png";
import jacket2 from "../../assets/images/jacket2.png";
import jacket3 from "../../assets/images/jacket3.png";
import jacket4 from "../../assets/images/jacket4.png";
import bag1 from "../../assets/images/bag1.png";
import bag2 from "../../assets/images/bag2.png";
import bag3 from "../../assets/images/bag3.png";
import bag4 from "../../assets/images/bag4.png";
import shoe1 from "../../assets/images/shoe1.png";
import shoe2 from "../../assets/images/shoe2.png";
import shoe3 from "../../assets/images/shoe3.png";
import shoe4 from "../../assets/images/shoe4.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';


const index = () => {

  return (
    <section className="pt-[100px]">
      <div className="container ">
        <h2 className="text-black text-[36px] font-semibold ">
          Chosen by our experts
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          modules={[Navigation]}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          className="chosen-slide"
        >
          <SwiperSlide>
            <div className="card min-w-[400px] h-[485px] bg-white rounded-lg p-3 hover:shadow cursor-pointer">
              <img className="h-[250px] w-full object-cover rounded-[16px]" src={jacket1} alt="jacket" />
              <div className="mini_imgs flex items-center justify-between  my-2">
                <img className="h-[110px] w-[120px] rounded-[16px] object-cover" src={jacket2} alt="jacket" />
                <img className="h-[110px] w-[120px] rounded-[16px] object-cover" src={jacket3} alt="jacket" />
                <img className="h-[110px] w-[120px] rounded-[16px] object-cover" src={jacket4} alt="jacket" />
              </div>
              <div className="flex items-start justify-between mt-4">
                <div>
                  <h2 className="text-[#0F172A] font-semibold mb-2">Suede Bomber Jacket</h2>
                  <div className="flex items-center gap-5">
                    <p className="text-[#64748B] text-[14px]">Orange</p>
                    <div className="flex items-center ">
                      <div className="flex items-center justify-end gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                        >
                          <path
                            fill-Rule="evenodd"
                            clip-Rule="evenodd"
                            d="M7.32999 1.58499C7.70332 0.68749 8.97666 0.68749 9.34999 1.58499L11.085 5.75749L15.5883 6.11832C16.5583 6.19582 16.9517 7.40582 16.2125 8.03916L12.7817 10.9783L13.8292 15.3725C14.055 16.3192 13.0258 17.0667 12.1958 16.56L8.33999 14.205L4.48416 16.56C3.65416 17.0667 2.62499 16.3183 2.85082 15.3725L3.89832 10.9783L0.467488 8.03916C-0.271678 7.40582 0.121655 6.19582 1.09166 6.11832L5.59499 5.75749L7.32999 1.58499Z"
                            fill="#FBBF24"
                          />
                        </svg>
                        <p className="text-[#64748B] text-[14px]">5 (269 reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="text-[#22C55E] w-[72px] h-[30px] flex items-center justify-center border-[#22C55E] rounded-lg border-2 " href="#">
                  $ 52.00
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card min-w-[400px] h-[485px] bg-white rounded-lg p-3 hover:shadow cursor-pointer">
              <img className="h-[250px] w-full object-cover rounded-[16px]" src={bag1} alt="jacket" />
              <div className="mini_imgs flex items-center justify-between  my-2">
                <img className="h-[110px] w-[120px] rounded-[16px] object-cover" src={bag2} alt="jacket" />
                <img className="h-[110px] w-[120px] rounded-[16px] object-cover" src={bag3} alt="jacket" />
                <img className="h-[110px] w-[120px] rounded-[16px] object-cover" src={bag4} alt="jacket" />
              </div>
              <div className="flex items-start justify-between mt-4">
                <div>
                  <h2 className="text-[#0F172A] font-semibold mb-2">Downtown Pet Tote</h2>
                  <div className="flex items-center gap-5">
                    <p className="text-[#64748B] text-[14px]">Black and Orange</p>
                    <div className="flex items-center ">
                      <div className="flex items-center justify-end gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                        >
                          <path
                            fill-Rule="evenodd"
                            clip-Rule="evenodd"
                            d="M7.32999 1.58499C7.70332 0.68749 8.97666 0.68749 9.34999 1.58499L11.085 5.75749L15.5883 6.11832C16.5583 6.19582 16.9517 7.40582 16.2125 8.03916L12.7817 10.9783L13.8292 15.3725C14.055 16.3192 13.0258 17.0667 12.1958 16.56L8.33999 14.205L4.48416 16.56C3.65416 17.0667 2.62499 16.3183 2.85082 15.3725L3.89832 10.9783L0.467488 8.03916C-0.271678 7.40582 0.121655 6.19582 1.09166 6.11832L5.59499 5.75749L7.32999 1.58499Z"
                            fill="#FBBF24"
                          />
                        </svg>
                        <p className="text-[#64748B] text-[14px]">5 (269 reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="text-[#22C55E] w-[72px] h-[30px] flex items-center justify-center border-[#22C55E] rounded-lg border-2 " href="#">
                  $ 88.00
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card min-w-[400px] h-[485px] bg-white rounded-lg p-3 hover:shadow cursor-pointer">
              <img className="h-[250px] w-full object-cover rounded-[16px]" src={shoe1} alt="jacket" />
              <div className="mini_imgs flex items-center justify-between  my-2">
                <img className="h-[110px] w-[120px] rounded-[16px] object-cover" src={shoe2} alt="jacket" />
                <img className="h-[110px] w-[120px] rounded-[16px] object-cover" src={shoe3} alt="jacket" />
                <img className="h-[110px] w-[120px] rounded-[16px] object-cover" src={shoe4} alt="jacket" />
              </div>
              <div className="flex items-start justify-between mt-4">
                <div>
                  <h2 className="text-[#0F172A] font-semibold mb-2">Cader Leather Sneakers</h2>
                  <div className="flex items-center gap-5">
                    <p className="text-[#64748B] text-[14px]">3 Sizes available</p>
                    <div className="flex items-center ">
                      <div className="flex items-center justify-end gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                        >
                          <path
                            fill-Rule="evenodd"
                            clip-Rule="evenodd"
                            d="M7.32999 1.58499C7.70332 0.68749 8.97666 0.68749 9.34999 1.58499L11.085 5.75749L15.5883 6.11832C16.5583 6.19582 16.9517 7.40582 16.2125 8.03916L12.7817 10.9783L13.8292 15.3725C14.055 16.3192 13.0258 17.0667 12.1958 16.56L8.33999 14.205L4.48416 16.56C3.65416 17.0667 2.62499 16.3183 2.85082 15.3725L3.89832 10.9783L0.467488 8.03916C-0.271678 7.40582 0.121655 6.19582 1.09166 6.11832L5.59499 5.75749L7.32999 1.58499Z"
                            fill="#FBBF24"
                          />
                        </svg>
                        <p className="text-[#64748B] text-[14px]">5 (269 reviews)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="text-[#22C55E] w-[72px] h-[30px] flex items-center justify-center border-[#22C55E] rounded-lg border-2 " href="#">
                  $ 60.00
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="min-w-[400px] h-[440px] bg-[#F3F4F6] mt-3 rounded-[16px] hover:shadow cursor-pointer">
              <div className="flex items-center justify-center flex-col h-full">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-medium">More items</h2>

                  <svg
                    className="rotate-[140deg]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M8.475 4.94165L3.41667 9.99996L8.475 15.0583"
                      stroke="#64748B"
                      stroke-width="1.25"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5833 10H3.55836"
                      stroke="#64748B"
                      stroke-width="1.25"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[16px] ml-[-46px]">Show me more</p>
              </div>
            </div>
          </SwiperSlide>
          <div className="button-next-slide w-[40px] h-[40px] absolute top-0 right-0 cursor-pointer hover:border duration-200 rounded-full flex items-center justify-center">
            <i className='bx bx-right-arrow-alt text-[25px]' ></i>
          </div>
          <div className="button-prev-slide w-[40px] h-[40px] cursor-pointer absolute top-0 right-[45px] hover:border duration-200 rounded-full flex items-center justify-center">
            <i className='bx bx-left-arrow-alt text-[25px]'></i>
          </div>

        </Swiper>

      </div>
    </section>
  );
};

export default index;
