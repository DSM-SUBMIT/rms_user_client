import React, { useEffect, FC } from 'react';
import * as S from './style';
import Header from '../header';
import useWritePlan from '../../util/hooks/writePlan';
import { useDispatch } from 'react-redux';
import { GET_SAVE_PLAN, GET_SUBMIT_PLAN } from '../../modules/redux/action/writePlan/interface';
import DetailPlanState from '../../modules/redux/reducer/detailPlan/interface';
export interface InputProps {
    onChange?: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  }

const WritePlan: FC<DetailPlanState> = props=> {
    const {
        content,
        goal,
        includeCode,
        includeOthers,
        includeResultReport,
        includeOutcome,
        plannedEndData,
        plannedStartData,
        projectName,
    } = props;

    const { setState, state } = useWritePlan();
    const dispatch = useDispatch();

    return (
        <>
            <Header/>
            <S.Main>
                <S.Form name="plan" method="post">
                    <S.Plan>
                        <span>[계획서]</span>
                        <S.TitleName>{projectName}</S.TitleName>
                        <S.PlanContent>
                            <span>시작예정과 완료예정</span>
                            <div>
                                <input id="month" type="month" value={state.plannedEndDate} onChange={(e) => {
                                     setState.setPlannedEndDate(e.target.value);
                                }}/>
                                <input id="month" type="month" value={state.plannedStartDate} onChange={(e) => {
                                }}/>
                            </div>
                        </S.PlanContent>
                        <S.PlanContent>
                            <h4>프로젝트 목표</h4>
                            <textarea placeholder="프로젝트의 목표를 작성해주세요" onChange={(e) => {
                                setState.setGoal(e.target.value);
                            }}>{goal}</textarea>
                        </S.PlanContent>
                        <S.PlanContent>
                            <h4>프로젝트 내용</h4>
                            <textarea placeholder="프로젝트의 내용을 구체적으로 작성해주세요" onChange={(e) => {
                                setState.setContent(e.target.value);
                            }}>{content}</textarea>
                        </S.PlanContent>
                        <S.PlanContentResult>
                            <h4>결과물 (해당사항체크)</h4>
                            <S.InputDiv>
                                <div>
                                    <input type="checkbox" id="report" checked={state.includeResultReport} onChange={(e) => {
                                        setState.setIncludeResultReport(e.target.checked);
                                    }}/>
                                    <label htmlFor="report">결과보고서</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="code" checked={state.includeCode} onChange={(e) => {
                                       setState.setIncludeCode(e.target.checked);
                                    }}/>
                                    <label htmlFor="code">프로그램코드</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="video" checked={state.includeOutcome} onChange={(e) => {
                                        setState.setIncludeOutcome(e.target.checked);
                                    }}/>
                                    <label htmlFor="report">실행물(영상 또는 사진)</label>
                                </div>
                                <div>
                                    <input type="text" id="etc" value={state.includeOthers} onChange={(e) => {
                                        setState.setIncludeOthers(e.target.value);
                                    }}/>
                                    <label htmlFor="etc">기타</label>
                                </div>
                            </S.InputDiv>
                        </S.PlanContentResult>
                    </S.Plan>
                    <S.ButtonGroup>
                        <button type="button" onClick={() => {
                            dispatch({ type: GET_SAVE_PLAN});
                        }}>임시저장</button>
                        <button type="button" onClick={() => {
                            dispatch({ type: GET_SUBMIT_PLAN});
                        }}>제출</button>
                    </S.ButtonGroup>
                </S.Form>
            </S.Main>
        </>
    );
};

export default WritePlan;