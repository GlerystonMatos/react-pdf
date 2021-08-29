import './App.css';
import logo from './logo.svg';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { documento as basics } from './relatorios/Basics';
import { documento as Styles1 } from './relatorios/Styles1';
import { documento as Styles2 } from './relatorios/Styles2';
import { documento as Styles3 } from './relatorios/Styles3';
import { documento as Columns } from './relatorios/Columns';
import { documento as Tables } from './relatorios/Tables';
import { documento as Lists } from './relatorios/Lists';
import { documento as Margin } from './relatorios/Margin';
import { documento as Images } from './relatorios/Images';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Criando documentos PDF com ReactJS e pdfMake (<a href='http://pdfmake.org/' target='_blank' rel='noreferrer'>http://pdfmake.org/</a>)</p>
      </header>
      <section className='App-body'>
        <button className='btn' onClick={visualizarImpressaoBasics}>
          Basics
        </button>
        <button className='btn btn-exemplo' onClick={visualizarImpressaoStyles1}>
          Styles1
        </button>
        <button className='btn btn-exemplo' onClick={visualizarImpressaoStyles2}>
          Styles2
        </button>
        <button className='btn btn-exemplo' onClick={visualizarImpressaoStyles3}>
          Styles3
        </button>
        <button className='btn btn-exemplo' onClick={visualizarImpressaoColumns}>
          Columns
        </button>
        <button className='btn btn-exemplo' onClick={visualizarImpressaoTables}>
          Tables
        </button>
        <button className='btn btn-exemplo' onClick={visualizarImpressaoLists}>
          Lists
        </button>
        <button className='btn btn-exemplo' onClick={visualizarImpressaoMargin}>
          Margin
        </button>
        <button className='btn btn-exemplo' onClick={visualizarImpressaoImages}>
          Images
        </button>
      </section>
    </div>
  );
}

const visualizarImpressaoBasics = () => {
  pdfMake.createPdf(basics).open({}, window.open('', '_blank'));
}

const visualizarImpressaoStyles1 = () => {
  pdfMake.createPdf(Styles1).open({}, window.open('', '_blank'));
}

const visualizarImpressaoStyles2 = () => {
  pdfMake.createPdf(Styles2).open({}, window.open('', '_blank'));
}

const visualizarImpressaoStyles3 = () => {
  pdfMake.createPdf(Styles3).open({}, window.open('', '_blank'));
}

const visualizarImpressaoColumns = () => {
  pdfMake.createPdf(Columns).open({}, window.open('', '_blank'));
}

const visualizarImpressaoTables = () => {
  pdfMake.createPdf(Tables).open({}, window.open('', '_blank'));
}

const visualizarImpressaoLists = () => {
  pdfMake.createPdf(Lists).open({}, window.open('', '_blank'));
}

const visualizarImpressaoMargin = () => {
  pdfMake.createPdf(Margin).open({}, window.open('', '_blank'));
}

const visualizarImpressaoImages = () => {
  pdfMake.createPdf(Images).open({}, window.open('', '_blank'));
}

export default App;