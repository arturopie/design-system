import { lineHeightRatio } from './utils';

const fontSizeMd = 16;
const fontSizeSm = 10;
const lineHeightMd = 24;
const lineHeightSm = 20;
const _ = undefined;

const theme = {
  font: {
    size: { 
      medium: fontSizeMd,
      small: fontSizeSm,
    },
    lineHeight: { 
      target: { 
        medium: lineHeightMd,
        small: lineHeightSm,
      }
    }
  }
}
describe('utils', () => {
  describe('lineHeightRatio', () => {
    describe('given a font size and line height', () => {
      it('calculates a line-height ratio', () => {
        expect(lineHeightRatio('small', 'small')({ theme })).toEqual(lineHeightSm/fontSizeSm);
      });
    });
    describe('given a font size and no line height', () => {
      it('calculates a line-height ratio with a medium line height', () => {
        expect(lineHeightRatio('small')({ theme })).toEqual(lineHeightMd/fontSizeSm);
      });
    });
    describe('given a line height and no font size', () => {
      it('calculates a line-height ratio with a medium font size', () => {
        expect(lineHeightRatio(_, 'small')({ theme })).toEqual(lineHeightSm/fontSizeMd);
      });
    });
  });
});