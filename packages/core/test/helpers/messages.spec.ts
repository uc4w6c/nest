import { expect } from 'chai';
import { HTTP_LISTEN_MESSAGE } from '../../helpers/messages';

describe('messages', () => {
  describe('HTTP_LISTEN_MESSAGE', () => {
    it('should return port', () => {
      const val = 'Server is listening on: http://127.0.0.1:3000';
      expect(HTTP_LISTEN_MESSAGE('http://127.0.0.1:3000')).to.be.eq(val);
    });
  });
});
