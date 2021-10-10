import React, {useState} from 'react';
import * as S from './style';
import { Editor } from '@toast-ui/react-editor';
import Header from '../header';
import { ReportContentForm } from '../../constance/writeReport'

import '@toast-ui/editor/dist/toastui-editor.css';

const WriteReport = () => {

    const [editor, setEditor] = useState(1);
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
                                        <Editor initialEditType="wysiwyg" useCommandShortcut height="800px" key={i}/>
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
                        <S.Button type="button">임시저장</S.Button>
                        <S.Button type="button">제출</S.Button>
                    </S.ButtonGroup>
                </S.Form>
            </S.Main>
        </>
    );
};

export default WriteReport;