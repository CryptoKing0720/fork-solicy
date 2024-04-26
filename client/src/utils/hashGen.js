import bcrypt from "bcryptjs";

async function hashGen(args) {
  const hash = await bcrypt.hash(args, 8);
  var res = [];
  hash.replace(/\.(\w+)/g, function (match) {
    res.push(match.slice(1));
  });

  return res.join("");
}

export default hashGen;
