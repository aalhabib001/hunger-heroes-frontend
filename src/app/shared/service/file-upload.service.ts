import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  url = 'https://api.imgbb.com/1/upload';

  constructor(private http: HttpClient) {
  }

  upload(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('key', '9dbed9e6b5dd0dad0ae40aaf775102f0');

    return this.http.post<any>(this.url, formData, {headers: {skip: 'true'}});
  }
}
