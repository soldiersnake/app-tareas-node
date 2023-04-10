require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("======================".america);
    console.log("Seleccione una opcíon ".bgWhite.black);
    console.log("======================\n".america);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tarea`);
    console.log(`${"3.".green} Listar tarea completadas`);
    console.log(`${"4.".green} Listar tarea pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Seleccione una Opción ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};
const pausa = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`\nPresione ${"ENTER".green} para terminar`, () => {
      readLine.close();
      resolve()
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
