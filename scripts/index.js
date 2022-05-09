let key = [];
let keyLang = [];
let keyMode = [];
let keyboardApp = document.createElement("div");
keyboardApp.className = "keyboard";
let app = document.getElementById("app");
app.append(keyboardApp);
let screen = document.createElement("TEXTAREA");
screen.setAttribute("rows", "10");
screen.setAttribute("cols", "77");
screen.className = "keyboard__textarea";
keyboardApp.append(screen);
let keyboard = document.createElement("div");
keyboard.className = "keyboard__keyboard";
keyboardApp.append(keyboard);
let keyboardRow = [];
for (let i = 0; i < 5; i++) {
  keyboardRow[i] = document.createElement("div");
  keyboard.append(keyboardRow[i]);
  keyboardRow[i].className = `keyboardRow__${i} keyboardRow`;
  switch (i) {
    case 0:
      for (let j = 0; j < 14; j++) {
        key[j] = document.createElement("div");
        key[j].className = "keyboard__key";
        keyboardRow[i].append(key[j]);
        switch (j) {
          case 0:
            key[j].className = "keyboard__key backqute";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "ё";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Ё";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "ё";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Ё";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "`";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "~";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "`";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "~";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //-----------------------------------------------------------------
          case 1:
            key[j].className = "keyboard__key digit1";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "1";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "!";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "1";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "!";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "1";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "!";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "1";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "!";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //-----------------------------------------------------------------
          case 2:
            key[j].className = "keyboard__key digit2";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "2";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = '"';
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "2";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = '"';
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "2";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "@";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "2";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "@";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //-----------------------------------------------------------------
          case 3:
            key[j].className = "keyboard__key digit3";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "3";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "№";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "3";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "№";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "3";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "#";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "3";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "#";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //-----------------------------------------------------------------
          case 4:
            key[j].className = "keyboard__key digit4";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "4";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = ";";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "4";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = ";";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "4";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "$";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "4";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "$";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 5:
            key[j].className = "keyboard__key digit5";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "5";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "%";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "5";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "%";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "5";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "%";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "5";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "%";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 6:
            key[j].className = "keyboard__key digit6";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "6";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = ":";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "6";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = ":";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "6";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "^";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "6";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "^";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 7:
            key[j].className = "keyboard__key digit7";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "7";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "?";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "7";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "?";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "7";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "&";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "7";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "&";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 8:
            key[j].className = "keyboard__key digit8";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "8";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "*";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "8";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "*";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "8";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "*";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "8";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "+";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 9:
            key[j].className = "keyboard__key digit9";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "9";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "(";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "9";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "(";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "9";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "(";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "9";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "(";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 10:
            key[j].className = "keyboard__key digit0";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "0";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = ")";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "0";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = ")";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "0";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = ")";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "0";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = ")";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 11:
            key[j].className = "keyboard__key minus";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "-";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "_";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "-";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "_";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "-";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "_";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "-";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "_";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 12:
            key[j].className = "keyboard__key plus";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "+";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "=";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "+";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "=";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "+";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "=";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "+";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "=";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 13:
            key[j].className = "keyboard__key rule backspace";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "Backspace";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Backspace";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "Backspace";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Backspace";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "Backspace";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Backspace";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "Backspace";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Backspace";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
        }
      }

      break;
    case 1:
      for (let j = 0; j < 15; j++) {
        key[j] = document.createElement("div");
        key[j].className = "keyboard__key";
        keyboardRow[i].append(key[j]);
        switch (j) {
          case 0:
            key[j].className = "keyboard__key rule tab";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "Tab";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Tab";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "Tab";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Tab";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "Tab";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Tab";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "Tab";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Tab";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //-----------------------------------------------------------------
          case 1:
            key[j].className = "keyboard__key q";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "й";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Й";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "й";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Й";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "q";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Q";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "q";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Q";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //-----------------------------------------------------------------
          case 2:
            key[j].className = "keyboard__key w";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "ц";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Ц";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "ц";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Ц";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "w";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "W";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "w";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "W";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //-----------------------------------------------------------------
          case 3:
            key[j].className = "keyboard__key e";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "у";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "У";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "у";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "У";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "e";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "E";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "e";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "E";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //-----------------------------------------------------------------
          case 4:
            key[j].className = "keyboard__key r";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "к";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "К";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "к";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "К";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "r";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "R";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "r";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "R";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 5:
            key[j].className = "keyboard__key t";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "е";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Е";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "е";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Е";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "t";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "T";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "t";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "T";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 6:
            key[j].className = "keyboard__key y";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "н";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Н";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "н";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Н";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "y";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Y";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "y";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Y";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 7:
            key[j].className = "keyboard__key u";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "г";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Г";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "г";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Г";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "u";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "U";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "u";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "U";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 8:
            key[j].className = "keyboard__key i";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "ш";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Ш";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "ш";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Ш";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "i";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "I";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "i";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "I";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          case 9:
            key[j].className = "keyboard__key i";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "щ";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Щ";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "щ";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Щ";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "o";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "O";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "o";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "O";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 10:
            key[j].className = "keyboard__key p";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "з";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "З";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "з";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "З";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "p";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "P";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "p";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "P";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 11:
            key[j].className = "keyboard__key basket_left";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "х";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Х";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "х";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Х";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "[";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "{";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "[";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "{";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 12:
            key[j].className = "keyboard__key basket_right";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "ъ";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Ъ";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "ъ";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Ъ";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "]";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "}";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "]";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "}";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 13:
            key[j].className = "keyboard__key slash";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "/";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "/";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "/";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "/";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "/";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "/";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "/";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "/";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
          case 14:
            key[j].className = "keyboard__key rule del";
            keyLang[1] = document.createElement("span");
            keyLang[1].className = "rus hidden";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "Del";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Del";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "Del";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Del";
                  break;
              }
              keyLang[1].append(keyMode[k]);
            }
            keyLang[0] = document.createElement("span");
            keyLang[0].className = "eng";
            for (let k = 0; k < 4; k++) {
              keyMode[k] = document.createElement("span");
              switch (k) {
                case 0:
                  keyMode[0].className = "caseDown";
                  keyMode[0].innerHTML = "Del";
                  break;
                case 1:
                  keyMode[1].className = "caseUp hidden";
                  keyMode[1].innerHTML = "Del";
                  break;
                case 2:
                  keyMode[2].className = "caps hidden";
                  keyMode[2].innerHTML = "Del";
                  break;
                case 3:
                  keyMode[3].className = "shiftCaps hidden";
                  keyMode[3].innerHTML = "Del";
                  break;
              }
              keyLang[0].append(keyMode[k]);
            }
            key[j].append(keyLang[0]);
            key[j].append(keyLang[1]);
            break;
          //--------------------------------------------------------
        }
      }
      break;
    case 2:
      for (let j = 0; j < 13; j++) {
        key[j] = document.createElement("div");
        key[j].className = "keyboard__key";
        keyboardRow[i].append(key[j]);
        switch (j) {
            case 0:
              key[j].className = "keyboard__key rule capslock";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "CapsLock";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "CapsLock";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "CapsLock";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "CapsLock";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "CapsLock";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "CapsLock";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "CapsLock";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "CapsLock";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //-----------------------------------------------------------------
            case 1:
              key[j].className = "keyboard__key a";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "ф";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Ф";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "ф";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Ф";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "a";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "A";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "a";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "A";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //-----------------------------------------------------------------
            case 2:
              key[j].className = "keyboard__key s";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "ы";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Ы";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "ы";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Ы";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "s";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "S";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "s";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "S";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //-----------------------------------------------------------------
            case 3:
              key[j].className = "keyboard__key d";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "в";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "В";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "в";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "В";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "d";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "D";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "d";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "D";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //-----------------------------------------------------------------
            case 4:
              key[j].className = "keyboard__key f";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "а";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "А";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "а";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "А";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "f";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "F";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "f";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "F";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 5:
              key[j].className = "keyboard__key g";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "п";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "П";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "п";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "П";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "g";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "G";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "g";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "G";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 6:
              key[j].className = "keyboard__key h";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "р";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Р";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "р";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Р";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "h";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "H";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "h";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "H";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 7:
              key[j].className = "keyboard__key j";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "о";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "О";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "о";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "О";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "j";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "J";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "j";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "J";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 8:
              key[j].className = "keyboard__key k";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "л";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Л";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "л";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Л";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "k";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "K";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "k";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "K";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            case 9:
              key[j].className = "keyboard__key l";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "д";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Д";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "д";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Д";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "l";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "L";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "l";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "L";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 10:
              key[j].className = "keyboard__key semicolon";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "ж";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Ж";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "ж";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Ж";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = ";";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = ":";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = ";";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = ":";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 11:
              key[j].className = "keyboard__key quotes";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "э";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Э";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "э";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Э";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "'";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = '"';
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "'";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = '"';
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 12:
              key[j].className = "keyboard__key rule enter";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "Enter";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Enter";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "Enter";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Enter";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "Enter";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Enter";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "Enter";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Enter";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
          }
      }
      break;
    case 3:
      for (let j = 0; j < 13; j++) {
        key[j] = document.createElement("div");
        key[j].className = "keyboard__key";
        keyboardRow[i].append(key[j]);
        switch (j) {
            case 0:
              key[j].className = "keyboard__key rule shift";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "Shift";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Shift";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "Shift";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Shift";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "Shift";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Shift";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "Shift";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Shift";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //-----------------------------------------------------------------
            case 1:
              key[j].className = "keyboard__key z";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "я";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Я";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "я";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Я";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "z";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Z";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "z";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Z";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //-----------------------------------------------------------------
            case 2:
              key[j].className = "keyboard__key x";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "ч";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Ч";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "ч";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Ч";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "x";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "X";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "x";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "X";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //-----------------------------------------------------------------
            case 3:
              key[j].className = "keyboard__key c";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "с";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "С";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "с";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "С";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "c";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "C";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "c";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "C";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //-----------------------------------------------------------------
            case 4:
              key[j].className = "keyboard__key v";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "м";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "М";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "м";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "М";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "v";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "V";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "v";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "V";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 5:
              key[j].className = "keyboard__key b";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "и";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "И";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "и";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "И";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "b";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "B";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "b";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "B";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 6:
              key[j].className = "keyboard__key n";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "т";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Т";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "т";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Т";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "n";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "N";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "n";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "N";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 7:
              key[j].className = "keyboard__key m";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "ь";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Ь";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "ь";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Ь";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "m";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "M";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "m";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "M";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 8:
              key[j].className = "keyboard__key less";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "б";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Б";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "б";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Б";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = ",";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "<";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = ",";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "<";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            case 9:
              key[j].className = "keyboard__key more";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "ю";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Ю";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "ю";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Ю";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = ".";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = ">";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = ".";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = ">";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 10:
              key[j].className = "keyboard__key qwestion";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = ".";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = ",";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = ".";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = ",";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "/";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "?";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "/";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "?";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 11:
              key[j].className = "keyboard__key rule arrowUpp";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "▲";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "▲";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "▲";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "▲";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "▲";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "▲";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "▲";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "▲";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 12:
              key[j].className = "keyboard__key rule shift";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                    case 0:
                      keyMode[0].className = "caseDown";
                      keyMode[0].innerHTML = "Shift";
                      break;
                    case 1:
                      keyMode[1].className = "caseUp hidden";
                      keyMode[1].innerHTML = "Shift";
                      break;
                    case 2:
                      keyMode[2].className = "caps hidden";
                      keyMode[2].innerHTML = "Shift";
                      break;
                    case 3:
                      keyMode[3].className = "shiftCaps hidden";
                      keyMode[3].innerHTML = "Shift";
                      break;
                  }
                  keyLang[1].append(keyMode[k]);
                }
                keyLang[0] = document.createElement("span");
                keyLang[0].className = "eng";
                for (let k = 0; k < 4; k++) {
                  keyMode[k] = document.createElement("span");
                  switch (k) {
                    case 0:
                      keyMode[0].className = "caseDown";
                      keyMode[0].innerHTML = "Shift";
                      break;
                    case 1:
                      keyMode[1].className = "caseUp hidden";
                      keyMode[1].innerHTML = "Shift";
                      break;
                    case 2:
                      keyMode[2].className = "caps hidden";
                      keyMode[2].innerHTML = "Shift";
                      break;
                    case 3:
                      keyMode[3].className = "shiftCaps hidden";
                      keyMode[3].innerHTML = "Shift";
                      break;
                  }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
          }
      }
      break;
    case 4:
      for (let j = 0; j < 9; j++) {
        key[j] = document.createElement("div");
        key[j].className = "keyboard__key";
        keyboardRow[i].append(key[j]);
        switch (j) {
            case 0:
              key[j].className = "keyboard__key rule ctrl";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "Ctrl";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Ctrl";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "Ctrl";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Ctrl";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "Ctrl";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Ctrl";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "Ctrl";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Ctrl";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //-----------------------------------------------------------------
            case 1:
              key[j].className = "keyboard__key rule win";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "Win";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Win";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "Win";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Win";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "Win";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Win";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "Win";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Win";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //-----------------------------------------------------------------
            case 2:
              key[j].className = "keyboard__key rule alt";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "Alt";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Alt";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "Alt";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Alt";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "Alt";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Alt";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "Alt";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Alt";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //-----------------------------------------------------------------
            case 3:
              key[j].className = "keyboard__key space";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = " ";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = " ";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = " ";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = " ";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = " ";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = " ";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = " ";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = " ";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //-----------------------------------------------------------------
            case 4:
              key[j].className = "keyboard__key rule alt";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "Alt";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Alt";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "Alt";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Alt";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "Alt";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "Alt";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "Alt";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "Alt";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 5:
              key[j].className = "keyboard__key rule arrowLeft";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "◄";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "◄";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "◄";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "◄";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "◄";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "◄";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "◄";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "◄";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 6:
              key[j].className = "keyboard__key rule arrowDown";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "▼";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "▼";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "▼";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "▼";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "▼";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "▼";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "▼";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "▼";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
            //--------------------------------------------------------
            case 7:
              key[j].className = "keyboard__key rule arrowRight";
              keyLang[1] = document.createElement("span");
              keyLang[1].className = "rus hidden";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "►";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "►";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "►";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "►";
                    break;
                }
                keyLang[1].append(keyMode[k]);
              }
              keyLang[0] = document.createElement("span");
              keyLang[0].className = "eng";
              for (let k = 0; k < 4; k++) {
                keyMode[k] = document.createElement("span");
                switch (k) {
                  case 0:
                    keyMode[0].className = "caseDown";
                    keyMode[0].innerHTML = "►";
                    break;
                  case 1:
                    keyMode[1].className = "caseUp hidden";
                    keyMode[1].innerHTML = "►";
                    break;
                  case 2:
                    keyMode[2].className = "caps hidden";
                    keyMode[2].innerHTML = "►";
                    break;
                  case 3:
                    keyMode[3].className = "shiftCaps hidden";
                    keyMode[3].innerHTML = "►";
                    break;
                }
                keyLang[0].append(keyMode[k]);
              }
              key[j].append(keyLang[0]);
              key[j].append(keyLang[1]);
              break;
              case 8:
                key[j].className = "keyboard__key rule ctrl";
                keyLang[1] = document.createElement("span");
                keyLang[1].className = "rus hidden";
                for (let k = 0; k < 4; k++) {
                  keyMode[k] = document.createElement("span");
                  switch (k) {
                    case 0:
                      keyMode[0].className = "caseDown";
                      keyMode[0].innerHTML = "Ctrl";
                      break;
                    case 1:
                      keyMode[1].className = "caseUp hidden";
                      keyMode[1].innerHTML = "Ctrl";
                      break;
                    case 2:
                      keyMode[2].className = "caps hidden";
                      keyMode[2].innerHTML = "Ctrl";
                      break;
                    case 3:
                      keyMode[3].className = "shiftCaps hidden";
                      keyMode[3].innerHTML = "Ctrl";
                      break;
                  }
                  keyLang[1].append(keyMode[k]);
                }
                keyLang[0] = document.createElement("span");
                keyLang[0].className = "eng";
                for (let k = 0; k < 4; k++) {
                  keyMode[k] = document.createElement("span");
                  switch (k) {
                    case 0:
                      keyMode[0].className = "caseDown";
                      keyMode[0].innerHTML = "Ctrl";
                      break;
                    case 1:
                      keyMode[1].className = "caseUp hidden";
                      keyMode[1].innerHTML = "Ctrl";
                      break;
                    case 2:
                      keyMode[2].className = "caps hidden";
                      keyMode[2].innerHTML = "Ctrl";
                      break;
                    case 3:
                      keyMode[3].className = "shiftCaps hidden";
                      keyMode[3].innerHTML = "Ctrl";
                      break;
                  }
                  keyLang[0].append(keyMode[k]);
                }
                key[j].append(keyLang[0]);
                key[j].append(keyLang[1]);
                break;
            }
      }
      break;
  }
}
//-----------------------------------work
keyboard.addEventListener('click',typing)
document.addEventListener('keydown',realKeyboard)


let textArr=[]

let foc=false
screen.onfocus=(()=>foc=true)
let counter=0

function typing(event) {
  
  let card = event.target.closest("div");
  let text = event.target.textContent;
  switch (text) {
    case "◄":
      if (counter!==-1*screen.innerHTML.length){
      counter--;}
      screen.focus();
      screen.selectionStart = screen.innerHTML.length+counter;
      screen.selectionEnd = screen.innerHTML.length+counter;
    break;
    case "►":
      if (counter!==screen.innerHTML.length){
      counter++;}
      screen.focus();
      screen.selectionStart = screen.innerHTML.length+counter;
      screen.selectionEnd = screen.innerHTML.length+counter;
    break;
    case 'Alt': case 'Win': case "Ctrl":
      screen.blur();
      break;
    case 'Tab':
      event.preventDefault();
      screen.focus();
      textArr.push("     ");
      screen.append("     ");
      screen.selectionStart = screen.innerHTML.length;
    screen.blur();
    case "Backspace":
      let tex1 = screen.innerHTML;
      let len1 = screen.innerHTML.length;
      let start1 = len1;
      if (!foc) {
        screen.lastChild.remove();
      }
      if (foc) {
        start1 = screen.selectionStart;
        screen.innerHTML = tex1.slice(0, start1 - 1) + tex1.slice(start1, len1);
        screen.selectionStart = start1 - 1;
      }

      if (textArr.length > 0) {
        textArr.pop();
      }
      break;
      break;
    case "Enter":
      textArr.push("</br>");
      screen.append(document.createElement("br"));
      screen.append("");
      break;
      case "Shift":
        let selectorsDown=document.getElementsByClassName('caseDown')
        let selectorsUp=document.getElementsByClassName('caseUp')
        for (let i=0;i<selectorsDown.length;i++){
          selectorsDown[i].classList.toggle('hidden')
          selectorsUp[i].classList.toggle('hidden')
  
      
      }
      break;  
      case "CapsLock":
        let selectorsDown1=document.getElementsByClassName('caseDown')
        let selectorsUp1=document.getElementsByClassName('caseUp')
        for (let i=0;i<selectorsDown1.length;i++){
          selectorsDown1[i].classList.toggle('hidden')
          selectorsUp1[i].classList.toggle('hidden')
        }
    
      break;

    case "Del":
      let tex = screen.innerHTML;
      let start = screen.selectionStart;
      let len = screen.innerHTML.length;
      if (screen.selectionStart == 0 && !foc) {
        screen.selectionStart = len;
      } else {
        screen.innerHTML = tex.slice(0, start) + tex.slice(start + 1, len);
        screen.selectionStart = start;
      }
      break;

    default:
      textArr.push(text.charAt(0));
      screen.append(text.charAt(0));
  }





}
function realKeyboard(event) {

  event.preventDefault();
  let key = event.key;
  let clicked = null;

  if ((event.shiftKey) && (event.ctrlKey || event.metaKey)) {
    let selectorsEng=document.getElementsByClassName('eng')
        let selectorsRus=document.getElementsByClassName('rus')
        for (let i=0;i<selectorsEng.length;i++){
          selectorsEng[i].classList.toggle('hidden')
          selectorsRus[i].classList.toggle('hidden')
        }
  return}
    
  switch (key) {
    case "ArrowLeft":
      if (counter!==-1*screen.innerHTML.length){
        counter--;}
        screen.focus();
        screen.selectionStart = screen.innerHTML.length+counter;
        screen.selectionEnd = screen.innerHTML.length+counter;
      break;
      case "ArrowRight":
        if (counter!==screen.innerHTML.length){
          counter++;}
          screen.focus();
          screen.selectionStart = screen.innerHTML.length+counter;
          screen.selectionEnd = screen.innerHTML.length+counter;
      break;
    case 'Alt': 
      screen.blur();
      clicked = document.querySelector(".alt");
      clicked.classList.add("clicked");
        clicked.onkeyup = setTimeout(
          () => clicked.classList.remove("clicked"),
          600
        );
      break;
    case 'Meta':
      event.preventDefault();
        screen.blur();
        clicked = document.querySelector(".win");

        clicked.classList.add("clicked");
          clicked.onkeyup = setTimeout(
            () => clicked.classList.remove("clicked"),
            600
          );
    break; 
    case 'Control':
        screen.blur();
        clicked = document.querySelector(".ctrl");
        clicked.classList.add("clicked");
          clicked.onkeyup = setTimeout(
            () => clicked.classList.remove("clicked"),
            600
          );
    break;
    case 'Tab':
      event.preventDefault();
      screen.focus();
      textArr.push("     ");
      screen.append("     ");
      screen.selectionStart = screen.innerHTML.length;
    screen.blur();
    clicked = document.querySelector(".tab");
    clicked.classList.add("clicked");
      clicked.onkeyup = setTimeout(
        () => clicked.classList.remove("clicked"),
        600
      );
      break;
    case "Backspace":
      clicked = document.querySelector(".backspace");
      clicked.classList.add("clicked");
      clicked.onkeyup = setTimeout(
        () => clicked.classList.remove("clicked"),
        600
      );
      let tex1 = screen.innerHTML;
      let len1 = screen.innerHTML.length;
      let start1 = len1;
      if (!foc) {
        screen.lastChild.remove();
      }
      if (foc) {
        start1 = screen.selectionStart;
        screen.innerHTML = tex1.slice(0, start1 - 1) + tex1.slice(start1, len1);
        screen.selectionStart = start1 - 1;
      }

      if (textArr.length > 0) {
        textArr.pop();
      }
      break;
    case "Enter":
      textArr.push("</br>");
      screen.append(document.createElement("br"));
      screen.append("");
      break;
    case "Shift":
      let selectorsDown=document.getElementsByClassName('caseDown')
        let selectorsUp=document.getElementsByClassName('caseUp')
        for (let i=0;i<selectorsDown.length;i++){
          selectorsDown[i].classList.toggle('hidden')
          selectorsUp[i].classList.toggle('hidden')
        }
        clicked = document.querySelector(".shift");
        clicked.classList.add("clicked");
        clicked.onkeyup = setTimeout(
          () => clicked.classList.remove("clicked"),
          600
          );
    
      break;  
      case "CapsLock":
        let selectorsDown1=document.getElementsByClassName('caseDown')
        let selectorsUp1=document.getElementsByClassName('caseUp')
        for (let i=0;i<selectorsDown1.length;i++){
          selectorsDown1[i].classList.toggle('hidden')
          selectorsUp1[i].classList.toggle('hidden')
        }
        clicked = document.querySelector(".capslock");
      clicked.classList.add("clicked");
      clicked.onkeyup = setTimeout(
        () => clicked.classList.remove("clicked"),
        600
      );
     
    
      break; 
    case " ":
      screen.append(" ");
      clicked = document.querySelector(".space");
      clicked.classList.add("clicked");
      clicked.onkeyup = setTimeout(
        () => clicked.classList.remove("clicked"),
        600
      );
      break;
    case "Delete":
      let tex = screen.innerHTML;
      let start = screen.selectionStart;
      let len = screen.innerHTML.length;
      if (screen.selectionStart == 0 && !foc) {
        screen.selectionStart = len;
      } else {
        screen.innerHTML = tex.slice(0, start) + tex.slice(start + 1, len);
        screen.selectionStart = start;
      }
      clicked = document.querySelector(".del");
     
      clicked.classList.add("clicked");
      clicked.onkeyup = setTimeout(
        () => clicked.classList.remove("clicked"),
        600
      );
      break;
     
    default:
      textArr.push(key);
      let spans= document.querySelectorAll('span');
      for (let i=0;i<spans.length;i++){
        if (spans[i].innerHTML==key){
          clicked =spans[i].closest('div')
        }
      } 
      clicked.classList.add("clicked");
      clicked.onkeyup = setTimeout(
          () => clicked.classList.remove("clicked"),
          600
        );
      screen.append(key);
  }
}



