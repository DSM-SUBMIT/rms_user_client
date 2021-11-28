import React, { FC, useEffect } from 'react';
import * as S from './style';
import { ModalClose, Github, X } from '../../../assets';
import { Api, Details, GitHub } from '../../../constance/project';
import useUrlModify from '../../../util/hooks/urlModify';
import { useDispatch } from 'react-redux';
import { MODIFY_URL } from '../../../modules/redux/action/porject/interface';
import { GET_MY_PROJECT_CONTENTS } from '../../../modules/redux/action/viewProject/interface';
import useViewMyProject from '../../../util/hooks/viewMyProject';

interface Props {
  setModalOff: (payload: string) => void;
  setModalOn: (payload: string) => void;
}

const OtherModify: FC<Props> = props => {
  const { state, setState } = useUrlModify();
  const stateMyProject = useViewMyProject().state;
  const dispatch = useDispatch();

  const onClickModifyClose = () => {
    props.setModalOff('');
  };

  const onClcikUpload = () => {
    if (state.githubUrl === '') {
      setState.setGithubUrl(stateMyProject.githubUrl);
    }
    if (state.docsUrl === '') {
      setState.setDocsUrl(stateMyProject.docsUrl);
    }
    if (state.serviceUrl === '') {
      setState.setServiceUrl(stateMyProject.serviceUrl);
    }
    dispatch({ type: MODIFY_URL });
    window.location.replace('/mypage');
  };

  const onAddressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setState.setGithubUrl(
        (state.githubUrl !== null ? state.githubUrl : '') +
          (!!state.githubUrl ? ',' : '') +
          e.currentTarget.value +
          '',
      );
      e.currentTarget.value = '';
    }
  };

  const onClickX = (git: string) => {
    setState.setGithubUrl(
      state.githubUrl.replace(git + (state.githubUrl.includes(',') ? ',' : ''), ''),
    );
  };

  useEffect(() => {
    dispatch({ type: GET_MY_PROJECT_CONTENTS });
  }, []);

  useEffect(() => {
    setState.setGithubUrl(stateMyProject.githubUrl);
  }, [stateMyProject.githubUrl]);
  return (
    <>
      <S.SmallModalWrapper>
        <S.ModifyBox>
          <S.Top>
            <img src={ModalClose} onClick={onClickModifyClose} alt='modal close' />
          </S.Top>
          <S.ContentBox>
            <S.GitBox>
              <S.GithubBox>
                <img src={Github} alt='github' />
                <S.GitText>{GitHub}</S.GitText>
              </S.GithubBox>
              <S.GitInput
                placeholder='주소를 입력하세요'
                type='text'
                onKeyPress={e => onAddressKey(e)}
              />
              <S.GitListBox>
                {state.githubUrl &&
                  state.githubUrl
                    .split(',')
                    .filter(item => !!item)
                    .map((git, i) => {
                      return (
                        <S.GitAddressBox key={i}>
                          <span>{git}</span>
                          <img src={X} onClick={() => onClickX(git)} alt='x' />
                        </S.GitAddressBox>
                      );
                    })}
              </S.GitListBox>
            </S.GitBox>
            <S.Address1Box>
              <S.GuitarBox>
                <S.GuitarText>{Api}</S.GuitarText>
                <S.AddressInputBox
                  defaultValue={stateMyProject.serviceUrl}
                  placeholder='주소를 입력하세요'
                  onChange={e => setState.setServiceUrl(e.target.value)}
                ></S.AddressInputBox>
                <S.GuitarText>{Details}</S.GuitarText>
                <S.AddressInputBox
                  defaultValue={stateMyProject.docsUrl}
                  placeholder='주소를 입력하세요'
                  onChange={e => setState.setDocsUrl(e.target.value)}
                />
              </S.GuitarBox>
            </S.Address1Box>
          </S.ContentBox>
          <S.UploadBtn onClick={onClcikUpload}>수정</S.UploadBtn>
        </S.ModifyBox>
      </S.SmallModalWrapper>
    </>
  );
};

export default OtherModify;
