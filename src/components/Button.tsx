import React, {ReactNode,ButtonHTMLAttributes, CSSProperties } from 'react';
import axios from "axios";

//ButtonProps는 ButtonHTMLAttributes<HTMLButtonElement> 상속받았기 때문에 
// button 태그에 대한 모든 속성을 props 사용 가능. 이외의 속성은 따로 선언.

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClickAction?: () => void; // 버튼 클릭 시 실행될 함수
  to?: string; // 버튼 클릭 시 이동할 페이지 주소
  fetchUrl?: string; // 버튼 클릭 시 axios로 요청을 보낼 URL
  fetchConfig?: object; // axios 요청에 대한 설정(예: method, headers 등)
  onSuccess?: (response: any) => void; // axios 요청 성공 시 실행될 함수
  onError?: (error: any) => void; // axios 요청 실패 시 실행될 함수
  style?: CSSProperties; //button의 style지정.
};

const Button = ({
  children,
  onClickAction,
  to,
  fetchUrl,
  fetchConfig,
  onSuccess,
  onError,
  style,
  ...rest
}:Props) => {

  const handleClick = () => {
    if (onClickAction) {
      onClickAction();
    }
    if (to) {
      window.location.href = to;
    }
    if (fetchUrl) {
      axios(fetchUrl, fetchConfig)
        .then((response) => {
          if (onSuccess) {
            onSuccess(response);
          }
        })
        .catch((error) => {
          if (onError) {
            onError(error);
          }
        });
    }
  };

  return (
    <>
      <button {...rest} onClick={handleClick} style={style}>
        {children}
      </button>
    </>
  );
};

export default Button;
