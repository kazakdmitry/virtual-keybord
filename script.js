const keyBordEng = {
  0: [['~', '`'], ['!', '1'], ['@', '2'], ['#', '3'], ['$', 4], ['%', '5'], [':', '6'], ['?', '7'], ['*', '8'], ['(', '9'], [')', '0'], ['_', '-'], ['+', '='], ['', 'Backspace']],
  1: [['', 'Tab'], ['', 'Q'], ['', 'W'], ['', 'E'], ['', 'R'], ['', 'T'], ['', 'Y'], ['', 'U'], ['', 'I'], ['', 'O'], ['', 'P'], ['', '['], ['', ']'], ['/', '\\'], ['', 'DEL']],
  2: [],
  3: [],
  4: [],
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
      td.append(div);
      div.append(keyBordEng[i][k][0]);
      tr.append(td);
      td.append(keyBordEng[i][k][1]);
    }
  }
}
window.onload = load;
