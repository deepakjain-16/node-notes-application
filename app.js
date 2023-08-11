const notesObj = require("./notes.js");
const yargs = require("yargs");

//builder for options with command line argument
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body option",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesObj.addNotes(argv.title, argv.body);
  },
});

//removing a command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title to delete",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesObj.removeNotes(argv.title);
  },
});

//setup read command
yargs.command({
  command: "read",
  describe: "read command",
  builder: {
    title: {
      describe: "note tot read",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notesObj.readNote(argv.title);
  },
});

//setup list command
yargs.command({
  command: "list",
  describe: "list command",
  handler() {
    notesObj.listNotes();
  },
});

yargs.parse(); //important to use yargs
