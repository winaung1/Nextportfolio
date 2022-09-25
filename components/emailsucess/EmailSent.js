import { FaCheckCircle } from 'react-icons/fa';
function EmailSent() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div>
            <FaCheckCircle className='w-40 h-40 text-7xl mx-auto text-green-500'/>
            <h1 className='font-bold text-2xl text-center'>Thank You!</h1>
            <p>Your submission has been sent.</p>
        </div>
    </div>
  )
}

export default EmailSent