import React from "react"
import { Heading } from "../common/Heading"
import { contact } from "../data/dummydata"
import emailjs from '@emailjs/browser';
import {useForm} from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

  const {reset} = useForm();
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm(
    'service_rgnoocv',
    'template_deuoujx',
    e.target,
    'mzx4wsWnJQ18NbxVl'
    ).then(res=>{
      console.log(res);
      setButtonText("Send");
      setStatus({ success: true, message: 'Message sent successfully' });
    }).catch(err=>console.log(err));

    let name = document.getElementById('name');
    let mail = document.getElementById('mail');
    let sub = document.getElementById('sub');
    let msg = document.getElementById('msg');

    name.value = "";
    mail.value = "";
    sub.value = "";
    msg.value = "";
}

function clearText() {
    // toast.success('', {
    //                       position: "top-right",
    //                       autoClose: 5000,
    //                       hideProgressBar: false,
    //                       closeOnClick: true,
    //                       pauseOnHover: true,
    //                       draggable: true,
    //                       progress: undefined,
    //                       theme: "colored",
    //                   });
 }

  return (
    <>
      <div className='contact'>
        <div className='container'>
          <Heading title='Keep In Touch' />
          <div className='content flexsb'>
            <div className='right'>
              <form onSubmit={sendEmail} >
                <div className='flex'>
                  <input type='text' placeholder='Name' name="name" data-aos='flip-left' id="name"/>
                  <input type='email' placeholder='Email' name='email' data-aos='flip-right' id="mail"/>
                </div>
                <input type='text' placeholder='Subject' name='subject' data-aos='flip-up' id="sub"/>
                <textarea name='msg' id='msg' cols='30' rows='10' data-aos='flip-down'></textarea>
                <button data-aos='zoom-in-up'>Submit</button>
                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
              </form>
            </div>
            <div className='left'>
              {contact.map((item) => (
                <div className='box' data-aos='zoom-in'>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}