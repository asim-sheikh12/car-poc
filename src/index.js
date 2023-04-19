import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import { Stats } from '@react-three/drei'
import { Leva } from 'leva'
import './styles/styles.css'
// import App from './components/Canvas'
import App from './App'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
    <App />
    {/* <Stats /> */}
    <Leva hidden />
  </Suspense>
)
