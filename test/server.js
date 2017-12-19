const server = require("../bin/www").server,
    http = require("http");
expect = require("chai").expect;

describe("/", function () {
    it("should return 200", function (done) {
        http.get("http://localhost:3000", function (res) {
            expect(res.statusCode).to.equal(200);
            done();
        });

        after(function () {
            server.close();
        });
    });
});