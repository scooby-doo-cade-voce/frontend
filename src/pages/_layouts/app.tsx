import { AppFooter } from '@/components/footer'
import { AppHeader } from '@/components/header'
import { HelpFind } from '@/components/help-find'
import { OthersPlatforms } from '@/components/others-platforms'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <AppHeader />

      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>

      <HelpFind />

      <OthersPlatforms />

      <AppFooter />
    </div>
  )
}
