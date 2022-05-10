let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
hxyp
동해물과 백두산이 마르고 닳도록
`;

// console.log(str.match(/./g));
// (155) ['0', '1', '0', '-', '1', '2', '3', '4', '-', '5', '6', '7', '8', 't', 'h', 'e', 's', 'e', 'c', 'o', 'n', '@', 'g', 'm', 'a', 'i', 'l', '.', 'c', 'o', 'm', 'h', 't', 't', 'p', 's', ':', '/', '/', 'w', 'w', 'w', '.', 'o', 'm', 'd', 'b', 'a', 'p', 'i', '.', 'c', 'o', 'm', '/', '?', 'a', 'p', 'i', 'k', 'e', 'y', '=', '7', '0', '3', '5', 'c', '6', '0', 'c', '&', 's', '=', 'f', 'r', 'o', 'z', 'e', 'n', 'T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', …]

// console.log(str.match(/h..p/g));
// (3) ['http', 'http', 'hxyp']

// console.log(str.match(/fox|dog/g));
// (2) ['fox', 'dog']

// console.log(str.match(/fox|dog/));
// ['fox', index: 100, input: '\n010-1234-5678\nthesecon@gmail.com\nhttps://www.omdb…e lazy dog.\nabbcccdddd\nhttp://localhost:1234\nhxyp', groups: undefined]

// console.log(str.match(/https?/g));
// (2) ['https', 'http']

// console.log(str.match(/d/));
// ['d', index: 48, input: '\n010-1234-5678\nthesecon@gmail.com\nhttps://www.omdb…e lazy dog.\nabbcccdddd\nhttp://localhost:1234\nhxyp', groups: undefined]

// console.log(str.match(/d{2}/));
// ['dd', index: 135, input: '\n010-1234-5678\nthesecon@gmail.com\nhttps://www.omdb…e lazy dog.\nabbcccdddd\nhttp://localhost:1234\nhxyp', groups: undefined]

// console.log(str.match(/d{2}/g));
// (2) ['dd', 'dd']

// console.log(str.match(/d{2,}/g));
// ['dddd']

// console.log(str.match(/d{2,3}/g));
// ['ddd']

// console.log(str.match(/\w{2,3}/g));
// (43) ['010', '123', '567', 'the', 'sec', 'on', 'gma', 'il', 'com', 'htt', 'ps', 'www', 'omd', 'bap', 'com', 'api', 'key', '703', '5c6', '0c', 'fro', 'zen', 'The', 'qui', 'ck', 'bro', 'wn', 'fox', 'jum', 'ps', 'ove', 'the', 'laz', 'dog', 'abb', 'ccc', 'ddd', 'htt', 'loc', 'alh', 'ost', '123', 'hxy']

// console.log(str.match(/\b\w{2,3}\b/g));
// (8) ['010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog']

// console.log(str.match(/[0-9]{1,}/g));
// (6) ['010', '1234', '5678', '7035', '60', '1234']

// console.log(str.match(/[가-힣]{1,}/g));
// (4) ['동해물과', '백두산이', '마르고', '닳도록']

console.log(str.match(/\w/g));
console.log(str.match(/\bf\w{1,}\b/g));
//63개의 문자가 아닌 경계에서 시작을 해서
//f라는 알파벳으로 시작해서 63개 문자에 1개 이상 오는 연속일치를 시키고
//63개의 문자가 아닌 경계에서 끝남.
console.log(str.match(/\d{1,}/g));
console.log(str.match(/\s/g));

const h = `  the hello  world   !

`;

console.log(h.match(/\s/g));
console.log(h.replace(/\s/g, ""));

console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));
