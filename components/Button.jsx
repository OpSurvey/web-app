export default function Button(props) {
  return (
    <>
      <button
        type="submit"
        className={`${props.style} font-semibold rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0`}
      >
        {`${props.text}`}
      </button>
    </>
  );
}
