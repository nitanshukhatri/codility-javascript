function unionFind(n) {
    this.parents = new Array(n);
    this.circleCount = 0;

    for (let i = 0; i < n; i++) {
        this.parents[i] = i;
    }

    this.find = function (x) {
        if (this.parents[x] == x) {
            return x;
        }
        return this.parents[x] = this.find(this.parents[x]);
    }

    this.union = function (a, b) {
        let groupA = this.find(a);
        let groupB = this.find(b);
        if (groupA !== groupB) {
            this.parents[groupA] = groupB;
            this.circleCount--;
        }
    }
}

function solution(M) {
    if (M.length == 0 || M[0].length == 0) {
        return 0;
    }
    let m = M.length;
    let n = M[0].length;

    this.unionFin = new unionFind(m * n)

    this.unionFin.circleCount = m;
    console.log(unionFin);


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (M[i][j] = 1 || i != j) {
                this.unionFin.union(i, j);
            }
        }
    }
    return this.unionFin.circleCount;
}

console.log(solution([[1, 1, 0], [1, 1, 0], [0, 0, 1]]));