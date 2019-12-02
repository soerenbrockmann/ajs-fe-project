import http from "http";
import { renderItems } from "./renderItems";

class ReportList {
  constructor() {
    this.data = [];
    this.init();
  }

  async init() {
    await this.fetchData();
    this.render();
  }

  fetchData() {
    return new Promise((resolve, reject) => {
      http.get("http://localhost:3000/reports", response => {
        let data = "";
        response.on("data", chunk => {
          data += chunk;
        });

        response.on("end", () => {
          this.data = JSON.parse(data);
          resolve();
        });

        response.on("error", error => {
          console.log(error);
          reject(error);
        });
      });
    });
  }
  render() {
    let items = "";
    this.data.forEach(item => (items += renderItems(item)));

    document.getElementById("root").insertAdjacentHTML("afterbegin", items);
  }
}

new ReportList();
