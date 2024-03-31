export const tipado = [
  
    {tipo :"boolean: true | false"},
    {tipo :"string: va entre comillas"},
    {tipo :"number: 1234567890"},
    {tipo :"array: [aqui pueden ir colecciones de cualquier tipode datos]"},
    {tipo :"objetos: {aqui los datos se almacenan con 'clave' : 'valor'}"},
  
];

export const ejemplos = [
  {
    ejName: 'String',
    ej: "nombre:string = 'Jorge'",
  },
  {
    ejName: 'Boolean',
    ej: 'esValido:boolean = true',
  },
  {
    ejName: 'Number',
    ej: 'edad:number = 10',
  },
  {
    ejName: 'Array de strings',
    ej: 'frutas:string[] = ["pera","banana","kiwi"]',
  },
  {
    ejName: 'Array de números',
    ej: 'numeros: number[] = [1, 2, 3]',
  },
  {
    ejName: 'Array de booleanos',
    ej: 'valores: boolean[] = [true, false, true]',
  },
  {
    ejName: 'Array de arrays de strings',
    ej: 'grupos: string[][] = [["a", "b"], ["c", "d"], ["e", "f"]]',
  },
  {
    ejName: 'Union de varios tipos',
    ej: 'dato: number | string | boolean = true',
  },
  {
    ejName: 'Array con varios tipos',
    ej: 'datos: (number | string[] | boolean)[] = [1, ["a", "b"], true]',
  },
  {
    ejName: 'Array con varios tipos (alternativa)',
    ej: 'datos: [number | string[] | boolean ] = [1, ["a", "b"], true]',
  },
  {
    ejName: 'Ejemplo inventado 1',
    ej: 'resultado: string | number = "éxito"',
  },
  {
    ejName: 'Ejemplo inventado 2',
    ej: 'opciones: (string | number)[] = ["opción1", "opción2", 3, "opción4"]',
  },
];
