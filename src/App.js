import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accordian from './components/accordian/Accordian';
import Counter from './components/counter/Counter';
import RandomColor from './components/randomColor/RandomColor';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

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
