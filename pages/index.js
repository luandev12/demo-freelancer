import Head from 'next/head';
import Image from 'next/image';

import Style from './Style';

export default function Home() {
  return (
    <Style>
      {/* <div classNameName="header-container">
        <div classNameName="header-wrap">
          <div classNameName="header">
            <div classNameName="header-main">
              <div classNameName="header-logo">Archisketch</div>
              <div classNameName="header-menu">
                <div classNameName="header-menu-item">Product</div>
                <div classNameName="header-menu-item">Pricing</div>
                <div classNameName="header-menu-item">Learn</div>
                <div classNameName="header-menu-item">Use Case</div>
                <div classNameName="header-menu-item">Help Center</div>
              </div>
            </div>
            <div classNameName="">Stsrt your Design</div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          <div className="col-6">Column</div>
          <div className="col-6 d-flex justify-content-end">Column</div>
        </div>
      </div>
    </Style>
  );
}
