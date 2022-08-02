import { useSelector } from "react-redux";
import TestModal from "../../../../features/events/sandbox/TestModal";
import { RootState } from "../../../api/re-dux/store";
import LoginForm from "../../../../features/events/auth/LoginForm";

export default function ModalManager() {
  const modalLookup = {
    TestModal: TestModal,
    LoginForm: LoginForm,
  };
  const currentModal = useSelector((state: RootState) => state.modals);
  let renderedModal;
  if (currentModal) {
    const { modalTypes, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalTypes];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
}
