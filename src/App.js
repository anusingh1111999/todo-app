import React, { Component } from 'react';
import Note from './components/Note';
import './App.css';

class App extends Component {

    constructor(props) {
         super(props);
         this.state = {
            noteText: '', 
            notes: [],
      }    
   }
    
  updateNoteText(noteText) {
        this.setState({ noteText: noteText.target.value })
        console.log(this.state.noteText) 
    }

   addNote() {

      if (this.state.noteText === '') {return}

      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({ noteText: ''});
      this.textInput.focus();
   }

  handleKeyPress = (event) => {
        if (event.key === 'Enter') {
      }
  }    
     deletNote(index) {
        let notesArr = this.state.notes;
        notesArr.splice(index,1);
        this.setState({ notes: notesArr})
     }

  render() { 

      let notes = this.state.notes.map((vol, key) => {
            return <Note key={key} text={vol}
                 deletMethod={ () => this.deletNote(key) } />
      })

    return (
      <div className="container">
        
          <div className="header">My React Todo App</div>
          {notes}

          <div className="btn" onClick={this.addNote.bind(this)}>+</div>

          <input type="text"
               ref={((input) => {this.textInput = input})}
               className="textInput"
               value={this.state.noteText}
               onChange={noteText => this.updateNoteText(noteText)}
               onKeyPress={this.handleKeyPress.bind(this)} />
                
       
        </div>
    );
  }
}

export default App;
