var circleCount = [];
var circleMembers = [];

function findCircleNum(M) {
    count = 0;
    for (let i = 0; i < M.length; i++) {

        count += dfs(M, i);
    }
    for (let k = 0; k <= count; k++) {
        circleCount.push(circleMembers);
    }
    console.log(circleCount);
    return count;
}

function dfs(M, i) {
    if (M[i][i] == 0) {
        return 0;
    }
    M[i][i] = 0;
    for (let j = 0; j < M.length; j++) {
        if (M[i][j] == 1) {
            if (M[i][j] == M[j][i])
                circleMembers.push(j);
            M[i][j] = 0;
            M[j][i] = 0;
            dfs(M, j);
        }
    }
    return 1;

}
console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
//console.log(findCircleNum([[1, 1, 0], [1, 1, 1], [0, 1, 1]]));