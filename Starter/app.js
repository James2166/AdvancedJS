String.prototype.islengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("john".islengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;
}