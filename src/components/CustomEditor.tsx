import { useEffect, useState } from 'react';
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  KeyBindingUtil,
  convertToRaw,
  ContentState,
  convertFromRaw,
} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import Icon from '@mui/material/Icon';
// import parse from 'html-react-parser';

import { blockTypeButtons, inlineStyleButtons } from '../data/editorData';

type CustomEditorState = {
  editorState: EditorState;
  editorContentHtml?: string;
};

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
  const [state, setState] = useState<CustomEditorState>({
    editorState: EditorState.createEmpty(),
  });

  const onChange = (editorState: EditorState) => {
    const contentState = editorState.getCurrentContent();
    saveContent(contentState);
    setState({
      editorState,
      editorContentHtml: stateToHTML(contentState),
    });
  };

  const handleKeyCommand = (command: string) => {
    // inline formatting key commands handles bold, italic, code, underline
    const editorState = RichUtils.handleKeyCommand(state.editorState, command);

    // CMD + Shift + X
    if (!editorState && command === 'strikethrough') {
      onChange(RichUtils.toggleInlineStyle(state.editorState, 'STRIKETHROUGH'));
    }
    // CMD + Shift + 9
    else if (!editorState && command === 'blockquote') {
      onChange(RichUtils.toggleBlockType(state.editorState, 'blockquote'));
    }
    // CMD + Shift + 7
    else if (!editorState && command === 'ordered-list') {
      onChange(RichUtils.toggleBlockType(state.editorState, 'ordered-list-item'));
    }
    // CMD + Shift + 8
    else if (!editorState && command === 'unordered-list') {
      onChange(RichUtils.toggleBlockType(state.editorState, 'unordered-list-item'));
    }

    if (editorState) {
      setState({ editorState });
      return 'handled';
    }

    return 'not-handled';
  };

  const toggleInlineStyle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const style = event.currentTarget.getAttribute('data-style');
    onChange(RichUtils.toggleInlineStyle(state.editorState, style!));
  };

  const toggleBlockType = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const block = event.currentTarget.getAttribute('data-block');
    onChange(RichUtils.toggleBlockType(state.editorState, block!));
  };

  const renderBlockButton = (value: string, block: string, icon?: string) => {
    return (
      <button type="button" key={block} data-block={block} onMouseDown={toggleBlockType}>
        {icon ? <Icon>{icon}</Icon> : value}
      </button>
    );
  };

  const renderInlineStyleButton = (style: string, icon: string) => {
    const isActive = state.editorState.getCurrentInlineStyle().has(style);
    return (
      <button
        style={{
          backgroundColor: isActive ? 'black' : 'white',
        }}
        type="button"
        key={style}
        data-style={style}
        onMouseDown={toggleInlineStyle}
      >
        <Icon>{icon}</Icon>
      </button>
    );
  };

  const saveContent = (content: ContentState) => {
    window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
  };

  useEffect(() => {
    const content = window.localStorage.getItem('content');
    if (content) {
      setState({
        editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(content))),
      });
    } else {
      setState({ editorState: EditorState.createEmpty() });
    }
  }, []);

  return (
    <div>
      <div>
        {inlineStyleButtons.map((button) => {
          return renderInlineStyleButton(button.style, button.icon);
        })}
      </div>

      <div>
        {blockTypeButtons.map((button) => {
          return renderBlockButton(button.value, button.block, button.icon);
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
      {/* <h4>Editor content as HTML</h4>
      <pre>{state.editorContentHtml}</pre>
      {state.editorContentHtml && parse(state.editorContentHtml)} */}
    </div>
  );
};

export default CustomEditor;
