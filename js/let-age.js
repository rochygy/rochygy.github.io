let age = 33;
let canVote;
if (age < 18) {
  canVote = false;
} else {
  canVote = true;
}
console.log(canVote);

canVote = age < 18 ? false : true;
console.log(canVote);
