// "use client";

// import { useEffect, useRef, useState } from "react";
// import * as pdfjsLib from "pdfjs-dist/build/pdf";
// import "pdfjs-dist/build/pdf.worker.entry";
// import Image from "next/image";

// interface PdfViewerProps {
//   url: string;
// }

// const PdfViewer = ({ url }: PdfViewerProps) => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [pageCount, setPageCount] = useState(0);
//   const [images, setImages] = useState<string[]>([]);

//   useEffect(() => {
//     const loadPdf = async () => {
//       const loadingTask = pdfjsLib.getDocument(url);
//       const pdf = await loadingTask.promise;

//       setPageCount(pdf.numPages);

//       // Loop through pages
//       for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
//         const page = await pdf.getPage(pageNum);

//         // Extract images from the page
//         const viewport = page.getViewport({ scale: 1.5 });
//         const canvas = document.createElement("canvas");
//         const context = canvas.getContext("2d");
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;

//         const renderTask = page.render({
//           canvasContext: context!,
//           viewport: viewport,
//         });

//         await renderTask.promise;

//         // Get the image data from the canvas
//         const imageData = canvas.toDataURL("image/png");
//         setImages((prev) => [...prev, imageData]);
//       }
//     };

//     loadPdf();
//   }, [url]);

//   return (
//     <div className="h-full w-full">
//       {images.map((src, index) => (
//         <Image key={index} src={src} alt={`Page ${index + 1}`} />
//       ))}
//     </div>
//   );
// };

// export default PdfViewer;
