import React, { Component } from 'react';
import ImageBase64 from '../services/imageBase64';

class AddAnswerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            imageURL: '',
            filename: '',
            showForm: false,
        };
    }
    
    handleInputChange = (event) => {
        this.setState({
           text: event.target.value
        });
    }

    handleImageUpload = (event) => {
        const imageFile = event.target.files[0];
        
        ImageBase64.readFile(imageFile).then(data => {
            this.setState({
                imageURL: data,
                filename: imageFile.name
            });
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.addAnswer({
            text: this.state.text,
            imageURL: this.state.imageURL
        });

        this.resetState();
    }

    toggleShowForm = () => {
        this.setState({ showForm: !this.state.showForm });
    }

    resetState = () => {
        this.setState({
            text: '',
            imageURL: '',
            filename: '',
            showForm: false,
        });
    }

    render() {
        return (
            <div className="new-answer-container">
                { this.state.showForm &&
                    <form  onSubmit={this.handleSubmit}>
                        <div className="add-answer-container">
                            <div className="inputs-container">
                                <div className="file-input">
                                    <div className="file-upload">
                                        <span>Choose File</span>
                                        <input 
                                            type="file"
                                            accept="image/*"
                                            id="newAnswerImage"
                                            className="upload"
                                            onChange={this.handleImageUpload}
                                            required />
                                    </div>
                                    <span>{this.state.filename ? this.state.filename : 'No file chosen'}</span>
                                </div>

                                <div className="answer-input-container">
                                    <input 
                                        type="text" 
                                        className="custom-transparent" 
                                        placeholder="Answer text.."
                                        required
                                        onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <button type="submit" className="input-action add-answer secondary">SAVE</button>
                        </div>
                    </form>
                }

                { !this.state.showForm &&
                    <div className="circle circle-small" onClick={this.toggleShowForm}>
                        <div className="plus">
                            <hr className="minus" />
                            <hr className="minus" />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default AddAnswerForm;