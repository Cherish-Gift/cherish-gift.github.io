import React, { useRef, useState, useEffect } from 'react';
import './FontAwesome';
import '../BottomNav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import throttle from 'lodash/throttle';

const BottomNav = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = React.useState(0);

  // 각 페이지별 상태를 나타내는 변수
  const HomeTag = 1;
  const CurationTag = 2;
  const CategoryTag = 3;
  const SaveTag = 4;

  // 스크롤 감지를 관리하는 state
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  // 이전 y값과 현재 y값을 빼서 state를 변경시켜주는 로직.
  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 50);
  useEffect(() => {
    documentRef.current.addEventListener('scroll', throttleScroll);
    return () => documentRef.current.removeEventListener('scroll', throttleScroll);
  }, [pageY]);

  return (
    /* 하단 네비게이션 최상위 태그 */
    <nav className={hide ? 'wrapper-hidden' : 'wrapper'}>
      {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
      <Link
        to="/first"
        className="nav-link"
        onClick={() => {
          setActiveNav(HomeTag);
        }}
      >
        <div>
          <FontAwesomeIcon
            icon="home"
            className={activeNav === 1 ? 'nav-item active' : 'nav-item'}
          />
          <div className={activeNav === 1 ? 'nav-title active' : 'nav-title'}>홈</div>
        </div>
      </Link>
      <Link
        to="/second"
        className="nav-link"
        onClick={() => {
          setActiveNav(CurationTag);
        }}
      >
        <div>
          <FontAwesomeIcon
            icon="compass"
            className={activeNav === 2 ? 'nav-item active' : 'nav-item'}
          />
          <div className={activeNav === 2 ? 'nav-title active' : 'nav-title'}>큐레이션</div>
        </div>
      </Link>
      <Link
        to="/third"
        className="nav-link"
        onClick={() => {
          setActiveNav(CategoryTag);
        }}
      >
        <div>
          <FontAwesomeIcon
            icon="plus"
            className={activeNav === 3 ? 'nav-item active' : 'nav-item'}
          />
          <div className={activeNav === 3 ? 'nav-title active' : 'nav-title'}>카테고리</div>
        </div>
      </Link>
      <Link
        to="/fourth"
        className="nav-link"
        onClick={() => {
          setActiveNav(SaveTag);
        }}
      >
        <div>
          <FontAwesomeIcon
            icon="medal"
            className={activeNav === 4 ? 'nav-item active' : 'nav-item'}
          />
          <div className={activeNav === 4 ? 'nav-title active' : 'nav-title'}>저장목록</div>
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;
