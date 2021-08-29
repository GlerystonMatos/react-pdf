import { Content, TDocumentDefinitions } from 'pdfmake/interfaces';

const content: Content = [
    'First paragraph',
    'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
];

export const documento: TDocumentDefinitions = {
    content: content,
};