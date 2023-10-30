import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import theme from './theme.json'
const previewColor = theme.colors.surface1

const baseFiles = {
  '/__baseStyle.css': {
    code: `
    :root {
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;
    
      color-scheme: light dark;
      color: rgba(255, 255, 255, 0.87);
      background-color: ${previewColor};
    
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-text-size-adjust: 100%;
    }
    
    body {
      margin: 0;
    }
    
    @media (prefers-color-scheme: light) {
      :root {
        color: #213547;
        background-color: #ffffff;
      }
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
    `,
    readOnly: true,
    active: false,
    hidden: true
  }
}

const files = {
  ...baseFiles,
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

const Code = () => (
  <SandpackProvider template="react" files={files} theme={theme}>
    <SandpackLayout>
      <SandpackCodeEditor
        showTabs
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
);

export default Code
