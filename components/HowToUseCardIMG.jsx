export default function HowToUseCardIMG(props) {
  return (
    <div
      className={`"flex pt-0 items-center flex-col mb-4 rounded-lg md:flex md:${props.direction} w-full"`}
    >
      <div
        className={`"flex flex-col justify-center align-middle content-center h-[200px] ${props.backgroundColor} p-4 leading-normal w-full md:h-36  md:rounded-lg md:content-center "`}
      >
        <p
          className={`"mb-2 text-2xl text-center font-bold align-middle tracking-tight" ${props.textColor} `}
        >
          {props.content}
        </p>
      </div>
      <img
        className="object-cover w-full h-auto md:h-36 md:w-36 md:rounded-none md:rounded-l-lg md:m-2"
        src={`${props.img}`}
        alt=""
      />
    </div>
  );
}
