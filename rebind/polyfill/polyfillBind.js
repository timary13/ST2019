function polyfillBind() {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {
            throw new TypeError('This is not callable');
        }

        if(!this.prototype.originFunc) {
            this.prototype.originFunc = this;
        }

        let aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP    = function() {},
            fBound  = function() {
                return fToBind.prototype.originFunc.apply(
                    oThis,
                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    };
}

module.exports = polyfillBind;
