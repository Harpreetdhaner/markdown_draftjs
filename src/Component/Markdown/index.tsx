import React, { Component, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import {draftToMarkdown} from 'markdown-draft-js'
import "./index.css"



type EditorStateChangeHandler = (editorState: EditorState) => void;

interface EditorConvertToMarkdownState {
  editorState?: EditorState;
}

export function EditorConvertToMarkdown(props: any){
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // state: EditorConvertToMarkdownState = {
  //   editorState: undefined,
  // };

  // constructor(props: object) {
  //   super(props);
  //   this.state = {editorState: EditorState.createEmpty()};
  // }
  
  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState)
  };

    return (
      <div className="icon-container">
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
          // toolbarStyle={<toolbarStyleObject>}
        />
        <textarea
          className="text"
          disabled
          value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    );
}






// export const EditorConvertToMarkdown = () => {
//   const [editorState, setEditorState] = useState<any>(undefined);

//   const onEditorStateChange = (editorState: any) => {
//     setEditorState(editorState);
//   };

//   const markdown = editorState ? draftToMarkdown(convertToRaw(editorState.getCurrentContent())) : '';

//   return (
//     <div className='icon-container'>
//       <Editor
//         wrapperClassName="demo-wrapper"
//         editorClassName="demo-editor"
//         onEditorStateChange={this.onEditorStateChange}
//       />
//       <textarea className='text'
//         disabled
//         value={markdown}
//       />
//     </div>
//   );
// };





// import React, { Component } from 'react';
// import { convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToMarkdown from 'draftjs-to-markdown';


// export class EditorConvertToMarkdown extends Component {
//   state = {
//     editorState: undefined,
//   }

//   onEditorStateChange: Function = (editorState:any) => {
//     this.setState({
//       editorState,
//     });
//   };

//   render() {
//     const { editorState } = this.state;
//     return (
//       <div>
//         <Editor
//           wrapperClassName="demo-wrapper"
//           editorClassName="demo-editor"
//           onEditorStateChange={this.onEditorStateChange}
//         />
//         <textarea
//           disabled
//            value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
//         />
//       </div>
//     );
//   }
// }