import React, { Component } from 'react';

export default class EditSongModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            title: '',
            artist: '',
            youTubeId: '',
        };
        // console.log(props.selectedSongIndex);
    }

    setTitle = (event) => {
        let index = this.props.selectedSongIndex;
        let title = event.target.value;
        let artist = null;
        let youTubeId = null;
        if (this.state.artist === '') {
            artist=this.props.currentList.songs[this.props.selectedSongIndex].artist;
        } else {
            artist = this.state.artist;
        }
        if (this.state.youTubeId === '') {
            youTubeId=this.props.currentList.songs[this.props.selectedSongIndex].youTubeId;
        } else {
            youTubeId = this.state.youTubeId;
        }
        this.setState({
            index: index,
            title: title,
            artist: artist,
            youTubeId: youTubeId,
        });
    };

    setArtist = (event) => {
        let index = this.props.selectedSongIndex;
        let title = null;
        let artist = event.target.value;
        let youTubeId = null;
        if (this.state.title === '') {
            title=this.props.currentList.songs[this.props.selectedSongIndex].title;
        } else {
            title = this.state.title;
        }
        if (this.state.youTubeId === '') {
            youTubeId=this.props.currentList.songs[this.props.selectedSongIndex].youTubeId;
        } else {
            youTubeId = this.state.youTubeId;
        }
        this.setState({
            index: index,
            title: title,
            artist: artist,
            youTubeId: youTubeId,
        });
    };

    setYouTubeId = (event) => {
        let index = this.props.selectedSongIndex;
        let title = null;
        let artist = null;
        let youTubeId = event.target.value;
        if (this.state.title === '') {
            title=this.props.currentList.songs[this.props.selectedSongIndex].title;
        } else {
            title = this.state.title;
        }
        if (this.state.artist === '') {
            artist=this.props.currentList.songs[this.props.selectedSongIndex].artist;
        } else {
            artist = this.state.artist;
        }
        this.setState({
            index: index,
            title: title,
            artist: artist,
            youTubeId: youTubeId,
        });
    };

    handleConfirm = () => {
        this.props.confirmCallback(this.state.index, this.state.title, this.state.artist, this.state.youTubeId);
        this.initState();
    };

    handleCancel = () => {
        this.props.cancelCallback();
        this.initState();
    };

    initState = () => {
        this.setState({
            index: 0,
            title: '',
            artist: '',
            youTubeId: '',
        });
    };

    render() {        
        return (
            <div class="modal" id="edit-song-modal" data-animation="slideInOutLeft">
                <div class="modal-root" id='edit-song-modal-root'>
                    <div class="modal-north">
                        Edit Song
                    </div>
                    <div class="modal-center">
                        <div class="modal-center-content">
                            <label for="song-title">Title: </label>
                            <input type="text" id="song-title" name="song-title" class="edit-input" onChange={this.setTitle}></input><br></br>
                            <label for="song-artist">Artist: </label>
                            <input type="text" id="song-artist" name="song-artist" class="edit-input" onChange={this.setArtist}></input><br></br>
                            <label for="song-youTubeId">YouTube Id: </label>
                            <input type="text" id="song-youTubeId" name="song-youTubeId" class="edit-input" onChange={this.setYouTubeId}></input>
                        </div>
                    </div>
                    <div class="modal-south">
                        <input type="button" id="edit-song-confirm-button" class="modal-button" value='Confirm' onClick={this.handleConfirm} />
                        <input type="button" id="edit-song-cancel-button" class="modal-button" value='Cancel' onClick={this.handleCancel}/>
                    </div>
                </div>
            </div>
        )
    }
}