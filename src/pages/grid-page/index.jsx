import React from 'react';
import { Header } from '../../components/header';
import { Layout } from '../../layout/app-layout';
import { LeftMenu } from '../../components/left-menu';

export const GridPage = () => {
  const cats = (num) => {
    const catArray = Array(num).fill();

    return catArray.map((cat) => (
      <div />
    ));
  }

  return (
    <React.Fragment>
      <Layout>
        <Header />
        <LeftMenu />
        <div className="sub-grid">
          {cats(35)}
        </div>
      </Layout>
    </React.Fragment>
  )
}
