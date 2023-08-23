import React,  { Component } from 'react'

interface ModalProps {
    isOpen: boolean,
    onClose?: React.MouseEventHandler,
    children?: React.ReactNode
}

export class Modal extends Component<ModalProps> {
  render() {

    const {isOpen, onClose, children} = this.props

    const preference = {
      modalOverlay: isOpen ? 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50' : 'hidden',
      modalContent: isOpen ? 'bg-white p-4 rounded-md shadow-ms grid justify-item center' : 'hidden',
    };
    
    
    return (
      <div className={preference.modalOverlay} onClick={onClose}>
        <div className={preference.modalContent}>
            {children}
        </div>

      </div>
    )
  }
}

export default Modal