function letterCount(pw){
    var s = pw.match(/(.)\1{2,}/g) || [];
    return s.map(function(itm){
      return [itm.charAt(0), itm.length];
    });
}

function getScoreAfterPenalties(ppassStr, pw) {
  // Penalties
  // Consecutive letters
  var consecutives = letterCount(pw);
  for (var i = consecutives.length - 1; i >= 0; i--) {
    ppassStr += consecutives[i][1] * options.consec_penalty;
  }
  return ppassStr;
}