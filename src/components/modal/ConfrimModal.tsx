import React from "react";
import Modal from "./Modal";
import { modalStateType } from "./Modals";

type ConfirmModalProps ={
  modalState:modalStateType,
  closeModal:()=>void
};
const ConfrimModal=({modalState, closeModal}:ConfirmModalProps)=>{
  return ( 
    <Modal>
      {modalState.title !== null &&
        <div className="title">
          {modalState.title}
        </div>
      }
      <div className="contents">
        {modalState.contents}
      </div>
      <div className="btns">
        <button 
          type ="button"
          className="btn-yes"
          onClick={closeModal}
        >
          {modalState.yesBtn?.text}
        </button>
        <button 
          type ="button"
          className="btn-no"
          onClick={closeModal}
        >
          {modalState.noBtn?.text}
        </button>
      </div>
    </Modal>
  )
};
export default React.memo(ConfrimModal)