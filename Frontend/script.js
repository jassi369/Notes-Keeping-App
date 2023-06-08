document.getElementById('note-form').addEventListener('submit', addNote);

function addNote(event) {
  event.preventDefault();

  const noteInput = document.getElementById('note-input');
  const noteText = noteInput.value.trim();

  if (noteText !== '') {
    const noteItem = document.createElement('li');
    noteItem.textContent = noteText;

    document.getElementById('notes-list').appendChild(noteItem);
    noteInput.value = '';
  }
}
