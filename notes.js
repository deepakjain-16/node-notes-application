const fs = require('fs');
const chalk = require('chalk');

const addNotes = (title,body) =>{
    const notesArr = loadNotes();
    //const duplicateNotes = notesArr.filter(e => e.title === title);
    const duplicateNote = notesArr.find(note => note.title === title);
    if(duplicateNote)
        console.log(chalk.red('Title Already taken!!'));
    else
    {
        notesArr.push({title:title,body:body});
        saveNotes(notesArr);
        console.log(chalk.green('Note added successfully!'));
    }
}
const removeNotes = (title) => {
    const notesArr = loadNotes();
    const newArr= notesArr.filter(e => e.title != title);

    if(notesArr.length == newArr.length)
        console.log(chalk.red('No Note Found!!'));
    else
    {
        saveNotes(newArr);
        console.log(chalk.green('Note removed!!'));
    }
}
const listNotes = () =>{
    console.log(chalk.green('Your Notes'));
    const noteArr = loadNotes();
    if(noteArr.length <= 0)
        console.log(chalk.red('No Notes Found'));
    else
    {
        noteArr.forEach(element => {
            console.log(element.title);
        });
    }
}
const readNote = (title) => {
    const notesArr = loadNotes();
    const noteToRead = notesArr.find(note => note.title === title)

    if(noteToRead){
        console.log(chalk.inverse(noteToRead.title));
        console.log(chalk.green(noteToRead.body));
    }
    else{
        console.log(chalk.red('No note with title: '+title));
    }
}
const loadNotes = () => {
    try{
        return JSON.parse(fs.readFileSync('notes.json','utf-8'));
    }
    catch(e){
            return [];
    }  
}
const saveNotes = (arr)=>{
    fs.writeFileSync('notes.json',JSON.stringify(arr)); 
}
module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes:listNotes,
    readNote:readNote
}