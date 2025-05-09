import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import AuthProvider from './provider/AuthProvider';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position='top-center' reverseOrder={true}></Toaster>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);