const PdfPrinter = require('pdfmake');
const fs = require('fs');
const path = require('path');

// Construct absolute paths to font files
const fonts = {
    Roboto: {
        normal: path.join(__dirname, '../../public/fonts/Roboto-Regular.ttf'),
        bold: path.join(__dirname, '../../public/fonts/Roboto-Medium.ttf'),
        italics: path.join(__dirname, '../../public/fonts/Roboto-Italic.ttf'),
        bolditalics: path.join(__dirname, '../../public/fonts/Roboto-MediumItalic.ttf')
    }
};

const printer = new PdfPrinter(fonts);

const exportpdfmake = () => {
    const docDefinition = {
        content: [
            { text: 'Tables', style: 'header' },
            'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
            { text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader' },
            'The following table has nothing more than a body array',
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Column 1', 'Column 2', 'Column 3'],
                        ['One value goes here', 'Another one here', 'OK?']
                    ]
                }
            }
        ]
    
    };


    const outputPath = path.join(__dirname, '../../../../../../fullstack project/backend/ecomerce/bill1.pdf');

    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream(outputPath));
    pdfDoc.end();
}

module.exports = exportpdfmake;