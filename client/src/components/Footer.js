import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className='footer__container'>
      <div className='footer__top'>
        <div className='footer__left'>
          <h4 className='Footer-Text-Bold'>what happened</h4>
          <p className='Footer-Text-Regular'>
            [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] 29CM 강남 스토어
            영업 종료 [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] iOS 10
            이하 버전 지원 중단 안내 [공지] 개인 정보 처리 방침 변경 사전 안내
          </p>
        </div>
        <div className='footer__right'>
          <div className='footer__column footer__about-us'>
            <h4 className='Footer-Text-Bold'>about us</h4>
            <p className='Footer-Text-Regular'>
              회사 소개 인재 채용 상시 할인 혜택
            </p>
          </div>
          <div className='footer__column footer__my-order'>
            <h4 className='Footer-Text-Bold'>my order</h4>
            <p className='Footer-Text-Regular'>
              내 주문 주문 배송 취소 / 교환 / 반품 내역 상품 리뷰 내역 증빙 서류
              발급
            </p>
          </div>
          <div className='footer__column footer__my-account'>
            <h4 className='Footer-Text-Bold'>my account</h4>
            <p className='Footer-Text-Regular'>
              회원 정보 수정 회원 등급 마일리지 현황 쿠폰
            </p>
          </div>
          <div className='footer__column footer__help'>
            <h4 className='Footer-Text-Bold'>help</h4>
            <p className='Footer-Text-Regular'>
              1 : 1 상담 내역 상품 Q & A 내역 공지 사항 자주하는 질문 고객의
              소리
            </p>
          </div>
        </div>
      </div>
      <div className='footer__bottom'>
        <p className='footer__copyright Footer-Text-Regular'>
          © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
          사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
          <br />
          서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
          이용약관 l 개인정보처리방침
        </p>
        <div>
          <img src='img/snsicon-01.png' alt='snsicon' />
          <img
            className='footer__facebook-icon'
            src='img/snsicon-02.png'
            alt='snsicon'
          />
          <img src='img/snsicon-03.png' alt='snsicon' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
