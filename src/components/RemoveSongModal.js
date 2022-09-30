import React, { Component } from 'react';

export default class RemoveSongModal extends Component {
    constructor(props) {
        super(props);
    };

    handleConfirm = () => {
        this.props.confirmCallback(this.props.selectedSongIndex);
    }

    render() {        
        const { currentList, selectedSongIndex, cancelCallback, confirmCallback} = this.props;
        return (
            <div class="modal" id="remove-song-modal" data-animation="slideInOutLeft">
            <div class="modal-root" id='verify-remove-song-root'>
                <div class="modal-north">
                    Remove song?
                </div>                
                <div class="modal-center">
                    <div class="modal-center-content">
                        Are you sure you wish to permanently remove the <span id="remove-song-span"></span> from the playlist?
                    </div>
                </div>
                <div class="modal-south">
                    <input type="button" id="remove-song-confirm-button" class="modal-button" value='Confirm' onClick={this.handleConfirm} />
                    <input type="button" id="remove-song-cancel-button" class="modal-button" value='Cancel' onClick={cancelCallback}/>
                </div>
            </div>
        </div>
        );
    };
}