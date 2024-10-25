import axios from 'axios';

const PINATA_API_KEY = '2dd0e6c89f89f6966123';
const PINATA_SECRET_API_KEY = 'eebe0432eb8a529d3d026428aaa6c08c9309bfaf4e59b88ac7ba474ac693e94c';

export const pinFileToIPFS = async (file) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    let data = new FormData();
    data.append('file', file);

    const headers = {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY
    };

    return axios
        .post(url, data, { headers: headers })
        .then(function (response) {
            console.log("File pinned successfully:", response.data);
            return response.data;
        })
        .catch(function (error) {
            console.error("Error pinning file:", error);
            throw error;
        });
};
