import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

const InvoiceModal = ({
  isOpen,
  setIsOpen,
  invoiceInfo,
  recipe,
  onAddNextQuote,
}) => {
  function closeModal() {
    setIsOpen(false);
  }

  const addNextQuoteHandler = () => {
    setIsOpen(false);
    onAddNextQuote();
  };

  const SaveAsPDFHandler = () => {
    const dom = document.getElementById('print');
    toPng(dom)
      .then((dataUrl) => {
        const img = new Image();
        img.crossOrigin = 'annoymous';
        img.src = dataUrl;
        img.onload = () => {
          // Inicializa pdf
          const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'in',
            format: [5.5, 8.5],
          });

          // Define data reusada
          const imgProps = pdf.getImageProperties(img);
          const imageType = imgProps.fileType;
          const pdfWidth = pdf.internal.pageSize.getWidth();

          // Calcula numero de paginas.
          const pxFullHeight = imgProps.height;
          const pxPageHeight = Math.floor((imgProps.width * 8.5) / 5.5);
          const nPages = Math.ceil(pxFullHeight / pxPageHeight);

          // Define ancho de pagina.
          let pageHeight = pdf.internal.pageSize.getHeight();

          // Create un canvas para dividir la pantalla.
          const pageCanvas = document.createElement('canvas');
          const pageCtx = pageCanvas.getContext('2d');
          pageCanvas.width = imgProps.width;
          pageCanvas.height = pxPageHeight;

          for (let page = 0; page < nPages; page++) {
            // corta el final de la pagina.
            if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
              pageCanvas.height = pxFullHeight % pxPageHeight;
              pageHeight = (pageCanvas.height * pdfWidth) / pageCanvas.width;
            }
            // muestra la pagina.
            const w = pageCanvas.width;
            const h = pageCanvas.height;
            pageCtx.fillStyle = 'white';
            pageCtx.fillRect(0, 0, w, h);
            pageCtx.drawImage(img, 0, page * pxPageHeight, w, h, 0, 0, w, h);

            // Agrega al pdf una pagina nueva
            if (page) pdf.addPage();

            const imgData = pageCanvas.toDataURL(`image/${imageType}`, 1);
            pdf.addImage(imgData, imageType, 0, 0, pdfWidth, pageHeight);
          }
          // Guardar pdf
          pdf.save(`invoice-${invoiceInfo.invoiceNumber}.pdf`);
        };
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
              <div className="p-4" id="print">
                <h1 className="text-center text-lg font-bold text-gray-900">
                  Cotizacion
                </h1>
                <div className="mt-6">
                  <div className="mb-4 grid grid-cols-2">
                    <span className="font-bold">Cotización #:</span>
                    <span>{invoiceInfo.quoteNumber}</span>
                    <span className="font-bold">Cotizador:</span>
                    <span>{invoiceInfo.quoterName}</span>
                    <span className="font-bold">Cliente:</span>
                    <span>{invoiceInfo.customerName}</span>
                  </div>

                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-y border-black/10 text-sm md:text-base">
                        <th>Concepto</th>
                        <th className="text-center">Cantidad</th>
                        <th className="text-right">Precio</th>
                        <th className="text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recipe.map((recipe) => (
                        <tr key={recipe.id}>
                          <td className="w-full">{recipe.name}</td>
                          <td className="min-w-[50px] text-center">
                            {recipe.qty}
                          </td>
                          <td className="min-w-[80px] text-right">
                            ${Number(recipe.price).toFixed(2)}
                          </td>
                          <td className="min-w-[90px] text-right">
                            ${Number(recipe.price * recipe.qty).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="mt-4 flex flex-col items-end space-y-2">
                    <div className="flex w-full justify-between border-t border-black/10 pt-2">
                      <span className="font-bold">Subtotal:</span>
                      <span>${invoiceInfo.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex w-full justify-between">
                      <span className="font-bold">Impuestos:</span>
                      <span>${invoiceInfo.taxRate.toFixed(2)}</span>
                    </div>
                    <div className="flex w-full justify-between border-t border-black/10 py-2">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold">
                        $
                        {invoiceInfo.total % 1 === 0
                          ? invoiceInfo.total
                          : invoiceInfo.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex space-x-2 px-4 pb-6">
                <button
                  className="flex w-full items-center justify-center space-x-1 rounded-md border text-white bg-zinc-900 border-lime-500 py-2 text-sm shadow-sm hover:bg-lime-500 hover:text-white"
                  onClick={SaveAsPDFHandler}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>Descargar</span>
                </button>
                <button
                  onClick={addNextQuoteHandler}
                  className="flex w-full items-center justify-center space-x-1 rounded-md text-white bg-zinc-900 border-lime-400 text-sm shadow-sm hover:bg-lime-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 5l7 7-7 7M5 5l7 7-7 7"
                    />
                  </svg>
                  <span>Siguiente</span>
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default InvoiceModal;