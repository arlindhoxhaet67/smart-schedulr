/**
 * Filename: complexCode.js
 * Content: This code demonstrates a sophisticated algorithm to find the longest increasing subsequence in an array of numbers.
 */

function findLongestIncreasingSubsequence(arr) {
  const n = arr.length;
  const dp = new Array(n); // Dynamic programming array to store subsequence lengths
  dp[0] = 1; // Initialize the first subsequence length as 1

  // Calculate the longest increasing subsequence length for each element
  for (let i = 1; i < n; i++) {
    dp[i] = 1; // Initialize each element's subsequence length as 1

    // Iterate through all previous elements to find the longest increasing subsequence
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && dp[i] <= dp[j]) {
        dp[i] = dp[j] + 1; // Update the subsequence length if a longer one is found
      }
    }
  }

  let maxLength = 0;
  let endIndex = 0;

  // Find the maximum subsequence length and its ending index
  for (let i = 0; i < n; i++) {
    if (dp[i] > maxLength) {
      maxLength = dp[i];
      endIndex = i;
    }
  }

  // Reconstruct the subsequence
  const subsequence = [];
  let currLength = maxLength;

  for (let i = endIndex; i >= 0; i--) {
    if (dp[i] === currLength) {
      subsequence.unshift(arr[i]);
      currLength--;
    }
  }

  return subsequence;
}

// Example usage
const array = [3, 10, 2, 1, 20, 30, 50, 25, 15, 40];
const longestIncreasingSubsequence = findLongestIncreasingSubsequence(array);

console.log("Longest Increasing Subsequence: " + longestIncreasingSubsequence.join(", "));
// Output: Longest Increasing Subsequence: 3, 10, 20, 30, 50