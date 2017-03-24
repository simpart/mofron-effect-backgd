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
            tgt.style({
                'height'   : '100%',
                'width'    : '100%',
                'position' : 'fixed'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable (tgt) {
        try {
            tgt.style({
                'height'   : '0%',
                'width'    : '0%',
                'position' : null
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Backgd;
