import Image from "next/image";

export default function OpinionCard(props){
    return(
        <div className="w-[350px] m-3 bg-zinc-900 lg:rounded-lg shadow-md flex flex-col ">
                <div className="flex justify-center pt-6">
                <img className="w-[300px] h-[380px]" src={props.opinionImg} alt="" />
                </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{props.clientName}</h5>
                </a>
                <p className="mb-3 text-gray-200">{props.opinionContent}</p>
            </div>
        </div>
    )
}