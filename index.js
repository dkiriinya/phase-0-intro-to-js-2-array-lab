// Write your solution here
let cats = ['Milo', 'Otis', 'Garfield' ]

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()

}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    let undefined = cats.slice()
    undefined.push(name)
    return undefined
}
function prependCat(name){
    let undefined = cats.slice()
    undefined.unshift(name)
    return undefined
}

function removeLastCat(){
    let undefined = cats.slice()
    undefined.pop()
    return undefined

}
function removeFirstCat(){
    let undefined = cats.slice()
    undefined.shift()
    return undefined
}