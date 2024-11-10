import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FakestoreIndex } from './fakestore/fakestore-index';
import { FakestoreCategories } from './fakestore/fakestore-categories';
import { FakestoreProducts } from './fakestore/fakestore-products';
import { FakestoreDetails } from './fakestore/fakestore-details';
import { FakestoreLogin } from './fakestore/fakestore-login';
import { FakestoreSearch } from './fakestore/fakestore-search';
import { FakestoreResults } from './fakestore/fakestore-results';


function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <header className='bg-dark text-white p-2'>
                <span className='fs-4 fw-bold'>Fakestore.</span>
            </header>
            <section className='mt-4'>
                <Routes>
                    <Route path='/' element={<FakestoreIndex />} />
                    <Route path='categories' element={<FakestoreCategories />} />
                    <Route path='products/:category' element={<FakestoreProducts />}>
                      <Route path='details/:id' element={<FakestoreDetails />} />
                    </Route>
                    <Route path='login' element={<FakestoreLogin />} />
                    <Route path='search' element={<FakestoreSearch />} />
                    <Route path='results' element={<FakestoreResults />} />
                </Routes>
            </section>
        </BrowserRouter>
    </div>
  );
}

export default App;
