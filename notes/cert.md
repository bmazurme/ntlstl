```js
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import crypto from 'crypto';
 
import { CertificateRequestDto } from './dto/certificate-request.dto';
import { CertificateResponseDto } from './dto/certificate-response.dto';
 
@Injectable()
export class CertificatesService {
  getCertificateInfo(dto: CertificateRequestDto) {
    if (!dto.certBase64) {
      throw new HttpException(
        'certBase64 attribute not defined in request',
        HttpStatus.BAD_REQUEST,
      );
    }
 
    try {
      const cert = new crypto.X509Certificate(dto.certBase64);
      const hash = crypto.createHash('sha1');
      hash.update(cert.raw);
 
      const thumbprint = hash.digest('hex');
      const serialNumber = parseInt(cert.serialNumber, 16);
 
      const response: CertificateResponseDto = {
        certificateHash: thumbprint,
        certificateSerialNumber: serialNumber.toString(),
      };
 
      return response;
    } catch (error) {
      console.log(error);
 
      throw new HttpException(
        'Error processing certificate',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
```
