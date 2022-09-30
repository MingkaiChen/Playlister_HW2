import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * RemoveSong_Transaction
 * 
 * This class represents a transaction that remove song.
 * It will be managed by the transaction stack.
 * 
 * @author Mingkai Chen
 */
export default class RemoveSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, song) {
        super();
        this.app = initApp;
        this.index = index;
        this.song = song;
    }

    doTransaction() {
        this.app.removeSong(this.index);
    }
    
    undoTransaction() {
        this.app.insertSong(this.index, this.song);
    }
}