import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import { transparentize } from "polished";
import { SectionTitle } from "../Type";
import { CloseButton } from "../Button";
import theme from "../theme";
import { PreventBodyElementScrolling } from "../utils";

const ModalContent = styled.div({
  marginTop: "-64px",
  marginBottom: "-72px",
  overflow: "auto",
  paddingTop: "88px",
  paddingBottom: "96px",
  paddingLeft: theme.space.x3,
  paddingRight: theme.space.x3
});

const getHeaderPaddingRight = closeButtonIncluded => (closeButtonIncluded ? theme.space.x8 : theme.space.x3);

const ModalHeader = styled.div(({ hasCloseButton }) => ({
  position: "relative",
  padding: `${theme.space.x2} ${getHeaderPaddingRight(hasCloseButton)} ${theme.space.x2} ${theme.space.x3}`,
  backgroundColor: transparentize(0.1, theme.colors.white),
  zIndex: 2,
  borderRadius: `${theme.radii.medium} ${theme.radii.medium} 0 0`,
  ":after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: theme.space.x1,
    right: theme.space.x1,
    display: "block",
    margin: "0 auto",
    borderBottom: `solid 1px ${theme.colors.lightGrey}`
  }
}));

const ModalFooter = styled.div({
  position: "relative",
  padding: `${theme.space.x2} ${theme.space.x3}`,
  backgroundColor: transparentize(0.1, theme.colors.white),
  zIndex: 2,
  borderRadius: `0 0 ${theme.radii.medium} ${theme.radii.medium}`,
  ":after": {
    content: "''",
    position: "absolute",
    top: 0,
    left: theme.space.x1,
    right: theme.space.x1,
    display: "block",
    margin: "0 auto",
    borderBottom: `solid 1px ${theme.colors.lightGrey}`
  }
});

const ModalCloseButton = styled(CloseButton)({
  position: "absolute",
  top: "12px",
  right: theme.space.x2,
  zIndex: 3
});

const StyledReactModal = styled(ReactModal)(
  ({ maxWidth }) => ({
    maxWidth
  }),
  {
    ":focus": {
      outline: "none"
    },
    display: "flex",
    flexDirection: "column",
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radii.medium,
    border: null,
    width: "100%",
    height: "auto",
    maxHeight: `calc(100vh - ${theme.space.x8})`,
    margin: `0px ${theme.space.x2}`,
    padding: 0,
    [`@media only screen and (max-width: ${theme.breakpoints.small})`]: {
      width: "100%",
      maxWidth: "100%"
    },
    button: {
      fontFamily: theme.fonts.base
    },
    "*": {
      boxSizing: "border-box"
    },
    color: theme.colors.black,
    fontFamily: theme.fonts.base,
    fontSize: theme.fontSizes.medium,
    lineHeight: theme.lineHeights.base,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  }
);

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: transparentize(0.5, theme.colors.blackBlue),
  zIndex: theme.zIndex.overlay
};

class Modal extends React.Component {
  modalHasHeader() {
    const { onRequestClose, title } = this.props;
    return onRequestClose || title;
  }

  render() {
    const {
      isOpen,
      children,
      title,
      onRequestClose,
      onAfterOpen,
      shouldFocusAfterRender,
      shouldReturnFocusAfterClose,
      ariaLabel,
      ariaDescribedBy,
      portalClassName,
      overlayClassName,
      className,
      id,
      maxWidth,
      appElement,
      ariaHideApp,
      footerContent
    } = this.props;
    return (
      <StyledReactModal
        maxWidth={maxWidth}
        contentLabel={ariaLabel}
        onRequestClose={onRequestClose}
        onAfterOpen={onAfterOpen}
        shouldFocusAfterRender={shouldFocusAfterRender}
        shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
        isOpen={isOpen}
        portalClassName={portalClassName}
        overlayClassName={overlayClassName}
        className={className}
        id={id}
        aria={{
          labelledby: title ? "modal-title" : undefined,
          describedby: ariaDescribedBy
        }}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        style={{
          overlay: overlayStyle
        }}
        appElement={appElement}
        ariaHideApp={ariaHideApp}
      >
        <PreventBodyElementScrolling>
          {this.modalHasHeader(onRequestClose, title) && (
            <ModalHeader hasCloseButton={onRequestClose}>
              {title ? (
                <SectionTitle id="modal-title" mb="none">
                  {title}
                </SectionTitle>
              ) : (
                <div style={{ height: theme.space.x4 }} />
              )}
              {onRequestClose && <ModalCloseButton onClick={onRequestClose} />}
            </ModalHeader>
          )}
          <ModalContent>{children}</ModalContent>
          {footerContent && <ModalFooter>{footerContent}</ModalFooter>}
        </PreventBodyElementScrolling>
      </StyledReactModal>
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  onRequestClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  shouldFocusAfterRender: PropTypes.bool,
  shouldReturnFocusAfterClose: PropTypes.bool,
  ariaDescribedBy: PropTypes.string,
  maxWidth: PropTypes.string,
  portalClassName: PropTypes.string,
  overlayClassName: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  appElement: PropTypes.element,
  ariaHideApp: PropTypes.bool,
  footerContent: PropTypes.node
};

Modal.defaultProps = {
  isOpen: true,
  title: null,
  ariaLabel: null,
  children: null,
  onRequestClose: null,
  onAfterOpen: null,
  shouldFocusAfterRender: true,
  shouldReturnFocusAfterClose: true,
  ariaDescribedBy: null,
  maxWidth: "624px",
  portalClassName: undefined,
  overlayClassName: undefined,
  className: undefined,
  id: undefined,
  appElement: undefined,
  ariaHideApp: true,
  footerContent: null
};

Modal.setAppElement = ReactModal.setAppElement;

export default Modal;
