import {send_email} from '@/services/contact';

export default async function handler(req, res)
{
    try {
        const { method, body } = req

        switch (method) {
            case 'POST':
                await send_email(
                    `Email Contact Portfolio - ${body.subject}`,
                    body.from,
                    'wiklapandu2503@gmail.com',
                    body.text
                )
                res.status(200).send('Success');
                break;
        
            case 'GET':
                res.status(200).send('hello the world') 
                break;
            default:
                res.status(200).send('hello the world') 
                break;
        }
    } catch(err) {
        res.status(400).json({
            error_code: 'api_one',
            message: err.message,
        })
    }
}