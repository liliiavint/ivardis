import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BasicLayout } from './components/layout/BasicLayout';
import { PageHome } from './pages/PageHome';
import { PageNotFound } from './pages/PageNotFound';
import { PageGalininkas } from './pages/PageGalininkas';
import { PageInagininkas } from './pages/PageInagininkas';
import { PageKilmininkas } from './pages/PageKilmininkas';
import { PageNaudininkas } from './pages/PageNaudininkas';
import { PageVardininkas } from './pages/PageVardininkas';
import { PageVietininkas } from './pages/PageVietininkas';
import { PageMes } from './pages/PageMes';
import { PageJus } from './pages/PageJus';
import { PageJie } from './pages/PageJie';
import { PageJos } from './pages/PageJos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
            <Route index path='/' element={<PageHome />} />
            <Route path='/galininkas' element={<PageGalininkas />} />
            <Route path='/inagininkas' element={<PageInagininkas />} />
            <Route path='/kilmininkas' element={<PageKilmininkas />} />
            <Route path='/naudininkas' element={<PageNaudininkas />} />
            <Route path='/vardininkas' element={<PageVardininkas />} />
            <Route path='/vietininkas' element={<PageVietininkas />} />

            <Route path='/mes' element={<PageMes />} />
            <Route path='/jus' element={<PageJus />} />
            <Route path='/jie' element={<PageJie />} />
            <Route path='/jos' element={<PageJos />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;