const keyBordEng = {
  0: [['~', '`', 'Backquote'], ['!', '1', 'Digit1'], ['@', '2', 'Digit2'], ['#', '3', 'Digit3'], ['$', 4, 'Digit4'], ['%', '5', 'Digit5'], [':', '6', 'Digit6'], ['?', '7', 'Digit7'], ['*', '8', 'Digit8'], ['(', '9', 'Digit9'], [')', '0', 'Digit0'], ['_', '-', 'Minus'], ['+', '=', 'Equal'], ['', 'Backspace', 'Backspace']],
  1: [['', 'Tab', 'Tab'], ['', 'Q', 'KeyQ'], ['', 'W', 'KeyW'], ['', 'E', 'KeyE'], ['', 'R', 'KeyR'], ['', 'T', 'KeyT'], ['', 'Y', 'KeyY'], ['', 'U', 'KeyU'], ['', 'I', 'KeyI'], ['', 'O', 'KeyO'], ['', 'P', 'KeyP'], ['', '[', 'BracketLeft'], ['', ']', 'BracketRight'], ['/', '\\', 'Backslash'], ['', 'DEL', 'Delete']],
  2: [['', 'Caps Lock', 'CapsLock'], ['', 'A', 'KeyA'], ['', 'S', 'KeyS'], ['', 'D', 'KeyD'], ['', 'F', 'KeyF'], ['', 'G', 'KeyG'], ['', 'H', 'KeyH'], ['', 'J', 'KeyJ'], ['', 'K', 'KeyK'], ['', 'L', 'KeyL'], ['', ';', 'Semicolon'], ['', '\'', 'Quote'], ['', 'ENTER', 'Enter']],
  3: [['', 'Shift', 'ShiftLeft'], ['', '\\', 'Backslash'], ['', 'Z', 'KeyZ'], ['', 'X', 'KeyX'], ['', 'C', 'KeyC'], ['', 'V', 'KeyV'], ['', 'B', 'KeyB'], ['', 'N', 'KeyN'], ['', 'M', 'KeyM'], ['', '.', 'Period'], ['', ',','Comma'], ['', '/', 'Slash'], ['', '&uarr;', 'ArrowUp'], ['', 'Shift', 'ShiftRight']],
  4: [['', 'Ctrl', 'ControlLeft'], ['', 'Win', 'MetaLeft'], ['', 'Alt', 'AltLeft'], ['', '', 'Space'], ['', 'Alt', 'AltRight'], ['', 'Ctrl', 'ControlRight'], ['', '&larr;', 'ArrowLeft'], ['', '&darr;', 'ArrowDown'], ['', '&rarr;', 'ArrowRight']],
};
function load() {
  const textArea = document.createElement('textarea');
  const table = document.createElement('table');
  const body = document.getElementsByTagName('body');
  body[0].append(textArea);
  textArea.onkeydown = keyDownFunc;
  textArea.onkeyup = keyUpFunc;
  body[0].append(table);
  for (let i = 0; i < 5; i += 1) {
    const tr = document.createElement('tr');
    table.append(tr);
    for (let k = 0; k < keyBordEng[i].length; k += 1) {
      const td = document.createElement('td');
      const div = document.createElement('div');
      tr.append(td);
      if ((i === 0) && (k === keyBordEng[0].length - 1)) {
        td.colSpan = 3;
      }
      if ((i === 2) && (k === keyBordEng[2].length - 1)) {
        td.colSpan = 2;
      }
      if ((i === 2) && (k === 0)) {
        td.colSpan = 2;
      }
      if ((i === 3) && (k === 0)) {
        td.colSpan = 2;
      }
      if ((i === 4) && (k === 3)) {
        td.colSpan = 7;
      }
      td.innerHTML = keyBordEng[i][k][1];
      td.append(div);
      div.append(keyBordEng[i][k][0]);
    }
  }
}
window.onload = load;

function keyDownFunc(event) {
  console.log(event.code);
  searchKeyCode(event.code, 'yellow', '5px 5px 5px 5px blue');
}
function keyUpFunc(event) {
  searchKeyCode(event.code, 'black', 'none');
}
function searchKeyCode(code, color, shadow) {
  const trTags = document.querySelectorAll('tr');
  for (let i = 0; i < 5; i += 1) {
    for (let k = 0; k < keyBordEng[i].length; k += 1) {
      if (code === keyBordEng[i][k][2]) {
        trTags[i].children[k].style.backgroundColor = color;
        trTags[i].children[k].style.boxShadow = shadow;
      }
    }
  }
}
