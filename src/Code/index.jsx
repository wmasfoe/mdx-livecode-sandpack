import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  FileTabs,
} from "@codesandbox/sandpack-react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { githubLight as lightTheme } from '@codesandbox/sandpack-themes'
import darkTheme from './theme.json'
import ActiveFile from './activeFile';
import { useTheme } from './useTheme'
import { baseFiles as setupFile } from './baseFile'

const files = {
  ...setupFile,
  '/App.js': `import './__baseStyle.css';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
export default App;`,
  '/utils.js': `export const add = (a, b) => a + b;`
};

const Code = (props) => {
  const {
    children
  } = props

  const { isDark } = useTheme()

  return (
    <SandpackProvider template="react" files={files} theme={isDark ? darkTheme : lightTheme}>
      <SandpackLayout>
        <FileTabs className="q-file-tabs" />
        <SandpackCodeEditor
          showTabs={false}
          showLineNumbers={false}
          showInlineErrors
          wrapContent
          closableTabs
          showRunButton
          extensions={[autocompletion()]}
          extensionsKeymap={[completionKeymap]}
        />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  )
};

export default Code
