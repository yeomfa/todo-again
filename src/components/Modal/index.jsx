import { createPortal } from 'react-dom';
import './Modal.css';

const modalElement = document.getElementById('modal');

export function Modal({ children }) {
  return createPortal(<div className="modal">{children}</div>, modalElement);
}
