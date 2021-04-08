const cloudinary = require("cloudinary").v2;

export default async (_req, res) => {
    // can authenticate user here somehow but would need to add to this code or change it

    const timestamp = Math.round((new Date).getTime()/1000);

    // // Show the timestamp
    // console.log('Timestamp:',timestamp);

    // Get the signature using the Node.js SDK method api_sign_request
    const signature = cloudinary.utils.api_sign_request(
        {
            timestamp: timestamp
            // eager: 'w_400,h_300,c_pad|w_260,h_200,c_crop',
            // public_id: 'sample_image'},
        },
        process.env.REACT_APP_CLOUDINARY_SECRET
    );

    res.status = 200;
    res.json({ signature, timestamp });
};

