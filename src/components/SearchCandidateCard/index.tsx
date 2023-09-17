// import { Fragment, FC, MutableRefObject, useEffect, useRef } from 'react';
// import { TranslucentBackground } from '../TranslucentBackground';
// import {
//   StyledCard,
//   StyledTriangle,
//   StyledHistory,
//   StyledPopular,
// } from './index.styles';

// const searchHistory = ['floodlight', 'standing desk', 'PS5'];

// type cardPropType = {
//   ref: MutableRefObject<HTMLElement | null>;
// };

// export const SearchCandidateCard: FC = () => {
//   // 定义一个ref对象
//   const candidateCardRef: MutableRefObject<HTMLDivElement | null> =
//     useRef(null);
//   // 再定义一个ref对象
//   const inputRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

//   // 处理点击事件
//   useEffect(() => {
//     const handleClick = (event: MouseEvent) => {
//       console.log(event.target);
//       console.log(candidateCardRef.current);

//       // 检查点击事件是否发生在输入框以及候选词卡片以外的区域
//       if (candidateCardRef.current) {
//         if (!candidateCardRef.current.contains(event.target as Node)) {
//           console.log('在候选词框的外面点击');
//         }
//       }
//     };

//     // 添加全局点击事件监听器
//     document.addEventListener('mousedown', handleClick);

//     // 清除事件监听器以防止内存泄漏
//     return () => {
//       document.removeEventListener('mousedown', handleClick);
//     };
//   }, []);

//   return (
//     <Fragment>
//       {/* 显示半透明背景，传递位置参数 */}
//       <TranslucentBackground top="70px" left="-40px" />

//       {/*  显示小三角形 */}
//       <StyledTriangle />

//       {/*  显示候选词卡片，包括搜索历史和热门搜索 */}
//       <StyledCard ref={candidateCardRef}>
//         {/* 搜索历史 */}
//         <StyledHistory>
//           <h3>Recent</h3>
//           <div>
//             {/* 最近搜索词条 */}
//             {searchHistory.map((item) => (
//               <span>{item}</span>
//             ))}
//           </div>

//           {/* 清空搜索记录图标 */}
//         </StyledHistory>

//         {/* 热门搜索 */}
//         <StyledPopular>
//           <h3>Popular right now</h3>
//         </StyledPopular>
//       </StyledCard>
//     </Fragment>
//   );
// };
