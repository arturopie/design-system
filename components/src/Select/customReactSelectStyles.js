import { transparentize } from "polished";
import theme from "../theme";
import { subPx } from "../utils";

const getBorderColor = ({ errored, disabled, isOpen, isFocused }) => {
  const { red, lightGrey, blue, grey } = theme.colors;

  if (errored) return red;
  if (disabled) return lightGrey;
  if (isOpen || isFocused) return blue;

  return grey;
};

const getShadow = ({ errored, isOpen }) => {
  if (!isOpen) return null;

  const { focus, error } = theme.shadows;

  if (errored) {
    return error;
  } else {
    return focus;
  }
};

const customStyles = error => {
  return {
    option: (provided, state) => ({
      padding: subPx(theme.space.x1),
      fontWeight: state.isSelected ? theme.fontWeights.medium : theme.fontWeights.normal,
      background: state.isFocused ? theme.colors.lightBlue : null,
      minHeight: theme.space.x4,
      "&:last-child": {
        borderBottomLeftRadius: theme.radii.medium,
        borderBottomRightRadius: theme.radii.medium
      }
    }),
    control: (provided, state) => ({
      display: "flex",
      minHeight: theme.space.x5,
      paddingLeft: theme.space.x1,
      position: "relative",
      fontFamily: theme.fonts.base,
      width: "100%",
      fontSize: theme.fontSizes.medium,
      lineHeight: theme.lineHeights.base,
      background: state.isDisabled ? theme.colors.whiteGrey : theme.colors.white,
      border: `1px solid ${theme.colors.grey}`,
      borderColor: getBorderColor({
        errored: error,
        disabled: state.isDisabled,
        isOpen: state.selectProps.menuIsOpen,
        isFocused: state.isFocused
      }),
      boxShadow: getShadow({ errored: error, isOpen: state.selectProps.menuIsOpen }),
      borderRadius: theme.radii.medium,
      borderBottomLeftRadius: state.selectProps.menuIsOpen ? 0 : theme.radii.medium,
      "&:hover, &:focus": {
        borderColor: getBorderColor({
          errored: error,
          disabled: state.isDisabled,
          isOpen: state.selectProps.menuIsOpen,
          isFocused: true
        })
      }
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isHovered ? theme.colors.blackBlue : theme.colors.grey
    }),
    input: () => ({}),
    valueContainer: provided => ({
      ...provided,
      padding: 0,
      overflow: "auto",
      maxHeight: "150px"
    }),
    menu: (provided, state) => ({
      marginTop: 0,
      position: "absolute",
      zIndex: "100",
      width: "100%",
      background: theme.colors.white,
      borderWidth: "1px",
      borderColor: getBorderColor({
        errored: error,
        isOpen: true,
        disabled: state.isDisabled,
        isFocused: false
      }),
      borderBottomStyle: "solid",
      borderLeftStyle: "solid",
      borderRightStyle: "solid",
      borderRadius: `0 0 ${theme.radii.medium} ${theme.radii.medium}`,
      boxShadow: getShadow({ errored: error, isOpen: true })
    }),
    menuList: provided => ({
      ...provided,
      padding: 0
    }),
    multiValue: provided => ({
      ...provided,
      background: theme.colors.lightGrey,
      color: theme.colors.black,
      margin: `2px ${theme.space.x1} 2px 0`,
      "&:last-child": {
        marginRight: theme.space.half
      }
    }),
    multiValueLabel: () => ({
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      color: theme.colors.black,
      borderRadius: theme.radii.small,
      fontSize: theme.fontSizes.small,
      padding: theme.space.half,
      paddingLeft: theme.space.x1
    }),
    multiValueRemove: provided => ({
      ...provided,
      svg: { fill: theme.colors.black },
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      "&:hover": {
        background: theme.colors.darkGrey,
        cursor: "pointer",
        svg: { fill: theme.colors.white }
      }
    }),
    noOptionsMessage: provided => ({
      ...provided,
      color: theme.colors.black,
      fontSize: "14px"
    }),
    placeholder: (provided, state) => ({
      color: state.isDisabled ? transparentize(0.6667, theme.colors.black) : "hsl(0,0%,50%)"
    })
  };
};

export default customStyles;
