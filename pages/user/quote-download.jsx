import React, { useState, useEffect } from "react";
import DocuPDf from "../../components/DocuPDF";
import NewQuote from "../../components/NewQuote";
import {PDFViewer} from "react-pdf"

export default function createQuote() {

    const [verWeb, setVerWeb] = useState(false)
    const [verPdf, setVerPdf] = useState(false)
    
    console.log('verPDF',verPdf)
    console.log('verWeb', verWeb)
    


  return (
    <>
      <button className="bg-lime-400 m-4 p-4" onClick={() =>{
        1+1
      }} type="primary">
        Descargar
      </button>
      <button className="bg-lime-400 m-4 p-4" onClick={ ()=>{
        setVerPdf(!verPdf)
        setVerWeb(false)
      }
      } 
      type="primary">
        Ver PDF
      </button>
      <button className="bg-lime-400 m-4 p-4" onClick={ ()=>{
        setVerWeb(!verWeb)
        setVerPdf(false)
      }
      } 
      type="primary">
        Ver web
      </button>
    
    {verWeb ? <NewQuote/> : null} 
    {verPdf ?  <PDFViewer> <DocuPDf/> </PDFViewer>  : null} 

      

    </>
  );
}
