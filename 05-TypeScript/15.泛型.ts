//  泛型

/**
 * 软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 
 * 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
 * 在TypeScript中，泛型是一种创建可复用代码组件的工具。这种组件不只能被一种类型使用，而是能被多种类型复用。类似于参数的作用，
 * 泛型是一种用以增强类型（types）、接口（interfaces）、函数类型等能力的非常可靠的手段。
 */


// 1. 泛型函数
// 2. 让函数可以支持不同类型（复用），且保证类型是安全的。
// 3. 泛型可以省略 id3 情况  传入的数据可以推断出你想要的类型，就可以省略。

function getId<T>(id: T): T {
    return id
}
function getIdArr<T, D>(id: T): T[] { // 这样也是可以的
    return [id]
}

let id1 = getId<number>(1)
let id2 = getId<string>('1')
let id3 = getId('2')   // TS会进行类型推断，参数的类型作为泛型的类型 getId<string>('2')


// 一些常用的泛型工具(Ts 内置的)
// 1. readonly
type Props =  {
    id: string
    children: number[]
  }
  
type ReadonlyProps = Readonly<Props>

const readonlyObj: ReadonlyProps = {
    id: '1',
    children: [1,2,3]
}

// readonlyObj.id = 5  这样就会报错


// 2. 可选参数

interface Props0  {
    id: string
    children: number[]
  }
  

const PartialObj : Partial<Props0> = {
 id: '123'
}

// 3. 挑出几个 组成 新类型 Pick

interface Props100 {
    id: string
    title: string
    children: number[]
  }
type PickProps = Pick<Props100, 'id' | 'title'>

const obj100: PickProps = {
    id: '123',
    title: 'hha'
}

// 4. Omit 和 Pick 相反  踢出几个

type Props200 {
	name: string
	age: number
	hobby: string
	sex: '男' | '女'
}

// 如果我不希望有hobby和sex这两个属性，可以这么写
type NewProps200 = Omit<Props200, "hobby" | "sex">
// 等价于
type NewProps200Pro = {
  name: string
  age: number
}


