import React from 'react';
import './Contact.css'
const Contact = () => {
    const submitHandler = () => {
        const name = document.getElementById('name');
        const nameVal = name.value;
        const email = document.getElementById('email');
        const emailVal = email.value;
        const subject = document.getElementById('subject');
        const subjectVal = subject.value;

        const message = document.getElementById('message');
        const messageVal = message.value;

        // Open the user's default email app and populate the fields
        window.location.href = `mailto:marufabdullah319@gmail.com?subject= ${subjectVal}&body=${messageVal}%0D%0A%0D%0A%0D%0AContact details:%0D%0AName: ${nameVal}%0D%0AEmail: ${emailVal}`;

        name.value = '';
        email.value = '';
        message.value = '';
        subject.value = '';
    }
    return (
        <div className='pt-24 pb-28 bg-[#00040e]'>
            <div className='bg-[#00040e] text-center pb-20'>
                <h2 className='text-4xl font-bold text-white mb-[11px]'>Contact</h2>
                <hr className='mx-auto border-none w-[84px] bg-[#ffb444] h-1' />
            </div>
            <div className='flex items-center justify-center gap-5'>
                <div className='bg-[#010818] rounded-xl text-center py-11 px-10'>
                    <img className='mb-6 flex mx-auto' src="images/email.png" alt="" />
                    <h2 className='text-white text-[22px] font-medium'>marufabdullah319@gmail.com</h2>
                </div>
                <div className='bg-[#010818] rounded-xl text-center py-11 px-10'>
                    <img className='mb-6 flex mx-auto' src="images/phone.png" alt="" />
                    <h2 className='text-white text-[22px] font-medium'>+880 1625680371</h2>
                </div>
                <div className='bg-[#010818] rounded-xl text-center py-11 px-10'>
                    <img className='mb-6 flex mx-auto' src="images/thumbsup.png" alt="" />
                    <h2 className='text-white text-[22px] font-medium'>Available For Freelance</h2>
                </div>
            </div>
            <div className='bg-[#00040e] text-center pb-20 pt-28'>
                <h2 className='text-4xl font-bold text-white mb-[11px]'>How Can I Help You?</h2>
                <hr className='mx-auto border-none w-[84px] bg-[#ffb444] h-1' />
            </div>
            <div className='px-[100px] pb-14'>
                <div className='contact'>
                    <div className='flex-col'>
                        <div>
                            <input id='name' className='text-[#a5a5a5] block input-field py-7 px-[34px] w-full' type="text" placeholder='Full name' />
                        </div>
                        <div>
                            <input id='email' className='text-[#a5a5a5] block input-field py-7 px-[34px] w-full' type="text" placeholder='Email Address' />
                        </div>
                        <div>
                            <input id='subject' className='text-[#a5a5a5] block input-field py-7 px-[34px] w-full' type="text" placeholder='Subject' />
                        </div>
                    </div>
                    <div>
                        <textarea id='message' className='text-[#a5a5a5] input-field h-full w-full py-7 px-[34px] txt-area' placeholder='Message'></textarea>
                    </div>
                </div>
            </div>
            <div className='px-[100px]'>
                <button className='bg-[#ffb444] py-6 text-center w-full rounded-xl text-[28px] font-semibold' onClick={submitHandler}>Submit</button>
            </div>
        </div>
    );
};

export default Contact;