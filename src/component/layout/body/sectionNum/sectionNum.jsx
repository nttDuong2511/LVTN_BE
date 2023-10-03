import React from 'react';
import './sectionNum.css';

export default function SectionNum() {
  return (
    <section className="section_num">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-6 item">
            <img
              width="64"
              height="64"
              className="lazyload loaded"
              src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/thong_ke1.png?1686650273952"
              alt="Cửa hàng"
              data-was-processed="true"
            />
            <div className="content">
              <span className="num">
                <span className="counter">8</span>+
              </span>
              <span className="title">Cửa hàng</span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 item">
            <img
              width="64"
              height="64"
              className="lazyload loaded"
              src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/thong_ke2.png?1686650273952"
              alt="Nhân viên"
              data-was-processed="true"
            />

            <div className="content">
              <span className="num">
                <span className="counter">200</span>+
              </span>
              <span className="title">Nhân viên</span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 item">
            <img
              width="64"
              height="64"
              className="lazyload loaded"
              src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/thong_ke3.png?1686650273952"
              alt="Khách hàng"
              data-was-processed="true"
            />
            <div className="content">
              <span className="num">
                <span className="counter">5000</span>+
              </span>
              <span className="title">Khách hàng</span>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 item1">
            <img
              width="64"
              height="64"
              className="lazyload loaded"
              src="//bizweb.dktcdn.net/100/469/097/themes/882205/assets/thong_ke4.png?1686650273952"
              alt="Món ăn"
              data-was-processed="true"
            />
            <div className="content">
              <span className="num">
                <span className="counter">50</span>+
              </span> 
              <span className="title">Món ăn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
