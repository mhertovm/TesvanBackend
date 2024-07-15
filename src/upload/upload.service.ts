import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
    uploadFile(file: Express.Multer.File) { 
        return {
            originalName: file.originalname,
            filename: file.filename,
            path: file.path,
            size: file.size,
        };
    }
}
