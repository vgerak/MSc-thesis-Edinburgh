function calculateStr(password) {
    //[...]
    // Projection Dictionary attack
    var ppass_str = 0.001;
    combos = Util.get_combinations(options.challenges, password.length);
    for (var i = combos.length - 1; i >= 0; i--) {
        nums = combos[i].split(' ');
        ppass = '';
        for (var pos = 0; pos < options.challenges; pos++) {
            ppass += password[nums[pos] - 1];
        }
        for (var j = guesses['proj_dict'][combos[i]].length - 1; j >= 0; j--) {
            if (ppass === guesses['proj_dict'][combos[i]][j][0]) {
                ppass_str += guesses['proj_dict'][combos[i]][j][1];
                break;
            }
        }
    }
    // Apply penalties (currently only for consecutive same charactes)
    ppass_str = getScoreAfterPenalties(ppass_str, password);
    // Average out on all possible challenges
    ppass_str /= combos.length;
    // Use the inverse as password strength
    ppass_str = 1 / ppass_str;
    // [...]
}