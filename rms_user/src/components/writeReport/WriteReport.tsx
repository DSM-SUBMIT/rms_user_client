import React, { useState, FC, useEffect, createRef, useMemo } from 'react';
import * as S from './style';
import Header from '../header';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { ReportContentForm } from '../../constance/writeReport';
import useWriteReport from '../../util/hooks/writeReport';
import { useDispatch } from 'react-redux';
import {
  GET_SAVE_REPORT,
  GET_SUBMIT_REPORT,
} from '../../modules/redux/action/writeReport/interface';
import { useHistory } from 'react-router';
import EditorItem from './EditorItem';

interface Props {
  projectName: string;
}

const WriteReport: FC<Props> = props => {
  const history = useHistory();
  const { setState, state } = useWriteReport();
  const { content, isSuccessSave, isSuccessSubmit, videoUrl } = state;
  const { setContent, setVideoUrl } = setState;
  const { projectName } = props;

  const dispatch = useDispatch();
  const [editor, setEditor] = useState(1);
  const EditorRef = createRef<Editor>();

  useEffect(() => {
    if (isSuccessSave) alert('보고서 임시저장을 성공하였습니다.');
    else if (isSuccessSave === false) alert('보고서 임시저장을 실패하였습니다.');
  }, [isSuccessSave]);

  useEffect(() => {
    if (isSuccessSave) {
      if (isSuccessSubmit) {
        alert('보고서 제출을 성공하였습니다.');
        history.push('/mypage');
        window.location.reload();
      } else if (isSuccessSubmit === false) alert('보고서 제출을 실패하였습니다.');
    }
  }, [isSuccessSave, isSuccessSubmit]);

  const SaveReport = () => {
    const editorInstance = EditorRef.current?.getInstance();
    if (window.confirm('보고서를 임시저장합니다') === true) {
      const contents = editorInstance?.getHTML() || '';
      dispatch({ type: GET_SAVE_REPORT });
    } else return;
  };

  const submitReport = () => {
    if (window.confirm('보고서를 제출합니다') === true) {
      dispatch({ type: GET_SUBMIT_REPORT });
    } else return;
  };

  const AddPage = (event: React.MouseEvent<HTMLElement>) => {
    if (window.confirm('페이지를 추가합니다') === true) {
      setEditor(prevPage => prevPage + 1);
    } else return;
  };

  return (
    <>
      <Header />
      <S.Main>
        <S.Form name='report' method='post'>
          <S.Report>
            <S.Section>
              <h5>[보고서]</h5>
              <S.TitleName>{projectName}</S.TitleName>
              <S.FormDiv>
                <h4>I. 프로젝트 진행 동기 및 목적</h4>
                <span className='tab'>&#9;</span>
                <span>1 - 가 - (1) - 가{')'}</span>
                {ReportContentForm.map((v, i) => {
                  return (
                    <div key={i}>
                      <h4>{ReportContentForm[i]}</h4>
                      <br />
                    </div>
                  );
                })}
              </S.FormDiv>
            </S.Section>
            <S.Section>
              {Array(editor)
                .fill(0)
                .map((v, i) => (
                  <EditorItem content={content} page={i} setContent={setContent} />
                ))}
            </S.Section>
            <S.AddPage>
              <S.Button type='button' onClick={AddPage}>
                페이지 추가
              </S.Button>
            </S.AddPage>
            <S.FileBox>
              <label htmlFor='file'>
                파일찾기
                <input
                  type='file'
                  id='file'
                  style={{ display: 'none' }}
                  onChange={e => {
                    setVideoUrl(e.target.value);
                  }}
                />
              </label>
              <p id='uploadName'>{videoUrl}</p>
            </S.FileBox>
          </S.Report>
          <S.ButtonGroup>
            <S.Button type='button' onClick={SaveReport}>
              임시저장
            </S.Button>
            <S.Button type='button' onClick={submitReport}>
              제출
            </S.Button>
          </S.ButtonGroup>
        </S.Form>
      </S.Main>
    </>
  );
};

export default WriteReport;
