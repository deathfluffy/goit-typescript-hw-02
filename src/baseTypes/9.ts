/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
type pageUser1 = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
  details: {
    createAt: Date,
    updateAt: Date
  }
}
const page1: pageUser1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}
type pageUser2 = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
}
const page2: pageUser2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {};