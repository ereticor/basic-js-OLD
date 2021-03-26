let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
  constructor (flexMachine) {
    this.machine = (flexMachine === false);
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let encrypted = "";
    let convertedKey = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) == -1) {
        convertedKey += message[i];
      }
      else {
        if (j >= key.length) {
          j = 0;
        }
        convertedKey += key[j];
        j++;
      }
    }
    for (let i = 0; i < message.length; i++) {
      let shift = alphabet.indexOf(message[i]) + alphabet.indexOf(convertedKey[i]);
      if (alphabet.indexOf(message[i]) == -1) {
        encrypted += message[i];
      }
      else if (shift <= 25) {
        encrypted += alphabet[shift];
      }
      else {
        encrypted += alphabet[shift - 26];
      }
    }
    if (this.machine) {
      return encrypted.split("").reverse().join("");
    }
    return encrypted;
  }    
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error();
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let decrypted = "";
    let convertedKey = "";
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (alphabet.indexOf(encryptedMessage[i]) == -1) {
        convertedKey += encryptedMessage[i];
      }
      else {
        if (j >= key.length) {
          j = 0;
        }
        convertedKey += key[j];
        j++;
      }
    }
    for (let i = 0; i < encryptedMessage.length; i++) {
      let shift = alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(convertedKey[i]);
      if (alphabet.indexOf(encryptedMessage[i]) == -1) {
        decrypted += encryptedMessage[i];
      }
      else if (shift < 0) {
        decrypted += alphabet[shift + 26];
      }
      else {
        decrypted += alphabet[shift];
      }
    }
    if (this.machine) {
      return decrypted.split("").reverse().join("");
    }
    return decrypted;
  }
}

module.exports = VigenereCipheringMachine;