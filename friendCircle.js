
circleMembers = [];
circleSocial = []; // group of direct or indirect friends 
var findCircleNum = function (M) {
    let visited = new Set();
    let count = 0;


    for (let person = 0; person < M.length; person++) {
        if (!visited.has(person)) {
            dfs(M, person, visited);
            circleSocial.push(circleMembers);
            count++

        }
    }

    console.log('circleMember:', circleMembers);
    console.log('social:', circleSocial);

    return count;


};

function dfs(M, person, visited) {
    if (visited.has(person)) { return; }

    visited.add(person);
    let friends = M[person]
    // console.log(friends);
    // console.log(visited);
    circleMembers = [];
    for (let j = 0; j < M.length; j++) {
        if (M[person][j] === 1 && M[person][j] === M[j][person]) {
            if (!circleMembers.includes(j)) {
                circleMembers.push(j);
            }
            console.log(circleMembers);
            dfs(M, j, visited);
        }

    }
}

//console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(findCircleNum([[1, 1, 0], [1, 1, 1], [0, 1, 1]]));

// Example test:    '[ [1,1,0], [1,1,0], [0,0,1] ]' 
// WRONG ANSWER  (got 0,1 expected 0,1|2) 

// Example test:    '[ [1,1,0], [1,1,1], [0,1,1] ]' 
// WRONG ANSWER  (got 0 expected 0,1,2) 