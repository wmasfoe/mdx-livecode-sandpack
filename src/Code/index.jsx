import { Suspense, lazy } from 'react'
import Loading from './Loading'
const CodeComponent = lazy(() => import('./Code'));

function Code(props) {
  return (
    <Suspense fallback={<Loading />}>
      <CodeComponent {...props} />
    </Suspense>
  )
}

export default Code
