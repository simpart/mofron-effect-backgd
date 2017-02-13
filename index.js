/**
 * @file index.js
 * @author simpart
 */

/**
 * @class effect.Backgd
 */
mofron.effect.Backgd = class extends mofron.Effect {
    
    initEffect (flg, eff) {
        try {
            if (true === flg) {
                eff.target.style('height'  , '0%');
                eff.target.style('width'   , '0%');
                eff.target.style('position', null);
            } else {
                eff.target.style('height'  , '100%');
                eff.target.style('width'   , '100%');
                eff.target.style('position', 'fixed');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    effectConts (flg, eff) {
        try {
            if (true === flg) {
                eff.target.style('height'  , '100%');
                eff.target.style('width'   , '100%');
                eff.target.style('position', 'fixed');
            } else {
                eff.target.style('height'  , '0%');
                eff.target.style('width'   , '0%');
                eff.target.style('position', null);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
