import { useState } from "react";
import { Document, Page } from "react-pdf";

export default function PdfDownload() {
  return (
    <div>
      <a
        href={`${process.env.NEXT_PUBLIC_API_URL}/quote/123/pdf`}
        frameborder="0"
      ></a>
    </div>
  );
}
