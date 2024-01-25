


function maxFlowersInBouquet(types, counts) {
    function isOdd(num) {
        return num % 2 !== 0;
    }

    const totalFlowers = counts.reduce((sum,count)=>sum+count,0);

    if (isOdd(totalFlowers)) {
        if (counts.some(isOdd)) {
            return totalFlowers;
        } else {
            const minCount = Math.min(...counts);
            return totalFlowers - minCount + 1;
        }
    } else {
        const minOddCount = Math.min(...counts.filter(isOdd));
        return totalFlowers - minOddCount + 1;
    }
}

// Example usage:
const N = prompt("Enter the types for flowers");
const counts = prompt("Enter the number of floweres ");

const result = maxFlowersInBouquet(N, counts);
console.log("Maximum number of flowers in the bouquet:", result);
