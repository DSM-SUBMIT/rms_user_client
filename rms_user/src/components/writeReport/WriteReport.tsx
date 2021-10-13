import React, {useRef, useState} from 'react';
import * as S from './style';
import Header from '../header';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { ReportContentForm } from '../../constance/writeReport';
import useWriteReport from '../../util/hooks/writeReport';
import { useDispatch } from 'react-redux';
import { GET_SAVE_REPORT, GET_SUBMIT_REPORT } from '../../modules/redux/action/writeReport/interface';


const WriteReport = () => {
    const { setState, state } = useWriteReport();
    const dispatch = useDispatch();
    const [editor, setEditor] = useState(1);
    const EditorRef = useRef()

    const onChageContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState.setContent(e.target.value);
    }
    const onChageVideoUrl = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState.setVideoUrl(e.target.value)
    }

    const SaveReport = () => {
        dispatch({type: GET_SAVE_REPORT})
    }

    const SubmitReport = () => {
        if (!EditorRef.current) return;
        // EditorRef.current.getInstance && EditorRef.current.getInstance()
        dispatch({type: GET_SUBMIT_REPORT})
    }


    const AddPage = (event: React.MouseEvent<HTMLElement>) => {
        if (window.confirm("페이지를 추가합니다") === true ) {
            setEditor(prevPage => prevPage + 1);
        }
        else return;
    };
    
    return (
        <>
            <Header/>
            <S.Main>
                <S.Form name="report" method="post">
                    <S.Report>
                        <S.Section>
                            <h5>[보고서]</h5>
                            <S.TitleName>보고서 관리 시스템</S.TitleName>
                            <S.FormDiv>
                                <h4>I. 프로젝트 진행 동기 및 목적</h4>
                                <span className="tab">&#9;</span>
                                <span>1 - 가 - (1) - 가{')'}</span>
                                {ReportContentForm.map((v, i) => {
                                    return (
                                        <div key={i}>
                                            <h4>{ReportContentForm[i]}</h4>
                                            <br/>
                                        </div>
                                    )
                                })}
                            </S.FormDiv>
                        </S.Section>
                        <S.Section>
                            {Array(editor)
                                .fill(0)
                                .map((v, i) => {
                                return (
                                    <S.Section>
                                        <Editor initialEditType="wysiwyg" useCommandShortcut height="800px" key={i} ref={EditorRef.current}/>
                                    </S.Section>
                                )
                            })}
                        </S.Section>
                        <S.AddPage>
                            <S.Button type="button" onClick={AddPage}>페이지 추가</S.Button>
                        </S.AddPage>
                        <S.FileBox>
                            <input type="file" id="file" style={{display:"none"}}/>
                            <label htmlFor="file">파일찾기</label>
                            <input id="uploadName" value="첨부파일" placeholder="제출영상 또는 첨부파일"/>
                        </S.FileBox>
                    </S.Report>
                    <S.ButtonGroup>
                        <S.Button type="button" onClick={SaveReport}>임시저장</S.Button>
                        <S.Button type="button" onClick={SubmitReport}>제출</S.Button>
                    </S.ButtonGroup>
                </S.Form>
            </S.Main>
        </>
    );
};

export default WriteReport;