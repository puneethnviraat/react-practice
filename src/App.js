import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accordian from './components/accordian/Accordian';
import Counter from './components/counter/Counter';
import RandomColor from './components/randomColor/RandomColor';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider/ImageSlider';
import LoadMoreData from './components/load-more-data';
import Example1 from './components/Example1';
import Treeview from './components/treeview';
import QRCodeGenerator from './components/qr-code-generator';
import SwitchTheme from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/counter',
        element: <Counter />,
      },
      { path: '/accordian', element: <Accordian /> },
      {
        path: '/random-color',
        element: <RandomColor />,
      },
      {
        path: '/star-rating',
        element: <StarRating />,
      },
      {
        path: '/counter-by-reducer',
        element: <Example1 />,
      },
      {
        path: '/load-more-data',
        element: <LoadMoreData />,
      },
      {
        path: '/treeview',
        element: <Treeview />,
      },
      {
        path: '/qr-code-generator',
        element: <QRCodeGenerator />,
      },
      {
        path: '/scroll-indicator',
        element: <ScrollIndicator />,
      },
      {
        path: '/light-dark-mode',
        element: <SwitchTheme />,
      },
      {
        path: '/image-slider',
        element: (
          <ImageSlider url={'https://picsum.photos/v2/list?page=1'} limit={5} />
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
