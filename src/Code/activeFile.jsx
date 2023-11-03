import { useSandpack } from '@codesandbox/sandpack-react'

function App() {

  const { sandpack } = useSandpack();

  return (
    <div>
      activeFile == {sandpack.activeFile}
    </div>
  )
}

export default App
