document.getElementById('topsisForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const a1 = parseFloat(document.getElementById('a1').value);
    const a2 = parseFloat(document.getElementById('a2').value);
    // Add more values as needed
    const result = calculateTOPSIS([a1, a2]);
    document.getElementById('result').innerText = `Hasil: ${result}`;
});

function calculateTOPSIS(values) {
    // Implementasi metode TOPSIS di sini
    // Placeholder return value
    return values.reduce((a, b) => a + b, 0);
}

// Define the decision matrix
const decisionMatrix = [
    [91, 82, 93, 70, 94],
    [86, 84, 90, 85, 96],
    [72, 78, 88, 53, 84],
    [68, 73, 85, 67, 72],
    [74, 85, 81, 95, 78],
    [59, 92, 79, 51, 80]
  ];
  
  // Define the weight vector
  const weights = [5, 4, 3, 2, 5];
  
  // Define the impact vector
  const impacts = [1, 1, 1, -1, 1];
  
  // Calculate the normalized decision matrix
  const normalizedMatrix = decisionMatrix.map(row => {
    const rowSum = row.reduce((sum, value) => sum + value, 0);
    return row.map(value => value / rowSum);
  });
  
  // Calculate the weighted normalized decision matrix
  const weightedMatrix = normalizedMatrix.map((row, rowIndex) => {
    return row.map((value, columnIndex) => value * weights[columnIndex]);
  });
  
  // Calculate the ideal positive and negative solutions
  const idealPositive = weights.map((weight, columnIndex) => {
    const columnValues = weightedMatrix.map(row => row[columnIndex]);
    return impacts[columnIndex] === 1 ? Math.max(...columnValues) : Math.min(...columnValues);
  });
  
  const idealNegative = weights.map((weight, columnIndex) => {
    const columnValues = weightedMatrix.map(row => row[columnIndex]);
    return impacts[columnIndex] === 1 ? Math.min(...columnValues) : Math.max(...columnValues);
  });
  
  // Calculate the separation measures
  const positiveDistances = weightedMatrix.map(row => {
    return Math.sqrt(row.reduce((sum, value, columnIndex) => sum + Math.pow(value - idealPositive[columnIndex], 2), 0));
  });
  
  const negativeDistances = weightedMatrix.map(row => {
    return Math.sqrt(row.reduce((sum, value, columnIndex) => sum + Math.pow(value - idealNegative[columnIndex], 2), 0));
  });
  
  // Calculate the relative closeness
  const relativeCloseness = positiveDistances.map((positiveDistance, index) => {
    return negativeDistances[index] / (positiveDistance + negativeDistances[index]);
  });
  
  // Find the best alternative
  const maxCloseness = Math.max(...relativeCloseness);
  const bestAlternativeIndex = relativeCloseness.findIndex(closeness => closeness === maxCloseness);
  
  console.log("Best Alternative:", bestAlternativeIndex + 1);
  