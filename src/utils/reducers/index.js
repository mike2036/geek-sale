// 这是通用写法
export const createAction = (type, payload) => ({ type, payload });
//  接收两个参数，type和payload，返回一个对象，里面有两个属性，type和payload
