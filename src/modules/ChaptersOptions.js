import axios from "axios";

export default $(document).ready(function () {
  axios
    .get("https://www.abibliadigital.com.br/api/books")
    .then(function (r) {
      $("#bookName").change(() => {
        let bookName = $("#bookName").val();
        let bible = r.data;
        for (let i = 0; i < bible.length; i++) {
          const { abbrev, chapters, ...book } = bible[i];
          if (bookName == abbrev.pt) {
            document.getElementById("capNumber").innerHTML = "";
            for (let i = 1; i <= chapters; i++) {
              let opCaps = document.createElement("option");
              opCaps.innerHTML = i;
              opCaps.value = i;
              document.getElementById("capNumber").appendChild(opCaps);
            }
          }
        }
      });
    })

    .catch((error) => console.log(error));
});
