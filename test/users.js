"use strict";

const User = require("../public/js/users");
const expect = require("chai").expect;

describe("User module", () => {
    describe("\"up\"", () => {
        it("should export a function", () => {
            const upResults = User.up();
            expect(upResults.then).to.be.a("Function");
            expect(upResults.catch).to.be.a("Function");
        });
    });
});