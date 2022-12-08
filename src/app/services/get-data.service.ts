import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  api_url="http://127.0.0.1:8000"
  constructor(private http: HttpClient) { 
  }
  getdata():Observable<any>{
    return this.http.get(`${this.api_url}/api/stories_list/`);
  }
  addStory(story_data:any):Observable<any>{
    const url=`${this.api_url}/api/stories_list/`;
    return this.http.post(url,story_data)
  }
  deleteStory(id:number):Observable<any>{
    const url = `${this.api_url}/api/stories_list/${id}`
    return this.http.delete(url)
  }
  updateStory(id:number,particularStory:any):Observable<any>{
    const url=`${this.api_url}/api/stories_list/${id}`
    return this.http.put(url,particularStory)
  }
}
