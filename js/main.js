console.log("main ok");

// creo un array di oggetti
const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg",
  },
];

// milestone 1 stampo su console
for (let person in teamMembers) {
  console.table(teamMembers[person]);

  //   per vederli con il console log
  console.log("nome: " + teamMembers[person].name);
  console.log("ruolo: " + teamMembers[person].role);
  console.log("url img: " + teamMembers[person].img);
}
