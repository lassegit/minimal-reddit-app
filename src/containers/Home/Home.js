import React from 'react';
import Layout from '../../components/Layout';
import SubAdd from '../SubAdd';
import SubList from '../SubList';
import { H1 } from '../../components/Heading';

const Home = () => (
  <div>
    <Layout
      column1={
        <React.Fragment>
          <SubAdd /> <SubList />
        </React.Fragment>
      }
      column2={
        <React.Fragment>
          <H1>Make your own Reddit with React & Redux</H1>
        </React.Fragment>
      }
    />
  </div>
);

export default Home;
