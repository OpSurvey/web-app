import useWindowDimensions from "../hooks/useWindowDimensions";

export default function HowToUseCard(props) {
  const width = useWindowDimensions();

  return (
    <>
      <>
        <div
          className={`"w-full h-full lg:h-[160px] pb-4 flex flex-col items-center md:flex md:flex-row md:justify-between" `}
        >
          <div className="w-full md:w-1/3 flex justify-center items-center h-full md:h-full lg:h-28 p-2">
            <img
              className="object-cover w-full h-full lg:w-36 lg:h-28"
              src={`${props.img}`}
              alt=""
            />
          </div>

          <div
            className={`"w-full md:w-2/3 flex items-center px-${props.padding} px-2 h-[120px] ${props.backgroundColor} rounded-lg "`}
          >
            <p
              className={`"tracking-normal leading-normal text-basic font-semibold ${props.textColor} inline-block align-middle text-center md:text-basic lg:text-basic xl:text-lg 2xl:text-xl " `}
            >
              {props.content}
            </p>
          </div>
        </div>
      </>
    </>
  );
}
