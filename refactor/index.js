var yourself = {
    l: {0: 0, 1: 1},
    fibonacci: function (n) {
        if (this.l[n] !== undefined) {
            return this.l[n];
        } else {
            this.l[n] = this.fibonacci(n - 2) +
                this.fibonacci(n - 1);
            return this.l[n];
        }
    }
};

var f = yourself.fibonacci(10);
console.log(f);
