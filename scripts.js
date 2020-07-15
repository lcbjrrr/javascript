
a=1
b=2
ss=a+b
console.log(ss)

function soma( a, b){
    s = a+b;
    return s;
}

ss=soma(10,20)
console.log(ss)

function calc(f, a, b){
    return f(a,b)  
}

s = calc(soma,11,22)
console.log(s)
