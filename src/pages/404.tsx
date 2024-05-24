import { Paw } from '@/components/paw'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 px-4">
      <Paw className="mb-4 size-40 rotate-12 text-rose-500" />
      <h1 className="text-center text-2xl font-bold lg:text-left lg:text-4xl">
        Página não encontrada{' '}
        <span role="img" aria-label="emoji de tristeza">
          😢
        </span>
      </h1>
      <p className="text-accent-foreground">
        Volte para o{' '}
        <Link className="text-sky-500 dark:text-sky-400" to="/">
          início
        </Link>
        .
      </p>
    </div>
  )
}
