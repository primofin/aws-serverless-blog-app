import { DraftEditorCommand, EditorState, RichUtils, Editor } from 'draft-js';
import { useState } from 'react';

const CustomEditor = () => {
  const [state, setState] = useState({
    editorState: EditorState.createEmpty(),
  });

  const handleKeyCommand = (command: DraftEditorCommand) => {
    const newState = RichUtils.handleKeyCommand(state.editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onChange = (editorState: EditorState) => {
    setState({ editorState });
  };

  const onUnderlineClick = () => {
    onChange(RichUtils.toggleInlineStyle(state.editorState, 'UNDERLINE'));
  };

  const onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(state.editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    onChange(RichUtils.toggleInlineStyle(state.editorState, 'ITALIC'));
  };

  return (
    <div className="editorContainer">
      <button onClick={onUnderlineClick}>U</button>
      <button onClick={onBoldClick}>
        <b>B</b>
      </button>
      <button onClick={onItalicClick}>
        <em>I</em>
      </button>
      <div className="editors">
        <Editor
          editorState={state.editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CustomEditor;
