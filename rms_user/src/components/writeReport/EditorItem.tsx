import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import React, { createRef, FC, useEffect } from 'react';
import { setContent } from '../../modules/redux/action/writePlan';
import { isNoSubstitutionTemplateLiteral } from 'typescript';

interface EditorItemProps {
  page: number;
  content: Array<string>;
  setContent: (payload: string[]) => void;
}
const EditorItem: FC<EditorItemProps> = ({ page, content, setContent }) => {
  const ref = createRef<Editor>();
  // let div = document.createElement('div');
  // div.innerHTML = (content[page]);
  useEffect(() => {
    const editorInstance = ref.current?.getInstance();
    (editorInstance?.setHTML(content[page]) as unknown) as string;
  }, []);

  const editorChangeHandler = () => {
    const editorInstance = ref.current?.getInstance();
    const html = editorInstance?.getHTML().toString() || '';
    const temp = [...content];
    temp.splice(page, 1, html);
    setContent(temp);
  };
  return <Editor onChange={editorChangeHandler} ref={ref} height='600px'></Editor>;
};

export default EditorItem;
