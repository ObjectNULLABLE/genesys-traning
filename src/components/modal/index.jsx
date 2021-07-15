import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';

const Modal = ({
  children, closeModal,
}) => (
  <div className={style.modal}>
    <div className={style.modalTitle}>
      <div className={style.title}>{children.title}</div>
      <div
        className={style.cross}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
        onClick={() => closeModal()}
      >
        X
      </div>
    </div>
    <div>
      {children.modalBody}
    </div>
    <div className={style.modalFooter}>
      {children.footer}
    </div>
  </div>

);

Modal.propTypes = {
  children: PropTypes.shape({
    title: PropTypes.string,
    modalBody: PropTypes.element,
    footer: PropTypes.element,
  }),
  closeModal: PropTypes.func,

};

Modal.defaultProps = {
  children: {
    title: 'Default',
    modalBody: <div />,
    footer: <div />,
  },
  closeModal: () => {},
};

export default Modal;
