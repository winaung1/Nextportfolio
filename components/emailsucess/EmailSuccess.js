
import {useEffect} from 'react'
import {useState} from 'react'
import LoadingEmail from '../LoadingEmail';
import EmailSent from './EmailSent';
function EmailSuccess({setHandleSubmit}) {
 const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setHandleSubmit(false)
        }, 4000)
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
  return (
    <div> 
        {loading ? <LoadingEmail/> :
         <EmailSent/>
        }
    </div>
  )
}

export default EmailSuccess