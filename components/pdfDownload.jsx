import Link from "next/link";

export default function PdfDownload(props) {
  console.log("pdfdownload props", props.quoteId);
  return (
    <button
      className="bg-lime-400 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
      type="button"
    >
      <Link
        href={`${process.env.NEXT_PUBLIC_API_URL}/quote/${props.quoteId}/pdf`}
      >
        <a>Descargar</a>
      </Link>
    </button>
  );
}
