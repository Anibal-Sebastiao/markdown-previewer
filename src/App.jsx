import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Editor } from './components'
import { Toolbar } from './components';
import { Previewer } from './components'
import {faFreeCodeCamp} from '@fortawesome/free-brands-svg-icons'
import { Row } from 'react-bootstrap';
import placeholder from './placeholder'

function App() {
  const [markdown, setMarkdown] = useState(placeholder)
  const [editorMaximized, setEditorMaximized] = useState(false)
  const [previewMaximized, SetPreviewMaximized] = useState(false)

  const handleEditorMaximize = () => {
    setEditorMaximized(!editorMaximized)
  }

  const handlePreviewMaximize = () => {
    SetPreviewMaximized(!previewMaximized)
    console.log(previewMaximized);
  }

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  return (
    <div className="App container">
      <Row className={previewMaximized ? 'hide' : 'mt-5'}>
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
      </Row>
      
      <Row className={editorMaximized ? 'hide' : 'mt-5'}>
        <div className="bg-dark text-light p-3" >
          <Toolbar 
            title="Previewer" 
            icon={faFreeCodeCamp}
            onClick={handlePreviewMaximize} 
            editorMaximized={previewMaximized}
            />
        </div>
        <div className={
          previewMaximized ? 'wrapper maximazed' : 'wrapper'
        }>
          <Previewer markdown={markdown} />
        </div>
      </Row>

    </div>
  )
}


export default App

