import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, space, fontSize, fontWeight, lineHeight, textAlign, fontFamily } from 'styled-system'

const Text = styled.p`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${fontFamily}
  ${textAlign}
  -webkit-font-smoothing: antialiased;
  display: ${props => props.inline ? 'inline-block': 'block'}
`
Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
  ...fontFamily.propTypes,
  ...textAlign.propTypes,
  inline: PropTypes.bool,
}

Text.defaultProps = {
  m: 0,
  fontSize: 1,
  lineHeight: 1.5,
  mb: 4
}

export default Text
