import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * EditSong_Transaction
 * 
 * This class represents a transaction that edit song.
 * It will be managed by the transaction stack.
 * 
 * @author Mingkai Chen
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, originalSong, newSong) {
        super();
        this.app = initApp;
        this.index = index;
        this.originalSong = originalSong;
        this.newSong = newSong;
    }

    doTransaction() {
        this.app.editSong(this.index, this.newSong);
    }
    
    undoTransaction() {
        this.app.editSong(this.index, this.originalSong);
    }
}