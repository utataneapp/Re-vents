import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../api/re-dux/modalSlice";
import { Modal } from "semantic-ui-react";

type Props = {
  children: ReactNode;
  size: "mini" | "tiny" | "small" | "large" | "fullscreen" | undefined;
  header: string;
};

export default function ModalWrapper({ children, size, header }: Props) {
  const dispatch = useDispatch();

  return (
    <Modal open={true} onClose={() => dispatch(closeModal())} size={size}>
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
}
