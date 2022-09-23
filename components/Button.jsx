export default function Button(props) {
  return (
    <>
      <button
        type="submit"
        className={`w-full xs:w-[200px] ${props.style} md:w-auto font-semibold rounded-lg text-sm px-8 py-4 text-center md:mr-0 `}
      >
        {`${props.text}`}
      </button>
    </>
  );
}
