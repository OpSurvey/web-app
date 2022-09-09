
export default function ButtonLanding(props) {
    return (<>              
        <button
            type="submit" 
            className= {`hover:bg-${props.hoverColor} bg-lime-400 text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0`}
            >
            {`${props.text}`}
        </button>
        </>
    )}