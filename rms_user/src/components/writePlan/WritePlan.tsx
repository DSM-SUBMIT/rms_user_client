import React from 'react';
import * as S from './style';

const WritePlan = () => {
    return (
        <S.Main>
            <S.Form>
                <S.Plan>
                    <S.Class>[계획서]</S.Class>
                    <S.Title>보고서 관리 시스템</S.Title>
                    <S.Date>
                        <input type="date" placeholder="시작 예정일을 입력하세요" />
                        <input type="date" placeholder="완료 예정일을 입력하세요" />
                    </S.Date>
                    <S.Purpose>
                        <span>프로젝트 목표</span>
                        <textarea />
                    </S.Purpose>
                    <S.Content>
                        <span>프로젝트 내용</span>
                        <textarea />
                    </S.Content>
                    <S.Result>
                        <span>결과물 (해당사항 선택)</span>
                        <input type="checkbox" />
                    </S.Result>
                </S.Plan>
                <S.ButtonGroup>
                    <button type="button" placeholder="임시저장" />
                    <button type="submit">제출</button>
                </S.ButtonGroup>
            </S.Form>
        </S.Main>
    );
};

export default WritePlan;