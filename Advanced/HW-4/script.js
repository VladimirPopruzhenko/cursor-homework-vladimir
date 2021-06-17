const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function boyPlusGirlForArrayStudents(array) {
    if(array != students) return false;
    let newArray = [];
    newArray[0] = [array[0], array[2]];
    newArray[1] = [array[1], array[3]];
    newArray[2] = [array[4], array[5]];
    return newArray;
}
console.log(boyPlusGirlForArrayStudents(students));

function studentsAndThemes(arrayStudents, arrayThemes) {
    if(arrayThemes != themes) return false;
    let newArrayGroup = [];
    for(let j = 0; j < arrayStudents.length; j++) {
        let newArray = [];
        newArray[0] = arrayStudents[j][0] + " и " + arrayStudents[j][1]
        newArray[1] = arrayThemes[j];
        newArrayGroup[j] = newArray;
    }
    return newArrayGroup;
}
console.log(studentsAndThemes(boyPlusGirlForArrayStudents(students), themes))

function marksInitial(arrayStudents, arrayMarks) {
    if(arrayStudents != students) return false;
    if(arrayMarks != marks) return false;
    let newArray = [];
    for(let i = 0; i < arrayStudents.length; i++) {
        newArray[i] = [arrayStudents[i], arrayMarks[i]];
    }
    return newArray;
}
console.log(marksInitial(students, marks));

function MarksProjects(arrayStudents, arrayThemes) {
    if(arrayThemes != themes) return false;
    let newArrayGroup = [];
    for(let j = 0; j < arrayStudents.length; j++) {
        let newArray = [];
        newArray[0] = arrayStudents[j][0] + " и " + arrayStudents[j][1]
        newArray[1] = arrayThemes[j];
        newArray[2] = Number((1 + (Math.random() * (5-1))).toFixed(0));
        newArrayGroup[j] = newArray;
    }
    return newArrayGroup;
}
console.log(MarksProjects(boyPlusGirlForArrayStudents(students), themes));
