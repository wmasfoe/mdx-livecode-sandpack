import darkTheme from './theme.json'

// 预览的暗模式背景色
const previewColor = darkTheme.colors.surface1

// 每个 sandpack 实例都需要 merge 这个file，用来设置 preview的基本样式
export const baseFiles = {
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