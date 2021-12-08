
const categoryRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryRef.length}`);
//=========
categoryRef.forEach(element => {
    const titleRef = element.querySelector('h2');
    const elementsRef = element.querySelectorAll('li');
    console.log(`Category: ${titleRef.textContent}`);
    console.log(`Elements: ${elementsRef.length}`);
})
