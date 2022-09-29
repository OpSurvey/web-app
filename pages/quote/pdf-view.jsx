import { useState} from "react";
import Link from "next/link";
import { Document, Page } from "react-pdf";

export default function PdfDownload() {
  return (
    <div>
      <Link
        href={`${process.env.NEXT_PUBLIC_API_URL}/quote/123/pdf`}
      >
        <a>Descargar</a>
      </Link>
    </div>
  );
}
