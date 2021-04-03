const prettierPkg = require("./package.json");
const targetPkg = "../../../package.json";
const pkg = require(targetPkg);
pkg.prettier = prettierPkg.name;
require("fs").writeFileSync(targetPkg, JSON.stringify(pkg, null, 2));
