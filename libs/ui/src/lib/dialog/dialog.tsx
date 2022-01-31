import { css } from '@emotion/react';
import { useOverlayTriggerState } from '@react-stately/overlays';
import { useState } from 'react';
import { useRef } from 'react';
import { FC } from 'react';
import { useButton } from '@react-aria/button';
import {
  FocusScope,
  OverlayContainer,
  useDialog,
  useModal,
  useOverlay,
  usePreventScroll,
} from 'react-aria';

export type DialogProps = {
  title?: string;
  openButton?: FC;
};

type ModalDialogProps = {
  title: string;
  isOpen: boolean;
  onClose: any;
  isDismissable: boolean;
};

const ModalDialog: FC<ModalDialogProps> = (props) => {
  const ref = useRef(null);
  const { overlayProps, underlayProps } = useOverlay(props, ref);

  usePreventScroll();
  const { modalProps } = useModal();
  const { dialogProps, titleProps } = useDialog({}, ref);

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 100,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...underlayProps}
    >
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          style={{ background: 'white', color: 'block', padding: 12 }}
        >
          <h3 {...titleProps}>{props.title}</h3>
          {props.children}
        </div>
      </FocusScope>
    </div>
  );
};

export const useCustomDialog = () => {
  const state = useOverlayTriggerState({});
  const openButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  const { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef
  );
  const { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => state.close(),
    },
    closeButtonRef
  );

  return {
    state,
    openButtonProps,
    openButtonRef,
    closeButtonProps,
    closeButtonRef,
  };
};

export const Dialog: FC<DialogProps> = (props) => {
  const {
    state,
    openButtonProps,
    openButtonRef,
    closeButtonProps,
    closeButtonRef,
  } = useCustomDialog();

  return (
    <>
      <button {...openButtonProps} ref={openButtonRef}>
        open dialog
      </button>
      {state.isOpen && (
        <OverlayContainer>
          <ModalDialog
            title={props.title ?? ''}
            isOpen
            onClose={state.close}
            isDismissable
          >
            <button {...closeButtonProps} ref={closeButtonRef}>
              close
            </button>
          </ModalDialog>
        </OverlayContainer>
      )}
    </>
  );
};
