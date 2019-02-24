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
            this.prmMap('offset');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
            cmp.style({ 'position' : 'fixed' });
            let val = this.value();
            cmp.size(val[0] + '%', val + '%');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (x, y) {
        try {
            if ( (undefined === x) && (undefined === y) ) {
                /* getter */
                return [this.getMember('value_x'), this.getMember('value_y')];
            }
            /* setter */
            this.member('value_x', 'number', x, 100);
            this.member('value_y', 'number', y, 100);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Backgd;
/* end of file */
