import Index from './pages/Routes'
import './config/global'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.scss'
import ScreenLoader from './components/ScreenLoader'
import { useAuth } from './context/Auth'
function App() {
  const { isAppLoading } = useAuth()

  return (
    <>
      {
        isAppLoading
          ? <ScreenLoader />
          : <Index />
      }
    </>
  )
}

export default App
