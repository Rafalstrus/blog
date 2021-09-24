import JSEncrypt from 'jsencrypt';

export function encrypt(text: string, publicKey: any) {
    const encrypt = new JSEncrypt({});
    encrypt.setPublicKey(publicKey);
    const encrypted = encrypt.encrypt(text);
    return encrypted;
  }