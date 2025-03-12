// +Là 1 từ khóa dùng khai báo biến
// + Dùng để khai báo 1 biến có giá trị không thay đổi

// +Là 1 từ khóa dùng khai báo biến
// const
//  Biến cục bộ

// let
// Chỉ sử dụng được ở trong cùng block 
// Có thể thay đổi giá trị của nó
// Kh cần gán giá trị luôn từ đàu 
// let a;
// 

// var
// Có thể thay đổi giá trị của nó
// Biến global (toàn cục)


function demo() { 
    const a = 2;
    let b = 2;

    return a + b;
}

function demoVar () {
    var a = 2
}


// Không thể thay đổi giá trị
const a = ['red', 'blue', 'yellow'] // mảng(array)

//  Sẽ thay đổi được 1 phần trong giá trị của nó
// a[0] = red
// a[0] = 'hello'
// console.log(a);

const b = {name: "Kiet", age: 19} // object (đối tượng)

// console.log(b.name);

// So sánh
// b.age == 19

console.log(b.age == 19);


// 
