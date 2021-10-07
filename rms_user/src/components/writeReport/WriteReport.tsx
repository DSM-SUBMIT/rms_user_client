import React from 'react';
import * as S from './style';
import { Editor } from '@toast-ui/react-editor';
import Header from '../header';
import { ReportForm } from '../../constance/writeReport'

import '@toast-ui/editor/dist/toastui-editor.css';

const WriteReport = () => {
    return (
        <>
            <Header/>
            <S.Main>
                <S.Form name="report" method="post">
                    <S.Report>
                        <h5>[보고서]</h5>
                        <S.TitleName>보고서 관리 시스템</S.TitleName>
                        <S.ReportContent>
                            <h5>프로젝트 주제를 작성해주세요</h5>
                            <textarea placeholder="프로젝트의 주제를 작성해주세요"></textarea>
                        </S.ReportContent>
                        {ReportForm.map((v, i) => {
                                return(
                                    <S.ReportContent key={i}>
                                        <h3>{v[i]}</h3>
                                        <span>{v[i]}</span>
                                        <Editor initialEditType="wysiwyg" useCommandShortcut height="600px" />
                                    </S.ReportContent>
                            )})}
                        <S.ReportContent>
                            <h5>[참고문헌]</h5>
                            <textarea></textarea>
                        </S.ReportContent>
                        <S.FileBox>
                            <input type="file" id="file" style={{display:"none"}}/>
                            <label htmlFor="file">파일찾기</label>
                            <input id="uploadName" value="첨부파일" placeholder="첨부파일"/>
                        </S.FileBox>
                    </S.Report>
                    <S.ButtonGroup>
                        <button type="button">임시저장</button>
                        <button type="button">제출</button>
                    </S.ButtonGroup>
                </S.Form>
            </S.Main>
        </>
    );
};

export default WriteReport;