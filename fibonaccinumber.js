//Objective is to find the Nth fibonacci number

let N = 5


//O(n) solution that uses a bottom-up dp approach to find the number

let dp = [0, 1]
    
for (let i = 2; i < N + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
}

return dp[N]