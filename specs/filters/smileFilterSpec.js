describe('smileTest', function () {
    var filter;
    beforeEach(module('app'));

    describe('smile', function() {

        it('should convert boolean values to unicode checkmark or cross',
            inject(function(smileFilter) {
                expect(smileFilter(-1)).toBe('-1 :(');
                expect(smileFilter(1)).toBe('1 :)');
            }));
    });
});