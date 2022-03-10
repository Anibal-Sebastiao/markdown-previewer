import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Editor } from './components'
import { Toolbar } from './components';
import {faFreeCodeCamp} from '@fortawesome/free-brands-svg-icons'


function App() {
  const [markdown, setMarkdown] = useState([])
  const [editorMaximized, setEditorMaximized] = useState(false)

  const handleEditorMaximize = () => {
    setEditorMaximized(!editorMaximized)
  }

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  return (
    <div className="App container pt-5">
      <div className="bg-dark text-light p-3">
        <Toolbar 
          title="Editor" 
          icon={faFreeCodeCamp}
          onClick={handleEditorMaximize} 
          editorMaximized={editorMaximized}
          />
      </div>
      <div className={editorMaximized ? 'wrapper maximazed' : 'wrapper'}>
        <Editor markdown={markdown} onChange={handleChange}></Editor>
      </div>
    </div>
  )
}

export default App
