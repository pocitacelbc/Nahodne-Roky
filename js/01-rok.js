//Vytvořte program, který vygeneruje a vypíše do konzole náhodný letopočet mezi 1992 až 2050. Promptem nechte uživatele zvolit, kolik náhodných letopočtů se má vypsat do konzole.
//Například: Uživatel zadá do promptu číslo 6. V konzoli najdeme například tato čísla: 2033, 1999, 1992, 2050, 2008, 2041

let roky = + (prompt("Kolik roku se má vyspat?"));

let counter = 0;
while (counter < roky) {
   // console.log(counter);
    console.log(Math.ceil(Math.random() * 58) + 1992)
    counter++;
}

