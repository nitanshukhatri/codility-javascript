var findCircleNum = function (M) {

    let myFriends = {};

    // get all friends for given person
    // make a hashmap of it
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M[0].length; j++) {
            if (i === j) {
                continue;
            }

            if (M[i][j] === 1) {

                if (!myFriends[i]) {
                    myFriends[i] = [];
                }

                myFriends[i].push(j);
            }
        }

        // there are no friend for this person.. poor fellow..
        if (!myFriends[i]) {
            myFriends[i] = [];
        }

    }
    console.log(myFriends);


    // now starting with 0th person
    // loop through its friend... then the friends of friend.. recursively..
    // and form a friend circle
    function myFriendsCircles(M) {

        let q = [];
        for (var key in M) {
            if (M[key] != -1) {
                let newArr = [];
                newArr.push(+key);

                util(0, newArr);

                newArr.map(function (e) { M[e] = -1; return e; });
                q.push(newArr);
            }
        }

        // q.length will give us the total number of friend circles
        return q.length;

        function util(pos, newArr) {

            if (pos === newArr.length) {
                return;
            }

            M[newArr[pos]].forEach(function (frnd) {
                if (!newArr.includes(frnd)) {
                    newArr.push(frnd);
                }
            });

            util(pos + 1, newArr);
        }

    }


    return myFriendsCircles(myFriends);

};

console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])); 