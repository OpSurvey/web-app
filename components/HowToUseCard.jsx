export default function HowToUseCard(props) {
  return (
    <div
      href="#"
      className={`"flex items-center flex-col w-full pt-0 mb-4 rounded-lg md:flex md:${props.direction} "`}
    >
      <img
        className="object-cover w-full h-45 md:h-36 md:w-36 md:rounded-none md:rounded-l-lg md:m-2"
        src={`${props.img}`}
        alt=""
      />
      <div
        className={`" flex flex-col justify-center align-middle content-center w-full h-[200px] ${props.backgroundColor} p-4 leading-normal  md:h-36  md:rounded-lg md:content-center "`}
      >
        <p
          className={`"mb-2 text-2xl  font-bold align-middle tracking-tight" ${props.textColor} `}
        >
          {props.content}
        </p>
      </div>
    </div>
  );
}
