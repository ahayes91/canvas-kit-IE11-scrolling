import React from "react";
import { PrimaryButton } from "@workday/canvas-kit-react/button";
import { Modal, useModalModel } from "@workday/canvas-kit-react/modal";

// const PrimaryButtonWithWrapper = ({ children, ...props }) => (
//   <PrimaryButton {...props}>{children}</PrimaryButton>
// );

const PrimaryButtonWithWrapper = React.forwardRef(
  ({ children, ...props }, ref) => (
    <PrimaryButton ref={ref} {...props}>
      {children}
    </PrimaryButton>
  )
);

export const ModalWithWrapper = () => {
  const model = useModalModel();
  return (
    <Modal model={model}>
      <Modal.Target as={PrimaryButtonWithWrapper} data-testid={"buttonId"}>
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
