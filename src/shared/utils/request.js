import { homeUrl } from './apiEndPoints';

const request = require('request');
const cookies = require('react-cookies');
const makeRequest = options => {
    return new Promise((resolve, reject) => {
        if (
            cookies.load('dianauthtoken', { domain: homeUrl })
        ) {
            options = {
                ...options,
                headers: {
                    ...options.headers,
                    dianauthtoken: `${cookies.load('dianauthtoken')}`,
                },
            };
        }

        request(options, (err, response, body) => {
            if (err) {
                try{
                    resolve(JSON.parse(err))
                } catch (e){
                    resolve(err)
                }
            } else if (response.statusCode !== 200) {
                try{
                    resolve(JSON.parse(response.body))
                } catch (e){
                    resolve(response.body)
                }
            } else {
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    resolve(body);
                }
            }
        });
    });
};
export default makeRequest;
