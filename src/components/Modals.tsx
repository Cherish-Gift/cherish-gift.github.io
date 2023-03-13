import React, { ReactNode, useState } from "react";
import AlertModal from "./AlertModal";
import ModalPortal from "./ModalPortal";
import '../assets/modal.scss';

const fsModal ="fs";
const toastModal ="toast";
const confrimModal ="confrim";
const alertModal ="alert";
const bnModal="bnn";
export type modalType = typeof fsModal | typeof toastModal| typeof confrimModal| typeof alertModal | typeof bnModal |undefined;
/**
 * confirm modal의 yes/no 버튼 type
 */
export type modalBtnType ={
  //btn 의 text node
  text:string, 
  //btn 클릭 시 이동해야 할 페이지의 경로
  path: null | string,
  //btn 클릭 시 창을 닫는지 여부
  close: boolean,
  //btn 클릭 시 이동/창 닫기 외의 필요한 기능
  otherFn : ()=>void | null
};
export type modalStateType ={
  type:modalType,
  title:string|null,
  contents: string|null,
  yesBtn: modalBtnType|null,
  noBtn:modalBtnType|null
}
export const initialModal :modalStateType ={
  type:undefined,
  title:null,
  contents:null,
  yesBtn:null,
  noBtn:null
};
const Modals=()=>{
  const alertModal :modalStateType = {
    type:"alert",
    title:null,
    contents: "alert",
    yesBtn:null,
    noBtn:null
  };
  const [modal, setModal]=useState<modalStateType>(alertModal);
  const closeModal =()=>{setModal(initialModal)}
  /**
   * modal의 value에 띠라 ModalPortal의 child 변경
   */
  const child :ReactNode = 
                <AlertModal 
                  content={modal.contents}
                  closeModal={closeModal} 
                />;
  return(
    <div id="modals">
      {modal.type == undefined &&
      <>
        <button 
          onClick={()=>setModal(alertModal)}
        >
          open alert modal
        </button>
      </> 
      }
    {modal.type !== undefined &&
      <ModalPortal
        child ={child}
      />
    }
    </div>
  )
};

export default React.memo(Modals)