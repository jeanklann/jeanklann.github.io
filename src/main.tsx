import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Curriculo from './Curriculo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Curriculo />
  </StrictMode>,
)
