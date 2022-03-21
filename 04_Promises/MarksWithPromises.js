// var fs = require('fs');

// function readFile(fileName) {
//     return new Promise(function (resolve, reject) {
//       fs.readFile(fileName, { encoding: 'utf-8' }, function (err, content) {
//         if (err) { return void reject(err); }
//         resolve(content);
//       });
//     });
//   }
  
//   function writeFile(fileName, content) {
//     return new Promise(function (resolve, reject) {
//       fs.writeFile(fileName, content, function (err) {
//         if (err) { return void reject(err); }
//         resolve(content);
//       });
//     });
//   }

  
// function parseMarks(students, marksData){
//     marksData.map(function (data){
//         var line = data.split(' ');
//         var fn = line[0];
//         students[fn].mark = line.splice(1);
//     })
//     return students;
// }
// function calculate(students, courses, credits){
//     var results = [];
//    for(var student of Object.values(students)){
//        var curStudent = {name: student.name}
//        student.mark.forEach(function(value, index){
//            if(value !== 'xxx'){
//             var score = ((value / 6) * credits[index]).toFixed(2);
//            }else{
//                score = 0;
//            }
//         curStudent[courses[index]] = score;
//        })
//        results.push(curStudent)
//    }
//    return results;
// }
// var regexStudents = /^[a-zA-Z]+( +[a-zA-Z]+)*\s\d{3}/gm
// var regexMarks = /^(\d{3})\s([\d.x \t]+)/gm
//  var students = content.match(regexStudents);


// function parseStudents(studentsData){
//     var students = [];
//     studentsData.map(function(data){
//         var line = data.split(' ');
//         var student = {name: line.splice(0, line.length - 1).join(' ')}
//         students[line[line.length - 1]]= student;
//     })
//     return students;
// }
//   readFile("student.txt")
//     .then(function(content){
//         var students = content.match(regexStudents);
//         var resStudents = parseStudents(students);
//         return readFile('mark.txt').then(function (marks) {
//             return { marks, resStudents };
//         });
//     })
//     .then(function(data){
//         var resMarks = parseMarks(data.resStudents, data.marks);
//         return readFile('credits.txt').then(function (content) {
//             return { content, resMarks };
//         });
//     })
    
 


    
 
    
//     fs.readFile("credits.txt", {encoding: 'utf8'}, function(err, content){
//         if(err){console.log(err)}
//             var lines = content.split('\n');
//             var coursesRegex = /^(\w*\s)*/g;
//             var creditsRegex = /^([\d. ]*)/gm;

//             var courses = lines[0].match(coursesRegex) + '';
//             courses = courses.split(' ');
//            var credits = lines[1].match(creditsRegex) + '';
//            credits = credits.split(' ');
        
//             var result = calculate(resStudents, courses, credits);
//             console.log(result);
//         fs.writeFile("result.json", JSON.stringify(result), function(err){
//             if(err){console.log(err)}
//         })
//     })
// })
// })
