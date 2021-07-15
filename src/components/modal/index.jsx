import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './style.module.scss';
import { addSourceAction } from '../../features/sources/sourcesSlice';
import Button from '../button';

const Modal = ({
  children, isShow, closing, sourceData,
}) => {
  const dispatch = useDispatch();

  const addSource = (name, shortName, description, lang) => {
    const note = {
      name,
      shortName,
      description,
      lang,
    };
    dispatch(addSourceAction(note));
    closing();
  };

  return (
    <div style={isShow ? { display: 'block' } : { display: 'none' }} className={style.modal}>
      <div className={style.modalTitle}>
        <div className={style.title}>{children.title}</div>
        <div
          className={style.cross}
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
          onClick={() => closing()}
        >
          X
        </div>
      </div>
      <div>
        {children.modalBody}
      </div>
      <div className={style.modalFooter}>
        <Button
          className={style.buttonSubmit}
          onClick={() => {
            addSource(
              sourceData.name, sourceData.shortName, sourceData.description, sourceData.lang.value,
            );
          }}
          caption="Add new"
        />
      </div>
    </div>

  );
};

Modal.propTypes = {
  children: PropTypes.shape({
    title: PropTypes.string,
    modalBody: PropTypes.element,
  }),
  isShow: PropTypes.bool,
  closing: PropTypes.func,
  sourceData: PropTypes.objectOf({
    name: PropTypes.string,
    shortName: PropTypes.string,
    description: PropTypes.string,
    lang: PropTypes.string,
  }),
};

Modal.defaultProps = {
  children: {
    title: 'Default',
    modalBody: <div />,
  },
  isShow: false,
  closing: () => {},
  sourceData: PropTypes.objectOf({
    name: 'name',
    shortName: 'shortname',
    description: 'description',
    lang: 'lang',
  }),
};

export default Modal;
