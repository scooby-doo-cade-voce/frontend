import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Chatbot } from './components/chatbot'
import { Toaster } from './components/ui/sonner'
import { queryClient } from './lib/react-query'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Scooby Doo, Cadê Você?" />

      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster richColors />

        <Chatbot />
      </QueryClientProvider>
    </HelmetProvider>
  )
}
