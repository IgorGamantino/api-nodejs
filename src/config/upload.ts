import multer from 'multer';
import { resolve } from 'path'
import crypto from 'crypto';

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', folder),
        filename: (req, file, callback) => {
          const fileHash = crypto.randomBytes(10).toString('hex');
          const filename = `${fileHash}-${file.originalname}`;
          return callback(null, filename);
        }
      }),
    }
  }
}
