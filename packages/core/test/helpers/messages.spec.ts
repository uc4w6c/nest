import { expect } from 'chai';
import { HTTP_LISTEN_MESSAGE } from '../../helpers/messages';

describe('messages', () => {
  describe('HTTP_LISTEN_MESSAGE', () => {
    describe('when port is string', () => {
      it('should return port', () => {
        const val = 'http started on port: 3000';
        expect(HTTP_LISTEN_MESSAGE('3000')).to.be.eq(val);
      });
    });
    describe('when port is number', () => {
      it('should return port', () => {
        const val = 'http started on port: 3000';
        expect(HTTP_LISTEN_MESSAGE(3000)).to.be.eq(val);
      });
    });
  });
});
