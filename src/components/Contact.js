import React from 'react';
import '/Users/sonabriskarova/Desktop/my-app/src/components/Contact.css';

const Contact = () => {
  return (
    <>
    <div className='container'>
    <section>
        <img src={require('/Users/sonabriskarova/Desktop/my-app/src/images/email.png')} width={80} height={80} alt='logo' />
        jozef.losbozik@gmail.com
    </section>
    </div>
    </>
);
};


export default Contact;