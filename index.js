/**
 * @file mofron-effect-backgd/index.js
 * @brief background effect for mofron
 * @author simpart
 */

/**
 * @class effect.Backgd
 */
mofron.effect.Backgd = class extends mofron.Effect {
    /**
     * initialize effect
     *
     * @note private method
     */
    constructor (po) {
        try {
            super();
            this.name('Backgd');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * enable background target component
     *
     * @note private method
     */
    enable (tgt) {
        try {
            tgt.size('100%', '100%');
            tgt.style({ 'position' : 'fixed' });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * disable background
     *
     * @note private method
     */
    disable (tgt) {
        try {
            tgt.size('0%', '0%');
            tgt.style({ 'position' : null });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Backgd;
/* end of file */
