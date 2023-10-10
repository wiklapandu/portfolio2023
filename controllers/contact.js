import { ajaxCallPost } from '@/data/func/api';

export const SendContact = (data, setAlert) => {
    ajaxCallPost('/email', {
        subject: data.subject,
        email: data.email,
        name: data.name,
        content: data.content
    }, process.env.TOKEN_MAIL).then((res) => {
        console.log('result:', res);
        // setError(res);
        setAlert({status: 'success', message: 'success sending message'})
    }).catch((xhr) => {
        setAlert({status: 'danger', message: 'woups something wrong'})
        console.log('error:', xhr)
    })
}