export class HTTPRequest {
  private url: string = 'url';
  public jsonData: any;
  checkStatusResponse(response: any) {
    if (!response.ok) {
      throw 'Ошибка ' + response.status;
    }
  }
  async postRequest(methodRequest: string, content: any) {
    /** methodRequest - название метода get запроса
     *  content -  JSON Объект для передачи  на сервер post запросом */
    let baseURL: string = this.url + methodRequest;
    const response = await fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(content),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    });
    this.checkStatusResponse(response);
    this.jsonData = response;
  }

  async getRequest(methodRequest: string, paramRequest: string) {
    /** methodRequest - название метода get запроса
     * paramRequest -  параметры запроса "?params1=100&params2=2"*/
    let baseURL: string = this.url + methodRequest + paramRequest;
    const stateResponse = await fetch(baseURL);
    let response = await fetch(baseURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.text())
      .then(data => {
        this.jsonData = data;
      });
    this.checkStatusResponse(stateResponse);
    return response;
  }
}
