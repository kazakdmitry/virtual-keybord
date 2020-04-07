const keyBordEng = {
  0: [['~', '`'], ['!', '1'], ['@', '2'], ['#', '3'], ['$', 4], ['%', '5'], [':', '6'], ['?', '7'], ['*', '8'], ['(', '9'], [')', '0'], ['_', '-'], ['+', '='], ['', 'Backspace']],
  1: [['', 'Tab'], ['', 'Q'], ['', 'W'], ['', 'E'], ['', 'R'], ['', 'T'], ['', 'Y'], ['', 'U'], ['', 'I'], ['', 'O'], ['', 'P'], ['', '['], ['', ']'], ['/', '\\'], ['', 'DEL']],
  2: [['', 'Caps Lock'], ['', 'A'], ['', 'S'], ['', 'D'], ['', 'F'], ['', 'G'], ['', 'H'], ['', 'J'], ['', 'K'], ['', 'L'], ['', ';'], ['', '\''], ['', 'ENTER']],
  3: [['', 'Shift'], ['', '\\'], ['', 'Z'], ['', 'X'], ['', 'C'], ['', 'V'], ['', 'B'], ['', 'N'], ['', 'M'], ['', '.'], ['', ','], ['', ''], ['', '&uarr;'	], ['', 'Shift']],
  4: [['', 'Ctrl'], ['', 'Win'], ['', 'Alt'], ['', ''], ['', 'Alt'], ['', 'Ctrl'], ['', '&larr;'], ['', '&darr;'], ['', '&rarr;']],
};
function load() {
  const table = document.createElement('table');
  const body = document.getElementsByTagName('body');
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
