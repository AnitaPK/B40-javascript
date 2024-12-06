str1 = 'Hello world';

console.log(str1.length);
console.log('Chart At' + str1.charAt(5) + '$')

str2 = "Wisdom"
str3 = "Sprouts"
// str4 = str2+str3
str4 = str2.concat(' ', str3, ' IT Training Hub')
console.log(str4, str4.length)

console.log(str1.toUpperCase());
console.log(str4.toLowerCase());
// .indexOf(), .lastIndexOf(), .includes(), .startsWith(), .endsWith().

str5 = "Believe in the power"
console.log(str5.indexOf('dreams'));
console.log(str5.lastIndexOf('d'));
console.log(str5.includes('Power'));
console.log(str5.startsWith("Believe"));
console.log(str5.endsWith(' '));

// .slice(), .substring(), .substr()
console.log(str5.slice(0, 7));
console.log(str5.indexOf('p'));
console.log(str5.slice(15, 20));
console.log(str5.slice(-9, -6));
console.log(str5.substr(0, 7))
console.log(str5.substring(0, 7))
str6 = '     anushka   kadu    ';
console.log(str6.length, '%', str6 , '%');
str7 = str6.trimStart()
console.log(str7.length,'%', str7, '%')

str8 = 'abc def abc ghi'
console.log(str8)
str9 = str8.replaceAll('abc', 'xyz')
console.log(str9)
console.log(str8.split(' '))
console.log(str8.split())
console.log(str8.split(''))