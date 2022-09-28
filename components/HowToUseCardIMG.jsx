export default function HowToUseCardIMG(props) {
  return (
    <>
      <div
        className={`"w-full pt-5 pb-10 flex flex-col items-center rounded-lg xs:m-1 md:flex md:${props.direction} xs:pb-10"`}
      >
        <div
          className={`"p-4 leading-normal w-full flex flex-col justify-center align-middle content-center h-[120px] ${props.backgroundColor} xs:h-[120px] xs:px-4 xs:rounded-lg md:h-36 md:rounded-lg md:content-center"`}
        >
          <p
            className={`"mb-2 md:text-2xl text-center font-bold align-middle tracking-tight ${props.textColor} xs:text-base"`}
          >
            {props.content}
          </p>
        </div>
        <img
          className="object-cover w-full h-auto xs:w-[290px] xs:h-[200px] md:h-36 md:w-36 6 xs:px-6 md:rounded-none md:rounded-l-lg md:m-2 lg:w-[350px] lg:h-[150px]"
          src={`${props.img}`}
          alt=""
        />
      </div>
    </>
  );
}
