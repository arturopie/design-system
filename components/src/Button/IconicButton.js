import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space } from "styled-system";
import { Icon } from "../Icon";
import Text from "../Type/Text";
import theme from "../theme";
import icons from "../../icons/icons.json";

const Wrapper = styled.button(
  space,
  ({ disabled }) => ({
    background: "transparent",
    border: "none",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    padding: `${theme.space.half} ${theme.space.none}`,
    color: theme.colors.darkBlue,
    cursor: disabled ? "arrow" : "pointer",

    [`${Icon}`]: {
      borderRadius: theme.radii.circle,
      transition: ".2s",
    },
    [`${Text}`]: {
      display: "block",
      fontWeight: theme.fontWeights.medium,
      textAlign: "left",
    },
    "&:hover, &:focus": {
      outline: "none",
      [`${Icon}`]: {
        backgroundColor: theme.colors.lightBlue,
      },
    },
    "&:active": {
      [`${Icon}`]: {
        transform: "scale(0.875)",
        transition: ".2s ease-in",
      },
    },
    "&:disabled": {
      opacity: ".5",
      "&:hover, &:active": {
        [`${Icon}`]: {
          background: "none",
          transform: "none",
        },
      },
    },
  })
);

const BaseIconicButton = props => {
  const {
    children,
    icon,
  } = props;

  return (
    <Wrapper label={ children } { ...props }>
      <Icon size={ theme.space.x4 } icon={ icon } p="half" />
      <Text mr="half" ml="half">{ children }</Text>
    </Wrapper>
  );
};

const IconicButton = styled(BaseIconicButton)({});

export const iconNames = Object.keys(icons);

BaseIconicButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOf(iconNames).isRequired,
};

BaseIconicButton.defaultProps = {
  disabled: false,
  children: null,
};

export default IconicButton;
