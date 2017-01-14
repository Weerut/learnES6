import { log, logTitle } from '../modules/WindowLogger';

export default function () {

    logTitle('Template Literal');

    const csStudents = ['Matt', 'Antonia', 'Geek'];
    const mathsStudents = ['Alex', 'Phillipa'];

    const studentsFromCollege = [...csStudents, ...mathsStudents];
    log(studentsFromCollege);

    const name = 'Aisha';
    const nameToArray = [...name];

    log(nameToArray);

    const addNumbers = function (n1, n2, n3) {
        return n1 + n2 + n3;
    }

    const number = [2, 4, 99];
    const result = addNumbers(...number);
    log(result);

};