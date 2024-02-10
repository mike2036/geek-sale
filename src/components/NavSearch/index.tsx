import {
  SearchBar,
  StyledSearchIcon,
  StyledCard,
  StyledHistory,
  StyledPopular,
} from './index.styles';
import {
  useState,
  useEffect,
  useRef,
  RefObject,
  FC,
  Fragment,
  forwardRef,
} from 'react';
import { TranslucentBackground } from '../TranslucentBackground';

const defaultValue = 'weird stuff';

// 搜索组件
export const NavSearch: FC = () => {
  // 下面代码的<string>显式地为useState函数提供类型信息
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSearchBarMouseHover, setIsSearchBarMouseHover] = useState(false);

  const [isCandidateCardOpen, setIsCandidateCardOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // 定义一个ref对象，将来用来指向搜索框元素
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  // 定义一个ref对象
  const candidateCardRef: RefObject<HTMLDivElement | null> = useRef(null);

  // 模拟数据源
  const data: string[] = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Lemon',
    'Orange',
    'Pear',
  ];

  // // 定义一个ref对象
  // const candidateCardRef: MutableRefObject<HTMLElement | null> = useRef(null);

  const handleSearchBarMouseOver = () => {
    setIsSearchBarMouseHover(true);
    // console.log(isSearchBarMouseHover);
  };
  const handleSearchBarMouseOut = () => {
    setIsSearchBarMouseHover(false);
    // console.log(isSearchBarMouseHover);
  };

  const handleSearchBarFocus = () => {
    setIsFocused(true);
    setIsCandidateCardOpen(true);
  };

  // const handleSearchBarBlur = (e: React.FocusEvent<HTMLInputElement>) => {
  //   // 判断当前点击区域是否在候选词卡片中
  //   if (!candidateCardRef.current) {
  //     // 如果不在候选词卡片中，隐藏候选词框
  //     setIsCandidateCardOpen(false);
  //   }
  // };

  // 处理全局点击事件
  const handleGlobalClick = (event: MouseEvent) => {
    console.log(event.target);

    // 检查点击事件是否发生在输入框以及候选词卡片以外的区域
    if (
      searchInputRef.current &&
      candidateCardRef.current &&
      !searchInputRef.current.contains(event.target as Node) &&
      !candidateCardRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false);
      setIsCandidateCardOpen(false);
    }
  };
  // 过滤出包含搜索关键词的结果
  useEffect(() => {
    const filteredResults = data.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchTerm]);

  // 添加全局点击监听器
  useEffect(() => {
    document.addEventListener('mousedown', handleGlobalClick);

    // 清除事件监听器以防止内存泄漏
    return () => {
      document.removeEventListener('mousedown', handleGlobalClick);
    };
  }, []);

  return (
    // 1.搜索框
    <SearchBar
      isSearchBarMouseHover={isSearchBarMouseHover}
      onMouseOver={handleSearchBarMouseOver}
      onMouseOut={handleSearchBarMouseOut}
      onFocus={handleSearchBarFocus}
      // onBlur={handleSearchBarBlur}
    >
      <input
        id="searchInput"
        type="text"
        placeholder={defaultValue}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        // isSearchBarMouseHover={isSearchBarMouseHover}
        autoComplete="off"
        ref={searchInputRef}
      />
      <StyledSearchIcon />

      {isFocused && isCandidateCardOpen && (
        <SearchCandidateCard candidateCardRef={candidateCardRef} />
      )}
    </SearchBar>
  );
};

// 定义子组件属性的类型
type CardPropType = {
  candidateCardRef: RefObject<HTMLDivElement | null>;
};

// 定义 子组件 候选词卡片
// const SearchCandidateCard: FC<CardPropType> = forwardRef(({ candidateCardRef }) => {
const SearchCandidateCard: FC<CardPropType> = forwardRef(
  ({ candidateCardRef }) => {
    const searchHistory = ['floodlight', 'standing desk', 'PS5'];
    const popularSearch = [
      'mens joggers',
      'portable printer',
      'metal signs',
      'fidgets  graphic tees',
      'bracelets',
      'mini photo printer',
      'led lights',
      'fall clothes',
    ];

    return (
      <Fragment>
        {/* 显示半透明背景，传递位置参数 */}
        <TranslucentBackground top="70px" left="-40px" />

        {/*  显示候选词卡片，包括搜索历史和热门搜索 */}
        <StyledCard ref={candidateCardRef as React.LegacyRef<HTMLDivElement>}>
          {/* 搜索历史 */}
          <StyledHistory>
            <h3>Recent</h3>
            <div>
              {/* 最近搜索词条 */}
              {searchHistory.map((item) => (
                <span>{item}</span>
              ))}
            </div>

            {/* 清空搜索记录图标 */}
          </StyledHistory>

          {/* 热门搜索 */}
          <StyledPopular>
            <h3>Popular right now</h3>
            <div>
              {/* 热门搜索词条 */}
              {popularSearch.map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </StyledPopular>
        </StyledCard>
      </Fragment>
    );
  }
);
