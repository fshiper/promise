function udaloSieUpiec() {
  console.log("Pizza upieczona");
}
function wywalPizze() {
  console.log("Pizza wywalona");
}
function weźKasę() {
  console.log("Klient skasowany");
}
const dobraMąkka = true;

const upieczPizze = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (dobraMąkka) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });

upieczPizze()
  .then(udaloSieUpiec, wywalPizze)
  .finally(weźKasę); //czy sie udało czy nie kasa się nalezy
