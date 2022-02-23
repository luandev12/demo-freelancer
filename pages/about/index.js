import Head from 'next/head';
import Image from 'next/image';

import Style from './Style';

export default function Home() {
  return (
    <Style>
      <div className="box">
        <div className="col-1">col 1</div>
        <div className="col-2">col 2</div>
      </div>
    </Style>
  );
}
