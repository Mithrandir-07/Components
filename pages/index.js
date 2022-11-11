import { Main } from 'next/document';
import Link from 'next/link';
import Form from './Components/Form/form';
import Modal from './Components/Modal/modal';
import Body from './Components/Body/body';


export default function Home() {
  return (
    <div>
      <Body />
      <Form />
      <Modal />
    </div>
  )
}
