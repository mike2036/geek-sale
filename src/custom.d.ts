// 为所有导入的'.svg'文件创建一个模块声明，'*.svg'表示所有的'svg'文件都将被处理
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string; // 声明了一个src，其类型为字符串，这个src将包含导入的svg文件的路径
  export default src;
}

declare module '*.png' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string; // 声明了一个src，其类型为字符串，这个src将包含导入的svg文件的路径
  export default src;
}
