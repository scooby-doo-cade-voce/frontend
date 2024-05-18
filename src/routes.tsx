import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404'
import { AppLayout } from './pages/_layouts/app'
import { HomePage } from './pages/app/home'
import { PetSubscriptionDonePage } from './pages/app/cadastro-concluido'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/cadastrar-pet',
        element: <HomePage />,
      },
      {
        path: '/cadastro-pet-concluido',
        element: <PetSubscriptionDonePage />,
      },
    ],
  },
])
