import { useState } from 'react';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';

function keyBindingFunction(event: React.KeyboardEvent<HTMLElement>): string | null {
  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'x') {
    return 'strikethrough';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '7') {
    return 'ordered-list';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '8') {
    return 'unordered-list';
  }

  if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === '9') {
    return 'blockquote';
  }

  return getDefaultKeyBinding(event);
}

const CustomEditor = () => {
  const [state, setState] = useState({
    editorState: EditorState.createEmpty(),
  });
  const onChange = (editorState: EditorState) => {
    setState({ editorState });
  };

  const handleKeyCommand = (command: string) => {
    // inline formatting key commands handles bold, italic, code, underline
    const editorState = RichUtils.handleKeyCommand(state.editorState, command);

    // CMD + Shift + X
    if (!editorState && command === 'strikethrough') {
      onChange(RichUtils.toggleInlineStyle(state.editorState, 'STRIKETHROUGH'));
    }

    if (editorState) {
      setState({ editorState });
      return 'handled';
    }

    return 'not-handled';
  };

  const toggleInlineStyle = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();

    const style = event.currentTarget.getAttribute('data-style');
    setState({
      editorState: RichUtils.toggleInlineStyle(state.editorState, style!),
    });
  };

  const toggleBlockType = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();

    const block = event.currentTarget.getAttribute('data-block');
    setState({
      editorState: RichUtils.toggleBlockType(state.editorState, block!),
    });
  };

  const renderBlockButton = (value: string, block: string) => {
    return (
      <input
        type="button"
        key={block}
        value={value}
        data-block={block}
        onMouseDown={toggleBlockType}
      />
    );
  };

  const renderInlineStyleButton = (value: string, style: string) => {
    return (
      <input
        style={{
          fontStyle: state.editorState.getCurrentInlineStyle().has(style) ? 'italic' : 'normal',
        }}
        type="button"
        key={style}
        value={value}
        data-style={style}
        onMouseDown={toggleInlineStyle}
      />
    );
  };

  const inlineStyleButtons = [
    {
      value: 'Bold',
      style: 'BOLD',
    },

    {
      value: 'Italic',
      style: 'ITALIC',
    },

    {
      value: 'Underline',
      style: 'UNDERLINE',
    },

    {
      value: 'Strikethrough',
      style: 'STRIKETHROUGH',
    },

    {
      value: 'Code',
      style: 'CODE',
    },
  ];

  const blockTypeButtons = [
    {
      value: 'Heading One',
      block: 'header-one',
    },

    {
      value: 'Heading Two',
      block: 'header-two',
    },

    {
      value: 'Heading Three',
      block: 'header-three',
    },

    {
      value: 'Blockquote',
      block: 'blockquote',
    },

    {
      value: 'Unordered List',
      block: 'unordered-list-item',
    },

    {
      value: 'Ordered List',
      block: 'ordered-list-item',
    },
  ];

  return (
    <div>
      <div>
        Inline Styles:
        {inlineStyleButtons.map((button) => {
          return renderInlineStyleButton(button.value, button.style);
        })}
      </div>

      <div>
        Block Types:
        {blockTypeButtons.map((button) => {
          return renderBlockButton(button.value, button.block);
        })}
      </div>
      <div className="editors">
        <Editor
          editorState={state.editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={keyBindingFunction}
        />
      </div>
    </div>
  );
};

export default CustomEditor;
