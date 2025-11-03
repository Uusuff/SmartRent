import { Header } from './modules/Header';
import './styles/resetStyles.scss';

export const App = () => (
  // <ProductsProvider>
  <div className="app">
    <Header />
    <main className="main-content">{/* <Outlet /> */}</main>
    {/* <Footer /> */}
  </div>
  // </ProductsProvider>
);
