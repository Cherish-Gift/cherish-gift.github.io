import React, {  useState ,useEffect } from "react";
import AlertModal from "./AlertModal";
import '../../assets/modal.scss';
import ConfrimModal from "./ConfrimModal";

const fsModal ="fs-modal";
const toastModal ="toast-modal";
const confirmModal ="confirm-modal";
const alertModal ="alert-modal";
const bottomNavModal="bottomNav-modal";

export type modalType = typeof fsModal | typeof toastModal| typeof confirmModal| typeof alertModal | typeof bottomNavModal |null;
/**
 * confirm modal의 yes/no 버튼 type
 */
export type modalBtnType ={
  //btn 의 text node
  text:string, 
  //btn 클릭 시 이동해야 할 페이지의 경로
  path: null | string,
  //btn 클릭 시 이동/창 닫기 외의 필요한 기능
  otherFn : (()=>void) | null
};
// 상품 type (임시)
export type itemType ={
  //class1,2 ,agePart,situation,emotion,gender, prefence에 들어갈 세부 type은 추후에 정할 예정 
  goods :{
    class1:string,
    class2:string |null
  },
  price:number,
  onlineStoreUrl: { brand:string | null ,
              kakao :string |null,
              coupang:string |null,
              naver:string |null
            },
  offlineStore : string|null,
  description:string|null ,
  job:{
    class1:string,
    class2:string|null
  },
  // 상품 데이터 구조는 6단계로 추후에 그렇게 진행하면 될 것 같음
  agePart :number ,
  situation:string,
  emotion:string,
  gender:string,
  prefence:string
};
export type modalStateType ={
  type:modalType,
  title:string|null,
  contents: string|null,
  // full screen modal 을 위한 property
  item:itemType|null,
  yesBtn: modalBtnType|null,
  noBtn:modalBtnType|null
}
export const initialModal :modalStateType ={
  type:null,
  title:null,
  contents:null,
  item:null,
  yesBtn:null,
  noBtn:null
};
const Modals=()=>{
  const alertModalState :modalStateType = {
    type:alertModal,
    title:null,
    contents: "alert",
    item:null,
    yesBtn:null,
    noBtn:null
  };
  const confirmModalState :modalStateType = {
    type:confirmModal,
    title:"title",
    contents: "alert",
    item:null,
    yesBtn:{
      text:"yes",
      path:null,
      otherFn:null
    },
    noBtn:{
      text:"no",
      path:null,
      otherFn:null
    }
  };
  const [modal, setModal]=useState<modalStateType>(alertModalState);
  const closeModal =()=>{setModal(initialModal)}

  useEffect(()=>{
    const modalEl = document.querySelector('.modal');
    modal.type !== null && modalEl?.classList.add(modal.type) ;
    if(modal.type === alertModal || modal.type === confirmModal){
      modalEl?.classList.add("background")
    }
    
    return()=>{
      
    }
  },[modal])
  return(
    <div id="modals">
      {modal.type == undefined &&
      <>
        <button 
          type="button"
          onClick={()=>setModal(alertModalState)}
        >
          open alert modal
        </button>
        <button 
          type="button"
          onClick={()=>setModal(confirmModalState)}
        >
          open confirm modal
        </button>
      </> 
      }
    {modal.type === alertModal &&
      <AlertModal
        contents={modal.contents}
        closeModal={closeModal}
      />
    }
    {modal.type ===confirmModal &&
      <ConfrimModal
        modalState={modal}
        closeModal={closeModal}
      />
    }
    </div>
  )
};

export default React.memo(Modals)