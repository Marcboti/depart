const nom = 'Awa'; // Type : string
const budget = 50000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

//TODO : convertissez les trois dépenses en nombres
const transport = Number(transportTexte); // Type : number ; unité : FCFA
const alimentation = Number(alimentationTexte); // Type : number ; unité : FCFA
const loisirs = Number(loisirsTexte); // Type : number ; unité : FCFA

//TODO : calculer le total des dépenses, le budget restant et si le budget est respecté
const totalDepenses = transport + alimentation + loisirs; // Type : number ; unité : FCFA
const budgetRestant = budget - totalDepenses; // Type : number ; unité : FCFA
const budgetRespected = budgetRestant >= 0; // Type : boolean

//TODO : affichez uniquement avec les litérales de gabarits
console.log(`Nom : ${nom}`);
console.log(`Budget initial : ${budget} FCFA`);
console.log(`Dépenses de transport : ${transport} FCFA`);
console.log(`Dépenses d'alimentation : ${alimentation} FCFA`);
console.log(`Dépenses de loisirs : ${loisirs} FCFA`);

console.log(`Total des dépenses : ${totalDepenses} FCFA`);
console.log(`Budget restant : ${budgetRestant} FCFA`);
console.log(`Budget respecté : ${budgetRespected ? 'Oui' : 'Non'}`);

