/**
 * @file index.js
 * @author simpart
 */

/**
 * @class effect.Backgd
 */
mofron.effect.Backgd = class extends mofron.Effect {
    
    enable (tgt) {
        try {
            tgt.style('height'  , '100%');
            tgt.style('width'   , '100%');
            tgt.style('position', 'fixed');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable (tgt) {
        try {
            tgt.style('height'  , '0%');
            tgt.style('width'   , '0%');
            tgt.style('position', null);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Backgd;
