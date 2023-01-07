import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList'
import ErrorPage from './ErrorPage';
import Detail from './components/Detail';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className='root-container text-xs text-fontPrimary bg-secondary min-h-screen max-h-full flex flex-col justify-between items-center'>
        <Header />
        <main id="mainContent" className="main p-7" tabIndex={0}>
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
