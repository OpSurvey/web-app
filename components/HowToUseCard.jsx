import Image from "next/image"

export default function HowToUseCard(props){
    return(
        <div href="#" className= {`"flex items-center flex-col mb-3  rounded-lg md:flex md:${props.direction} w-full"`} >
            <Image className="object-cover w-full h-auto md:h-36 md:w-36 md:rounded-none md:rounded-l-lg md:m-2" layout='fill' src="https://portolapilot.com/wp-content/uploads/2018/12/300x300.png" alt=""/>
            <div className={`"flex flex-col justify-center align-middle content-center h-[200px] ${props.backgroundColor} p-4 leading-normal w-full md:h-36  md:rounded-lg md:content-center "`}>
                <p className={`"mb-2 text-2xl  font-bold align-middle tracking-tight" ${props.textColor} `}>{props.content}</p>
            </div>
        </div>
    )
}