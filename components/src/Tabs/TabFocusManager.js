import React from "react";
import PropTypes from "prop-types";

class TabFocusManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedIndex: 0
    };

    this.handleArrowNavigation = this.handleArrowNavigation.bind(this);
    this.focusNextTab = this.focusNextTab.bind(this);
    this.focusPreviousTab = this.focusPreviousTab.bind(this);
    this.setFocusToTab = this.setFocusToTab.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.focusedIndex !== this.state.focusedIndex) {
      this.updateFocusedTab();
    }
  }

  handleArrowNavigation(e) {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        this.focusPreviousTab();
        break;

      case "ArrowRight":
        e.preventDefault();
        this.focusNextTab();
        break;

      default:
        break;
    }
  }

  setFocusToTab(index) {
    this.setState({
      focusedIndex: index
    });
  }

  focusNextTab() {
    const { tabRefs } = this.props;

    this.setState(prevState => ({
      focusedIndex: prevState.focusedIndex === tabRefs.length - 1 ? 0 : prevState.focusedIndex + 1
    }));
  }

  focusPreviousTab() {
    const { tabRefs } = this.props;

    this.setState(prevState => ({
      focusedIndex: prevState.focusedIndex === 0 ? tabRefs.length - 1 : prevState.focusedIndex - 1
    }));
  }

  updateFocusedTab() {
    const { tabRefs } = this.props;
    const { focusedIndex } = this.state;

    tabRefs[focusedIndex].focus();
  }

  render() {
    const { focusedIndex } = this.state;
    const { children } = this.props;

    return (
      <>
        {children({
          focusedIndex,
          handleArrowNavigation: this.handleArrowNavigation,
          setFocusToTab: this.setFocusToTab
        })}
      </>
    );
  }
}

TabFocusManager.propTypes = {
  children: PropTypes.func.isRequired,
  tabRefs: PropTypes.arrayOf(PropTypes.shape({ current: PropTypes.instanceOf(Element) }))
};

TabFocusManager.defaultProps = {
  tabRefs: undefined
};

export default TabFocusManager;
