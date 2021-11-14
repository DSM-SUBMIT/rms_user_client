import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { createRef, FC } from 'react';
import { setContent } from '../../modules/redux/action/writePlan';

interface EditorItemProps{
    page: number;
    content: string[]
    setContent: (payload: string[]) => void;
}
const EditorItem: FC<EditorItemProps> = ({page, content, setContent}) => {
    const ref = createRef<Editor>();
    const editorChangeHandler = () => {
        const editorInstance = ref.current?.getInstance();
        const html = editorInstance?.getHTML().toString() || '';
        const temp = [...content];
        temp.splice(page, 1, html);
        setContent(temp);
    }
    return( 
        <Editor onChange={editorChangeHandler} ref={ref} height="600px"></Editor>
    )
}

export default EditorItem;
