import BibleAPI from "../services/api";
import axios from "axios";

export class SearchBible {
  constructor() {
    this.version = document.querySelector("#version");
    this.book = document.querySelector("#bookName");
    this.chapter = document.querySelector("#capNumber");
    this.renderBible = [];

    this.content = document.querySelector("#content");
    this.btnSearch = document.querySelector("#btnSearch");

    this.registerClick();
  }

  registerClick() {
    this.btnSearch.onclick = () => this.addBible();
  }

  scrollToContent() {
    const contentScrollHeight = this.content.scrollWidth;
    window.scroll(0, contentScrollHeight / 2);
  }

  async addBible() {
    if (this.book.value === "" || this.chapter.value === "") {
      return;
    }
    this.renderBible = [];
    await BibleAPI.get(
      `/${this.version.value}/${this.book.value}/${this.chapter.value}`
    )
      .then((r) => {
        let bible = r.data;

        const { name, ...book } = bible.book;

        const { number, verses } = bible.chapter;

        const verse = bible.verses;

        this.renderBible.push({
          name,
          number,
          verse,
        });
      })

      .catch((err) => {
        const url = "../src/pages/error_page.html";
        axios.get(url).then((r) => {
          this.content.innerHTML = r.data;
        });
      });

    this.render();
  }

  render() {
    this.content.innerHTML = "";

    this.renderBible.map((bible) => {
      let title = document.createElement("h1");
      title.innerHTML = bible.name;

      let sub_title = document.createElement("h2");
      sub_title.innerHTML = bible.number;

      let ol = document.createElement("ol");
      let verses = bible.verse;
      for (let i = 0; i < verses.length; i++) {
        const { text, number } = verses[i];

        let li = document.createElement("li");
        li.innerHTML = text;
        li.className = "verses";

        this.content.appendChild(title);
        this.content.appendChild(sub_title);
        this.content.appendChild(ol);
        ol.appendChild(li);
      }
    });
    this.scrollToContent();
  }
}
