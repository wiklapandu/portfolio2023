import { ajaxCallPost } from '@/data/func/api';

export const SendContact = (data, setAlert) => {
    return ajaxCallPost('/email', {
        subject: data.subject,
        email: data.email,
        name: data.name,
        content: data.content
    }, process.env.TOKEN_MAIL).then((res) => {
        // setError(res);
        setAlert({status: 'success', message: 'success sending message🤩'})
    }).catch((xhr) => {
        setAlert({status: 'danger', message: 'Woups! Failed sending email.😐'})
        console.log('error:', xhr)
    })
}