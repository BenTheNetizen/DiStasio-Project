import React, {useState} from 'react';
import {Document, Page,} from 'react-pdf/dist/esm/entry.webpack';

import samplePDF from '../data/sample_pathology_report1.pdf';



import './Document.css'

function DocumentComponent() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
      }

    return (
    <div>
        <Document 
        file={samplePDF} 
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        >
            <Page pageNumber={pageNumber} />
        </Document>
    </div>
    );
}

export default DocumentComponent;