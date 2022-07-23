import { DraftEditorCommand, EditorState, RichUtils, Editor, DraftBlockType } from 'draft-js';
import { useState } from 'react';
import BlockStyleToolbar, { getBlockStyle } from './blockStyles/BlockStyleToolbar';

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

  const onStrikeThroughClick = () => {
    onChange(RichUtils.toggleInlineStyle(state.editorState, 'STRIKETHROUGH'));
  };

  const toggleBlockType = (blockType: DraftBlockType) => {
    onChange(RichUtils.toggleBlockType(state.editorState, blockType));
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
      <button onClick={onStrikeThroughClick}>abc</button>
      <BlockStyleToolbar editorState={state.editorState} onToggle={toggleBlockType} />
      <div className="editors">
        <Editor
          blockStyleFn={getBlockStyle}
          editorState={state.editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CustomEditor;
