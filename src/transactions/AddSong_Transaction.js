import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that add song.
 * It will be managed by the transaction stack.
 * 
 * @author Mingkai Chen
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initApp) {
        super();
        this.app = initApp;
        this.song = {"title": "Untitled", "artist": "Unknown", "youTubeId": "dQw4w9WgXcQ"};
    }

    doTransaction() {
        this.app.addSong(this.song);
    }
    
    undoTransaction() {
        this.app.removeSong(this.app.state.currentList.songs.length-1);
    }
}