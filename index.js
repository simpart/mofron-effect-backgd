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
    
    /**
     * enable background target component
     *
     * @note private method
     */
    enable (tgt) {
        try {
            let off = this.offset();
            let val = [
                (100 + off[0]) + '%',
                (100 + off[1]) + '%'
            ];
            tgt.size(val[0], val[1]);
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
    
    offset (x, y) {
        try {
            if (undefined === x) {
                /* getter */
                return [ this.offset_x(), this.offset_y() ];
            }
            /* setter */
            this.offset_x(x);
            this.offset_y(y);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    offset_x (prm) {
        try { return this.member('offset_x', 'number', prm, 0); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    offset_y (prm) {
        try { return this.member('offset_y', 'number', prm, 0); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Backgd;
/* end of file */
