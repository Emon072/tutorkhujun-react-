
const jwt = require('jsonwebtoken');


const accessTokenSecret = 'your_access_token_secret';

const accessTokenPayload = {
    userId: 123456,
    username: 'exampleuser'
};

const accessToken = jwt.sign(accessTokenPayload, accessTokenSecret, { expiresIn: '1h' });

    console.log('Access Token:', accessToken);

    // Verify access token
    jwt.verify(accessToken, accessTokenSecret, (err, decoded) => {
        if (err) {
            console.error('Error verifying access token:', err.message);
        } else {
            console.log('Decoded access token:', decoded);
        }
    });

// const addMockTutor = (requestConfig) => {
//     console.log(tutorInfo);

//     // Define your secret key for access token

//     // Generate access token
    

//     return Promise.resolve(requestConfig.data);
// };
