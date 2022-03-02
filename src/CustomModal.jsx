import { Modal, useModalModel } from "@workday/canvas-kit-react/modal";
import { PrimaryButton } from "@workday/canvas-kit-react/button";

export const CustomModal = () => {
  const model = useModalModel();
  return (
    <Modal model={model}>
      <Modal.Target as={PrimaryButton} data-testid={"buttonId"}>
        Open
      </Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon />
          <Modal.Body>
            <div>Show modal</div>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
