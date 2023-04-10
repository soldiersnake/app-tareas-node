import inquirer from "inquirer";
import colors from "colors";

const preguntas = [
  {
    type: "list",
    name: "option",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: "1",
        name: "1. Crear tarea",
      },
      {
        value: "2",
        name: "2. Listar tareas",
      },
      {
        value: "3",
        name: "3. Listar tareas completadas",
      },
      {
        value: "4",
        name: "4. Listar tareas pendientes",
      },
      {
        value: "5",
        name: "5. Completar tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar tarea",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];

const confirmacionPausa = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${'enter'.green} para continuar`,
    }   
  ];

const inquirerMenu = async () => {
  console.clear();
  console.log("======================".america);
  console.log("Seleccione una opcíon ".bgWhite.black);
  console.log("======================\n".america);

  const { option } = await inquirer.prompt(preguntas);

  return option;
};

const pausa = async () => {
    console.log('\n');
    const {option} = await inquirer.prompt(confirmacionPausa);

    return option;
};

export { inquirerMenu, pausa };
