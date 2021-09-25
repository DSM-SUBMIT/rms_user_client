import React from 'react';
import * as S from './style';
import { Editor } from '@toast-ui/react-editor';
import Header from '../header';

import '@toast-ui/editor/dist/toastui-editor.css';

const ReportContent = [
    ['I. 프로젝트 진행 동기 및 목적', 'II. 이론적 배경 (기존 사례 또는 문헌 연구 결과)', 'III. 프로젝트 진행 과정', 'IV. 프로젝트 결과', 'V. 결론 및 고찰'],
    ['프로젝트 진행 동기 및 목적을 작성해 주세요', '이론적 배경을 작성해주세요', '프로젝트의 진행 과정을 작성해주세요', '프로젝트의 결과를 작성해주세요', '결론 및 고찰을 작성해주세요']
]

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
                        {Array(5)
                            .fill(0)
                            .map((div, i) => {
                                return(
                                    <S.ReportContent key={i}>
                                        <h3>{ReportContent[0][i]}</h3>
                                        <span>{ReportContent[1][i]}</span>
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