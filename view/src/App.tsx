import { lazy, Suspense } from 'react';
import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
    </Route>
  ))

function App() {

  return <RouterProvider router={routes} />
}

export default App;
