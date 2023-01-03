const author = require("./index");

const AUTHOR_NAME = "Jorge Madson";

function test() {
  return author() === AUTHOR_NAME;
}

test();
