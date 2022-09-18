import useResource from '../hooks/useResource'
import { useAuth } from '../contexts/auth'

export default function Footer({ reports }) {
  const { user } = useAuth()
  const { resources } = useResource()

  return (
    <footer className="px-5 py-3 bg-emerald-500">
      <p className="text-sm text-center">{resources && resources.length} Locations World Wide</p>
    </footer>
  );
}