import { Suspense, lazy } from 'react'

const Code = lazy(() => import('./Code'));

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Code />
    </Suspense>
  )
}

export default App
