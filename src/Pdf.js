import React from "react";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default ({ file }) => (
  <Document file={file}>
    <Page pageNumber={1} />
  </Document>
);
