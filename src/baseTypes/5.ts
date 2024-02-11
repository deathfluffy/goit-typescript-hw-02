/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/
let unionType: string | number;

unionType = 'Max'
unionType = 12

let literalType: 'enable' | 'disable';

literalType = 'enable'
literalType = 'disable'



export {}