

var expect = chai.expect;
describe('buildfire.deeplink', function () {
    describe('deeplink getData', function () {
        it("deeplink getData should exist and be a function", function () {
            expect(buildfire.deeplink.getData).to.a("function");
        });
    });

});