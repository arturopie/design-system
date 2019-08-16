import styled from "styled-components";
import { space } from "styled-system";
import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon";
import theme from "../theme";
import icons from "../../icons/icons.json";
import { subPx } from "../utils";

const iconNames = Object.keys(icons);

const getSize = size => {
  switch (size) {
    case "small":
      return {
        fontSize: `${theme.fontSizes.small}`,
        lineHeight: `${theme.lineHeights.smallTextCompressed}`,
        padding: `${subPx(theme.space.half)} ${theme.space.x1}`
      };
    case "medium":
      return {
        fontSize: `${theme.fontSizes.medium}`,
        padding: `${subPx(theme.space.x1)} ${theme.space.x2}`
      };
    case "large":
      return {
        fontSize: `${theme.fontSizes.large}`,
        lineHeight: `${theme.lineHeights.subsectionTitle}`,
        padding: `${subPx(theme.space.x2)} ${theme.space.x3}`
      };
    default:
      return {
        fontSize: `${theme.fontSizes.medium}`,
        padding: `${subPx(theme.space.x1)} ${theme.space.x2}`
      };
  }
};

const WrapperButton = styled.button(
  ({ fullWidth }) => ({
    width: fullWidth ? "100%" : "auto"
  }),
  ({ disabled }) => ({
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: theme.fontWeights.medium,
    textDecoration: "none",
    verticalAlign: "middle",
    lineHeight: theme.lineHeights.base,
    transition: "background-color .2s",
    cursor: disabled ? "default" : "pointer",
    color: theme.colors.blue,
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.blue}`,
    borderRadius: theme.radii.medium,
    margin: theme.space.none,
    "&:hover": {
      backgroundColor: disabled ? null : theme.colors.lightBlue
    },
    "&:focus": {
      outline: "none",
      borderColor: theme.colors.blue,
      boxShadow: theme.shadows.focus,
      backgroundColor: theme.colors.white,
      "&:hover": {
        backgroundColor: theme.colors.lightBlue
      }
    },
    "&:active": {
      transform: "scale(0.98)",
      transition: "scale .2s ease-in"
    },
    "&:disabled": {
      opacity: ".5"
    }
  }),
  ({ size }) => ({
    ...getSize(size)
  }),
  space
);

const BaseButton = React.forwardRef(({ children, iconSide, icon, className, ...props }, ref) => {
  const {
    lineHeights: { smallTextCompressed }
  } = theme;
  return (
    <WrapperButton ref={ref} className={className} {...props}>
      {icon && iconSide === "left" && <Icon size={`${smallTextCompressed}em`} mr="half" icon={icon} />}
      {children}
      {icon && iconSide === "right" && <Icon size={`${smallTextCompressed}em`} ml="half" icon={icon} />}
    </WrapperButton>
  );
});

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.oneOf(iconNames),
  iconSide: PropTypes.oneOf(["left", "right"])
};

BaseButton.defaultProps = {
  className: null,
  icon: null,
  iconSide: "right"
};

const Button = styled(BaseButton)({});

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  ...space.propTypes
};

export default Button;
