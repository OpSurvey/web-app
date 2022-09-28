import Image from "next/image";

export default function OpinionCard(props) {
  return (
    <div className="w-[350px] m-3 bg-zinc-900 lg:rounded-lg shadow-md flex flex-col ">
      <div className="flex justify-center pt-6">
        <img
          className="md:w-[150px] md:h-[210px] lg:w-[200px] lg:h-[260px] xl:w-[300px] xl:h-[380px]"
          src={props.opinionImg}
          alt=""
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {props.clientName}
        </h5>
        <p className="mb-3 text-gray-200 italic md:text-sm lg:text-base xl:text-lg">
          {props.opinionContent}
        </p>
      </div>
    </div>
  );
}
