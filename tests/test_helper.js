const Note = require('../models/note');

const initialNotes = [
  {
    content: 'HTML is easy',
    important: false
  },
  {
    content: 'Browser can execute only JavaScript',
    important: true
  }
];

/* const nonExistingId = async () => {
  const note = await Note.create({ content: 'willremovethissoon' });
  const id = note._id.toString();
  await Note.findOneAndDelete({ _id: id });
  return id;
}; */

const nonExistingId = async () => {
  const note = new Note({ content: 'willremovethissoon' });
  console.log(note);
  await note.save();
  const id = note._id.toString();
  await Note.findOneAndDelete({ _id: id });
  return id;
};

const notesInDb = async () => {
  const notes = await Note.find({});
  return notes.map(note => note.toJSON());
};

module.exports = {
  initialNotes, nonExistingId, notesInDb
};