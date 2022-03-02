export default function getPassword(password:any) {
    let MD5:any = require('md5');
    return MD5(password);
}
