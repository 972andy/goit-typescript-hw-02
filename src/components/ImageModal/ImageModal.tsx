import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { FC } from 'react';
import { ImageModalProps } from '../types';

Modal.setAppElement('#root');

const ImageModal: FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  modalImgInfo,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      overlayClassName={css.overlay}
      className={css.modal}
    >
      <img
        src={modalImgInfo?.urls.regular}
        alt={modalImgInfo?.alt_description}
        className={css.img}
      />
    </Modal>
  );
};
export default ImageModal;

