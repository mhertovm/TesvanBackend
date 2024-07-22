import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { join } from 'path';

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

  async deleteFile(filename: string): Promise<void> {
    const uploadPath = './static';
    const filePath = join(uploadPath, filename);
    await fs
      .unlink(filePath)
      .catch((error) => console.error(`Error deleting ${filePath}:`, error));
  }
}
