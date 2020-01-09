function megaBind(func) {
    let originalFunc = func;

    function internalBind(oThis) {
        if (typeof func !== 'function') {
            throw new TypeError('This is not callable');
        }

        let aArgs = Array.prototype.slice.call(arguments, 1);

        let fBound = function () {
            return originalFunc.apply(
                oThis,
                aArgs.concat(Array.prototype.slice.call(arguments))
            );
        };
        fBound.bind = internalBind;

        return fBound;
    }

    func.bind = internalBind;
}

module.exports = megaBind;
