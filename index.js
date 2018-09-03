/**
 * @file index.js
 * @author simpart
 */

/**
 * @class effect.Backgd
 */
mofron.effect.Backgd = class extends mofron.Effect {
    
    constructor (prm) {
        try {
            super();
            this.name('Backgd');
            this.prmOpt(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable (tgt) {
        try {
            tgt.size('100%', '100%');
            tgt.style({ 'position' : 'fixed' });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
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
