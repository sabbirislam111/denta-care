
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Router/Router';
import Home from './pages/Home/Home/Home';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
