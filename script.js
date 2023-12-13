// Šablonas fetch
// fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(e => console.log(e.message))
  // 1. Jums paskambino pažinčių portalas – jiems reikia staigiai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų panašioje kortelėje kaip čia (dizainas neturi atitikti, bet padarykit tvarkingai - jį galite pilnai su HTML pasirašyti, bet norintiems sudėtingiau - pabandykite su JS sukurti html elementus).*/

fetch(`https://randomuser.me/api/`)
.then(res => res.json())
.then(data => {

    const user = data.results[0]

    const userContainer = document.getElementById("user-container")

    const img = document.createElement("img")
    img.src = data.results[0].picture.large
    userContainer.appendChild(img)

    const vardas = document.createElement("h1");
     vardas.innerText = `${user.name.first} ${user.name.last}`
     userContainer.appendChild(vardas)
     console.log(vardas);

     const amzius = document.createElement("h1");
     amzius.innerText = `${user.dob.age} Years old`
     userContainer.appendChild(amzius)
     amzius.style.color = "lightcoral";
     console.log(amzius);
   
     const email = document.createElement("h4");
     email.innerText = `${user.email}`
     userContainer.appendChild(email)
     console.log(email);
    
})
.catch(e => console.log(e.message))


// 2. Naudojant "https://party-wedding.glitch.me/v1/party" - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne?
fetch(`https://party-wedding.glitch.me/v1/party`)
  .then(res => res.json())
  .then( data => {
    
    const name = data.name;
    const vip = document.getElementById("vip")
    const arKristupas= name ==="Kristupas Lapeika"

    const resultElement = document.createElement("h1");
    resultElement.innerText = arKristupas ? "Kristupas Lapeika yra VIP!" : "Kristupas Lapeika nėra VIP.";
    vip.appendChild(resultElement);
  })
//   .catch(error => console.error(error));
// 3. Organizuojate vestuves - pasiimkite informaciją iš "https://party-wedding.glitch.me/v1/wedding" ir atvaizduokite lentelėje: vardą, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".
fetch("https://party-wedding.glitch.me/v1/wedding")
  .then(res => res.json())
  .then(data => {
    const weddingTable = document.getElementById("weddingTable");

    if (data && data.length > 0) {
      // Sukurkite lentelės antraštę (thead)
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");

      const nameHeader = document.createElement("th");
      nameHeader.innerText = "Vardas";
      headerRow.appendChild(nameHeader);

      const plusOneHeader = document.createElement("th");
      plusOneHeader.innerText = "Plus One";
      headerRow.appendChild(plusOneHeader);

      const attendingHeader = document.createElement("th");
      attendingHeader.innerText = "Attending";
      headerRow.appendChild(attendingHeader);

      thead.appendChild(headerRow);

      // Sukurkite lentelės turinį (tbody)
      const tbody = document.createElement("tbody");

      data.forEach(person => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.innerText = person.name;
        row.appendChild(nameCell);

        const plusOneCell = document.createElement("td");
        plusOneCell.innerText = person.plusOne ? "+" : "-";
        row.appendChild(plusOneCell);

        const attendingCell = document.createElement("td");
        attendingCell.innerText = person.attending ? "+" : "-";
        row.appendChild(attendingCell);

        tbody.appendChild(row);
      });

      weddingTable.appendChild(thead);
      weddingTable.appendChild(tbody);
      console.log(weddingTable);
    } else {
      console.error("Duomenų nepavyko gauti arba jie neturi vardų sąrašo.");
    }
  })
  .catch(error => console.error(error));






