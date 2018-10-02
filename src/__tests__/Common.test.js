import isEmpty from '../utils/Common'

describe('Common', () => {
   
    it('should empty', () => {
        expect(isEmpty(null)).toBe(true);
    });

});
