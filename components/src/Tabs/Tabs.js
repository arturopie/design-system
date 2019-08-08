import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import ReactResizeDetector from "react-resize-detector";
import theme from "../theme";
import TabFocusManager from "./TabFocusManager";
import TabScrollIndicators from "./TabScrollIndicators";

const TabContainer = styled.div({
  display: "flex",
  whiteSpace: "nowrap",
  overflowX: "scroll",
  overflowY: "hidden",
  "::-webkit-scrollbar": {
    display: "none"
  },
  position: "relative",
  "&:before": {
    content: "''",
    backgroundColor: theme.colors.grey,
    height: "1px",
    display: "block",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  }
});

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    const { defaultSelectedIndex } = this.props;

    this.state = {
      selectedIndex: defaultSelectedIndex === null ? null : defaultSelectedIndex
    };

    this.tabContent = [];
    this.tabContainerRef = React.createRef();
    this.tabRefs = [];
    this.handleTabClick = this.handleTabClick.bind(this);
    this.onResize = this.onResize.bind(this);
    this.getTabs = this.getTabs.bind(this);
  }

  componentDidMount() {
    this.forceUpdate();
  }

  onResize() {
    this.forceUpdate();
  }

  getTabs(setFocusToTab, focusedIndex) {
    const { fitted, children } = this.props;
    const { selectedIndex } = this.state;

    const tabs = React.Children.map(children, (tab, index) =>
      React.cloneElement(tab, {
        onClick: tab.props.onClick
          ? tab.props.onClick
          : () => {
              setFocusToTab(index);
              this.handleTabClick(index);
            },
        onFocus: e => {
          e.stopPropagation();
        },
        index,
        tabIndex: index === focusedIndex ? 0 : -1,
        selected: index === selectedIndex,
        "aria-selected": index === selectedIndex,
        fullWidth: fitted,
        ref: ref => {
          this.tabRefs[index] = ref;
        }
      })
    );

    return tabs;
  }

  getTabContent() {
    const { children, renderTabContentOnlyWhenSelected, tabContentClassName } = this.props;
    const { selectedIndex } = this.state;

    const tabContent = React.Children.map(children, (tab, index) => {
      const selected = index === selectedIndex;
      if (renderTabContentOnlyWhenSelected && !selected) {
        return null;
      } else {
        return (
          <div className={tabContentClassName} aria-hidden={!selected} hidden={!selected} selected={selected}>
            {tab.props.children}
          </div>
        );
      }
    });
    return tabContent;
  }

  handleTabClick(index) {
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    const { className } = this.props;

    return (
      <>
        <TabFocusManager tabRefs={this.tabRefs}>
          {({ handleArrowNavigation, setFocusToTab, focusedIndex }) => (
            <TabScrollIndicators tabRefs={this.tabRefs} tabContainerRef={this.tabContainerRef}>
              {({ handleScroll }) => (
                <TabContainer
                  className={className}
                  role="tablist"
                  onScroll={handleScroll}
                  onKeyDown={handleArrowNavigation}
                  ref={this.tabContainerRef}
                >
                  <ReactResizeDetector handleWidth onResize={this.onResize} />
                  {this.getTabs(setFocusToTab, focusedIndex)}
                </TabContainer>
              )}
            </TabScrollIndicators>
          )}
        </TabFocusManager>
        {this.getTabContent()}
      </>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tabContentClassName: PropTypes.string,
  defaultSelectedIndex: PropTypes.number,
  renderTabContentOnlyWhenSelected: PropTypes.bool,
  fitted: PropTypes.bool
};

Tabs.defaultProps = {
  children: null,
  className: null,
  tabContentClassName: null,
  defaultSelectedIndex: null,
  renderTabContentOnlyWhenSelected: false,
  fitted: false
};

export default Tabs;
