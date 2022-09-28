export default function HowToUseCardIMG(props) {
  return (
    <>
      <div
        className={`"w-full pt-5 pb-10 flex flex-col items-center rounded-lg xs:m-1 md:flex md:${props.direction} xs:pb-10"`}
      >
        <div
          className={`"p-4 leading-normal w-full flex flex-col justify-center align-middle content-center h-[120px] ${props.backgroundColor} md:h-36 rounded-lg md:content-center`}
        >
          <p
            className={`"mb-2 md:text-basic lg:basic xl:text-lg 2xl:text-2xl text-center font-bold align-middle tracking-tight ${props.textColor} xs:text-base"`}
          >
            {props.content}
          </p>
        </div>
        <img
          className="object-cover w-[200px] h-[200px] xs:w-[300px] xs:h-[200px] md:h-36 md:w-[200px] lg:w-[200px] lg:h-[120px] xs:px-6 md:rounded-none md:rounded-l-lg md:m-2"
          src={`${props.img}`}
          alt=""
        />
      </div>
    </>
  );
}
