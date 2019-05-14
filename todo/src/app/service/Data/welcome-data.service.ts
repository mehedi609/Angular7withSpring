import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export class HelloWorldBean {
  constructor(private message: string) {}
}

@Injectable({
  providedIn: "root"
})
export class WelcomeDataService {
  baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${this.baseUrl}/hello-world-bean`);
  }

  executeHelloWorldServiceWithPathVar(name) {
    return this.http.get(`${this.baseUrl}/hello-world/path-variable/${name}`);
  }
}
