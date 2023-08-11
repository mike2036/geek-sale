// 为所有导入的'.svg'文件创建一个模块声明，'*.svg'表示所有的'svg'文件都将被处理
declare module '*.svg' {
  // 对于所有导入的*.svg文件，将会在这个模块中进行处理
  import React = require('react'); // 引入react模块，因为SVG图像会被渲染为React组件
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>; // 定义并导出一个名为ReactComponent的React组件，这个组件将用于渲染导入的SVG图像
  // 上面的<React.SVGProps<SVGSVGElement>>表示这个组件可以接受SVG元素的属性
  const src: string; // 声明了一个src，其类型为字符串，这个src将用于储存导入的svg文件的路径
  export default src;
}

declare module '*.png' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string; // 声明了一个src，其类型为字符串，这个src将包含导入的svg文件的路径
  export default src;
}
