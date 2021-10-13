import React, { useEffect } from 'react';
import * as S from './style';
import Header from '../header';
import { Checkbox } from '../../constance/writePlan';
import useWritePlan from '../../util/hooks/writePlan';
import { useDispatch } from 'react-redux';
import { GET_SAVE_PLAN } from '../../modules/redux/action/writePlan/interface';
import { GET_SUBMIT_PLAN } from '../../modules/redux/action/writePlan/interface';
export interface IInputProps {
    onChange?: (e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  }

const WritePlan = () => {
    const { setState, state } = useWritePlan();
    const dispatch = useDispatch();

    const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState.setContent(e.target.value);
    };
    const onChangeGoal = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setState.setGoal(e.target.value);
    };
    const onChangePlannedEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState.setPlannedEndDate(e.target.value);
    };
    const onChangePlannedStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState.setPlannedStartDate(e.target.value);
    };
    const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(Checkbox[0].id === "report") {
            setState.setIncludeResultReport(e.target.checked);
        }
        else if(Checkbox[1].id === "code") {
            setState.setIncludeCode(e.target.checked);
        }
        else if(Checkbox[2].id === "video") {
            setState.setIncludeOutcome(e.target.checked);
        }
        else if(Checkbox[3].id === "etc") {
            setState.setIncludeOthers(e.target.value);
        }
    };

    const SavePlan = () => {
        dispatch({ type: GET_SAVE_PLAN});
    }

    const SubmitPlan =  () => {
        dispatch({ type: GET_SUBMIT_PLAN});
    }

    return (
        <>
            <Header/>
            <S.Main>
                <S.Form name="plan" method="post">
                    <S.Plan>
                        <span>[계획서]</span>
                        <S.TitleName>보고서 관리 시스템</S.TitleName>
                        <S.PlanContent>
                            <span>시작예정과 완료예정</span>
                            <div>
                                <input id="month" type="month" onChange={onChangePlannedStartDate}/>
                                <input id="month" type="month" onChange={onChangePlannedEndDate}/>
                            </div>
                        </S.PlanContent>
                        <S.PlanContent>
                            <h4>프로젝트 목표</h4>
                            <textarea placeholder="프로젝트의 목표를 작성해주세요" onChange={onChangeGoal}></textarea>
                        </S.PlanContent>
                        <S.PlanContent>
                            <h4>프로젝트 내용</h4>
                            <textarea placeholder="프로젝트의 내용을 구체적으로 작성해주세요" onChange={onChangeContent}></textarea>
                        </S.PlanContent>
                        <S.PlanContentResult>
                            <h4>결과물 (해당사항체크)</h4>
                            <S.InputDiv>
                            {Checkbox.map((v, i) => {
                                    return (
                                        <div key={i}>
                                            <input type={v.type} id={v.id} onChange={onChangeCheckbox}/>
                                            <label htmlFor={v.id}>{v.span}</label>
                                        </div>
                                )})}
                            </S.InputDiv>
                        </S.PlanContentResult>
                    </S.Plan>
                    <S.ButtonGroup>
                        <button type="button" onClick={SavePlan}>임시저장</button>
                        <button type="button" onClick={SubmitPlan}>제출</button>
                    </S.ButtonGroup>
                </S.Form>
            </S.Main>
        </>
    );
};

export default WritePlan;