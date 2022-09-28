import useWindowDimensions from "../hooks/useWindowDimensions";

export default function HowToUseCard(props) {
  const width = useWindowDimensions();

  return (
    <>
      {width > 768 ? (
        <>
          <div
            className={`"w-full pt-0 pb-5 flex flex-col items-center rounded-lg h-[120px] md:${props.direction} md:flex"`}
          >
            <img
              className="object-cover w-full h-auto md:h-36 md:w-36 md:rounded-none md:rounded-l-lg md:m-2 lg:w-[350px] lg:h-[150px]"
              src={`${props.img}`}
              alt=""
            />
            <div
              className={`"p-4 flex flex-col justify-center align-middle content-center h-[200px] ${props.backgroundColor} p-4 leading-normal w-full md:h-36 md:rounded-lg md:content-center"`}
            >
              <p
                className={`"mb-2 md:text-basic lg:basic xl:text-lg 2xl:text-2xl text-center font-bold align-middle tracking-tight" ${props.textColor}`}
              >
                {props.content}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={`"w-full pt-0 flex flex-col items-center rounded-lg xs:p-1 xs:m-1 md:flex md:${props.direction} "`}
          >
            <div
              className={`"p-4 leading-normal w-full flex flex-col justify-center align-middle content-center h-[120px] ${props.backgroundColor} md:h-36 rounded-lg md:content-center"`}
            >
              <p
                className={`"mb-2 md:text-2xl text-center font-bold align-middle tracking-tight ${props.textColor} xs:text-base"`}
              >
                {props.content}
              </p>
            </div>
            <img
              className="object-cover w-[290px] h-[200px] px-6"
              src={`${props.img}`}
              alt=""
            />
          </div>
        </>
      )}
    </>
  );
}
