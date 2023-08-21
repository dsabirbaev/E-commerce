
import "./style.scss";

const Card = ({
  img1,
  img2,
  img3,
  img4,
  title,
  description,
  price,
  rating,
}) => {
  return (
    <div className="card min-w-[395px] h-[485px] bg-white  rounded-lg p-3">
      <img
        className="h-[250px] w-full object-cover rounded-[16px]"
        src={img1}
        alt=""
      />
      <div className="mini_imgs flex items-center justify-between  my-2">
        <img
          className="h-[110px] w-[120px] rounded-[16px] object-cover"
          src={img2}
          alt=""
        />
        <img
          className="h-[110px] w-[120px] rounded-[16px] object-cover"
          src={img3}
          alt=""
        />
        <img
          className="h-[110px] w-[120px] rounded-[16px] object-cover"
          src={img4}
          alt=""
        />
      </div>
      <div className="flex items-start justify-between mt-4">
        <div>
          <h2 className="text-[#0F172A] font-semibold mb-2">{title}</h2>
          <div className="flex items-center gap-5">
            <p className="text-[#64748B] text-[14px]">{description}</p>
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
                <p className="text-[#64748B] text-[14px]">{rating}</p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="text-[#22C55E] w-[72px] h-[30px] flex items-center justify-center border-[#22C55E] rounded-lg border-2 "
          href="#"
        >
          ${price}
        </a>
      </div>
    </div>
  );
};

export default Card;
