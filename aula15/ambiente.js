let num = [5, 7, 2, 8, 3]
num[5] = 9
num.push(1)
num.sort()
//[1, 2, 3, 5, 7, 8, 9]

for(let pos = 0 ; pos < num.length ; pos++){
    console.log(`${num[pos]}`)
}