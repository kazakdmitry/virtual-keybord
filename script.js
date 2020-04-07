const keyBordEng = {
  0: [['~', '`', 'Backquote'], ['!', '1', 'Digit1'], ['@', '2', 'Digit2'], ['#', '3', 'Digit3'], ['$', 4, 'Digit4'], ['%', '5', 'Digit5'], [':', '6', 'Digit6'], ['?', '7', 'Digit7'], ['*', '8', 'Digit8'], ['(', '9', 'Digit9'], [')', '0', 'Digit0'], ['_', '-', 'Minus'], ['+', '=', 'Equal'], ['', 'Backspace', 'Backspace']],
  1: [['', 'Tab', 'Tab'], ['', 'Q', 'KeyQ'], ['', 'W', 'KeyW'], ['', 'E', 'KeyE'], ['', 'R', 'KeyR'], ['', 'T', 'KeyT'], ['', 'Y', 'KeyY'], ['', 'U', 'KeyU'], ['', 'I', 'KeyI'], ['', 'O', 'KeyO'], ['', 'P', 'KeyP'], ['', '[', 'BracketLeft'], ['', ']', 'BracketRight'], ['/', '\\', 'Backslash'], ['', 'DEL', 'Delete']],
  2: [['', 'Caps Lock', 'CapsLock'], ['', 'A', 'KeyA'], ['', 'S', 'KeyS'], ['', 'D', 'KeyD'], ['', 'F', 'KeyF'], ['', 'G', 'KeyG'], ['', 'H', 'KeyH'], ['', 'J', 'KeyJ'], ['', 'K', 'KeyK'], ['', 'L', 'KeyL'], ['', ';', 'Semicolon'], ['', '\'', 'Quote'], ['', 'ENTER', 'Enter']],
  3: [['', 'Shift', 'ShiftLeft'], ['', '\\', 'Backslash'], ['', 'Z', 'KeyZ'], ['', 'X', 'KeyX'], ['', 'C', 'KeyC'], ['', 'V', 'KeyV'], ['', 'B', 'KeyB'], ['', 'N', 'KeyN'], ['', 'M', 'KeyM'], ['', '.', 'Period'], ['', ',','Comma'], ['', '/', 'Slash'], ['', '&uarr;', 'ArrowUp'], ['', 'Shift', 'ShiftRight']],
  4: [['', 'Ctrl', 'ControlLeft'], ['', 'Win', 'MetaLeft'], ['', 'Alt', 'AltLeft'], ['', '', 'Space'], ['', 'Alt', 'AltRight'], ['', 'Ctrl', 'ControlRight'], ['', '&larr;', 'ArrowLeft'], ['', '&darr;', 'ArrowDown'], ['', '&rarr;', 'ArrowRight']],
};

const keyBordRus = {
  0: [['', 'ё', 'Backquote'], ['!', '1', 'Digit1'], ['@', '2', 'Digit2'], ['№', '3', 'Digit3'], [';', 4, 'Digit4'], ['%', '5', 'Digit5'], ['^', '6', 'Digit6'], ['&', '7', 'Digit7'], ['*', '8', 'Digit8'], ['(', '9', 'Digit9'], [')', '0', 'Digit0'], ['_', '-', 'Minus'], ['+', '=', 'Equal'], ['', 'Backspace', 'Backspace']],
  1: [['', 'Tab', 'Tab'], ['', 'Й', 'KeyQ'], ['', 'Ц', 'KeyW'], ['', 'У', 'KeyE'], ['', 'К', 'KeyR'], ['', 'Е', 'KeyT'], ['', 'Н', 'KeyY'], ['', 'Г', 'KeyU'], ['', 'Ш', 'KeyI'], ['', 'Щ', 'KeyO'], ['', 'З', 'KeyP'], ['', 'Х', 'BracketLeft'], ['', 'Ъ', 'BracketRight'], ['/', '\\', 'Backslash'], ['', 'DEL', 'Delete']],
  2: [['', 'Caps Lock', 'CapsLock'], ['', 'Ф', 'KeyA'], ['', 'Ы', 'KeyS'], ['', 'В', 'KeyD'], ['', 'А', 'KeyF'], ['', 'П', 'KeyG'], ['', 'Р', 'KeyH'], ['', 'О', 'KeyJ'], ['', 'Л', 'KeyK'], ['', 'Д', 'KeyL'], ['', 'Ж', 'Semicolon'], ['', 'Э', 'Quote'], ['', 'ENTER', 'Enter']],
  3: [['', 'Shift', 'ShiftLeft'], ['', '\\', 'Backslash'], ['', 'Я', 'KeyZ'], ['', 'Ч', 'KeyX'], ['', 'С', 'KeyC'], ['', 'М', 'KeyV'], ['', 'И', 'KeyB'], ['', 'Т', 'KeyN'], ['', 'Ь', 'KeyM'], ['', 'Б', 'Period'], ['', 'Ю', 'Comma'], ['', '/', 'Slash'], ['', '&uarr;', 'ArrowUp'], ['', 'Shift', 'ShiftRight']],
  4: [['', 'Ctrl', 'ControlLeft'], ['', 'Win', 'MetaLeft'], ['', 'Alt', 'AltLeft'], ['', '', 'Space'], ['', 'Alt', 'AltRight'], ['', 'Ctrl', 'ControlRight'], ['', '&larr;', 'ArrowLeft'], ['', '&darr;', 'ArrowDown'], ['', '&rarr;', 'ArrowRight']],
};
const langEng = 'keyBordEng(AltLeft + ShiftLeft)';
const langRus = 'keyBordRus(AltLeft + ShiftLeft)';
function load() {
  createKeyBord(keyBordEng, langEng);
}
window.onload = load;


function keyDownFunc(event) {
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

function runOnKeys(func, ...codes) {
  let pressed = new Set();

  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);

    for (let code of codes) { 
      if (!pressed.has(code)) {
        return;
      }
    }
  pressed.clear();

  func();
});

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });
}
runOnKeys(
  () => changeLang(),
  'AltLeft',
  'ShiftLeft',
);

function changeLang() {
  const span = document.querySelectorAll('span');
  if (span[0].innerText === langRus) {
    createKeyBord(keyBordEng, langEng);
  }
  else {
    createKeyBord(keyBordRus, langRus);
  }
}

function createKeyBord(lang, typeLang) {
  let cleaner = document.querySelectorAll('body');
  if (cleaner[0].children[2]) {
    cleaner[0].children[2].parentNode.removeChild(cleaner[0].children[2]);
  }
  if (cleaner[0].children[0]){}
  else {
    const textArea = document.createElement('textarea');
    cleaner[0].append(textArea);
  }
  if (cleaner[0].children[1]) {
    cleaner[0].children[1].innerHTML = typeLang;
  }
  else {
    let span = document.createElement('span');
    cleaner[0].append(span);
    span.innerHTML = typeLang;
  }

  const table = document.createElement('table');
  const body = document.getElementsByTagName('body');
  body[0].onkeydown = keyDownFunc;
  body[0].onkeyup = keyUpFunc;
  cleaner[0].append(table);
  for (let i = 0; i < 5; i += 1) {
    const tr = document.createElement('tr');
    table.append(tr);
    for (let k = 0; k < lang[i].length; k += 1) {
      const td = document.createElement('td');
      const div = document.createElement('div');
      tr.append(td);
      if ((i === 0) && (k === lang[0].length - 1)) {
        td.colSpan = 3;
      }
      if ((i === 2) && (k === lang[2].length - 1)) {
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
      td.innerHTML = lang[i][k][1];
      td.append(div);
      div.append(lang[i][k][0]);
    }
  }
  //table.onclick = clickFunc;
}
function clickFunc(event) {
  event.target.style.backgroundColor = 'yellow';
  let letter = event.target.childNodes[0].textContent;
  let textArea = document.querySelectorAll('textarea');
  if (letter === 'ENTER') {
    letter = '\n';
    textArea[0].value += letter;
  }
  textArea[0].value += letter;
  event.target.style.backgroundColor = 'black';
}
