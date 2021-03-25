module.exports = function createDreamTeam(members) {
  let x = "";
  if (!Array.isArray(members)) {
    return false;
  }
  members = members.filter(name => typeof(name) == "string");
  for (let i = 0; i < members.length; i++) {
    members[i] = members[i].trim();
    x += members[i].substring(0,1);
  }
  return x.toLowerCase().split("").sort((a,b) => a.localeCompare(b)).join("").toUpperCase();
};
