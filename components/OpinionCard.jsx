import Image from "next/image";

export default function OpinionCard(props){
    return(
        <div className="max-w-sm bg-zinc-900 lg:rounded-lg  shadow-md flex flex-col ">
                <Image  layout='fixed' width={300} height={300} src="https://portolapilot.com/wp-content/uploads/2018/12/300x300.png" alt="" />
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{props.clientName}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">{props.opinionContent}</p>
            </div>
        </div>
    )
}