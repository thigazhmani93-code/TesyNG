// Factorial program

function factorial(n: number): number {
    // result variable-ai 1-la initialize panrom
    // Multiplication panna 0 use panna koodadhu; answer 0 aagidum
    let result = 1;

    // i value 1-la start aagum
    // i, n-ai vida chinna illa equal-ah irukkura varaikkum loop run aagum
    // Ovvoru loop mudiyumbodhum i value 1 increase aagum
    for (let i = 1; i <= n; i++) {

        // result-ai current i value-oda multiply panrom
        // result *= i na result = result * i
        result *= i;
    }

    // Final factorial answer-ai return panrom
    return result;
}

// factorial function-ai 5 input-oda call panrom
// console.log() answer-ai display pannum
console.log(factorial(5));

// Output: 120
// Explanation: 1 * 2 * 3 * 4 * 5 = 120