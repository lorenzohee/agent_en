import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  isLoggedIn = false;

  redirectUrl: String;

  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = true;
        this.setAuthenToken('eyJhbGciOiJSUzI1NiJ9.eyJ1dWlkIjoiYTdmOGNmY2MtMjdiNi00NmQ2LWI4NDYtMmZmNjI5ZjcwMjUwIiwiZW1haWwiOiJtYXRpYW5qdW5AaGFpZXIuY29tIn0.pKy4cOj3DOGd8CTM_gxvdI7s4rVHekDj1-mcXy0057tHHb5t3fRqphk4Wi1wS61s26tLdgiCSxAItAShQlDRxYFtcyB95gImQSm1yGsG_ZLEzl3hNDcuh21pl56hYr79RC4CTDnzPKQPb7oy2bpcXd0RyOtD0FfeKV8JY2XhM_jW_tU3Y_fX6EguHJVwpGVUQ5oUpP1cuIzyuwRrwleS89hfGfNErc_Q9gTNifQ1o_oQijIhqOLITk4IHB_EENIq6IDxDcKu8yAX31cGr9vXM85Kr5WlrArAy2dEk8lbCXs3vea747H3UOSCbF9BxAIY5VKyLzU_Zbz7MhsaZa1yqw');
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.setAuthenToken('');
  }

  setItem(key, value) { /* 设置key-value格式的数据存储在localStorage对象中 */
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key) { /* 获取localStorage对象中存储的值 */
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key) { /* 移除localStorage对象中指定key的value值 */
    localStorage.removeItem(key);
  }

  getAuthenToken(): String {
    return this.getItem('authen_token');
  }

  setAuthenToken(authen_token) {
    this.setItem('authen_token', authen_token);
  }
}
