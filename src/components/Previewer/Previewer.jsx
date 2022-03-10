import hljs from 'highlight.js';
import { marked } from 'marked'

marked.setOptions({
  breaks: true,
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  }
});

const renderer = new marked.Renderer();

const Previewer = ({markdown}) => {
    return (
      <div className="p-10"
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer: renderer })
        }}
        id="preview"
      />
    );
};

export default Previewer;