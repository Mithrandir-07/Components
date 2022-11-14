import { Main } from 'next/document';
import Link from 'next/link';
import Form from './Components/Form/form';
import Modal from './Components/Modal/modal';
import Body from './Components/Body/body';
import Navbar from './Components/navbar';
import React from 'react';
import { ReactDOM } from 'react';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Form />
      <Modal />
    </div>
  )
}

export default Home;