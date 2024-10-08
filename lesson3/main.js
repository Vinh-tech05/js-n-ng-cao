// Các phương thức làm việc với mảng

/**
 * forEach
 * find
 * some
 * every
 * map
 * filter
 * reduce
 */

const list = [
{
    name:"vinh",
    age:19,
    gender:true,
    mark:10
},
{
    name:"vinh1",
    age:12,
    gender:false,
    mark:6
},
{
    name:"vinh2",
    age:23,
    gender:true,
    mark:7
},
{
    name:"vinh3",
    age:21,
    gender:true,
    mark:8
}
]
//foreach: duyệt qua toàn bộ phần tử trong mảng

let trElements ='';
list.forEach((item,index)=>{
    // console.log(item);// giá trị của các phần tử trong mảng
    // console.log(index); // vị trí của các phần tử trong mảng
    trElements +=`
    <tr>
    <th scope="row">${index+1}</th>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.gender ? "Nam":"Nữ"}</td>
    <td>${item.mark}</td> 
    </tr>
    `
})
console.log(trElements);
const tbodyElement = document.querySelector('tbody');
tbodyElement.innerHTML = trElements;



// find: duyệt mảng, tìm kiếm 1 phần tử gần nhất thỏa mãn ĐK (return)
// nếu có ít nhất 1 phần tử thỏa mãn ĐK -> kết thúc vòng lặp
// nếu KHÔNg có phần tử nào thỏa mãn ĐK -> undefined
const findItem = list.find((item,index)=>{
    // console.log(index);

    return item.mark == 7;
})
// console.log(findItem);


//every: duyệt qua mảng, trả về giá trị boolean (true | false)
// Kiểm tra xem toàn bộ các phần tử trong mảng có thỏa mãn Đk(return) ->true
//Nếu có ít nhất 1 phần tử KHÔNG thỏa mãn ĐK -> false ->Kết thúc vòng lặp
const checkEvery =list.every((item,index)=>{
    // console.log(index);
    return item.mark > 5;
})
// console.log(checkEvery);



// some: duyệt qua mảng, trả về giá trị boolean (true | false)
// Kiểm tra xem trong mảng có ít nhất 1 phần thỏa mãn ĐK (return) -> true -> kết thúc vòng lặp
// Nếu tất cả các phần tử Không thỏa mãn ĐK (return) -> false

const checkSome = list.some((item,index)=>{
    // console.log(index);
    return !item.gender; //item.gender == false
})

// console.log(checkSome);



//map: duyệt qua toàn bộ phần tử trong mảng 
//trả về 1 mảng mới nếu có return

const newList =list.map((item,index)=>{
    return `
    <tr>
    <th scope="row">${index+1}</th>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.gender ? "Nam":"Nữ"}</td>
    <td>${item.mark}</td> 
    </tr>
    `
}).join('');//join chuyển 1 mảng về chuỗi
// console.log(newList);
// tbodyElement.innerHTML = newList;


//filter: duyệt qua  toàn bộ phần tử trong mảng
//trả về 1 mảng mới có các phần tử thỏa mãn ĐK (return)

const filterList = list.filter((item,index)=>{
    return item.mark > 8 ; //item.gender == true
})

// console.log(filterList);

// reduce: duyệt qua toàn bộ phần tử trong mảng và tính toán
// preValue: giá trị lưu trữ qua các lần lặp
// item: giá trị của các phần tử
// index: vị trí
const total = list.reduce((preValue,item,index)=>{
    return preValue += item.mark;
},0)

// console.log(total);
