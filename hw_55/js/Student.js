'use strict';
(function () {
    const Student = function (firstName, lastName, birthDate, lessonsCount = 25) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.lessonsCount = lessonsCount - 1;
        this.attendance = new Array(this.lessonsCount);
        this.grades = new Array(this.lessonsCount);

        let lessonIndex = 0;

        Student.prototype.gradesConfig = {
            minGrade: 0,
            maxGrade: 100,
        }

        Student.prototype.setAttendance = function (isPresent = true) {
            if(lessonIndex > this.lessonsCount) return;

            if(typeof isPresent !== 'boolean') throw new Error('Student.setAttendance isPresent should be in boolean type')
            this.attendance[lessonIndex] = isPresent;
            lessonIndex += 1
        }

        Student.prototype.present = function () {
            this.setAttendance(true)
        }

        Student.prototype.absent = function () {
            this.setAttendance(false)
        }

        Student.prototype.setGrade = function (grade) {
            const currentLessonIndex = lessonIndex - 1
            if(currentLessonIndex > this.lessonsCount) return;


            if(!this.attendance[currentLessonIndex]) {
                throw new Error('You cannot set grade for this lesson! Lesson index ' + currentLessonIndex)
            }


            if(grade >= this.gradesConfig.minGrade && grade <= this.gradesConfig.maxGrade) {
                this.grades[currentLessonIndex] = grade;
            } else {
                throw new Error('Grade is wrong. Grade: ' + grade )
            }

        }

        Student.prototype.calcAvgGrade = function () {
            const gradeStatistic = this.grades.reduce((acc, item) => {
                    acc.lessonsCountWithGrade += 1;
                    acc.gradeSummary += item
                    return acc;
                }, {
                    lessonsCountWithGrade: 0,
                    gradeSummary: 0
                }
            )

            return Math.floor(gradeStatistic.gradeSummary / gradeStatistic.lessonsCountWithGrade);
        }

        Student.prototype.calcAvgAttendance = function () {
            let lessonsCount = 0;
            let visitedLessons = 0;
            for(let i = 0; i < this.attendance.length; i++) {
                if(typeof this.attendance[i] !== 'boolean') break;
                this.attendance[i] && (visitedLessons += 1);
                lessonsCount += 1
            }

            return Number((visitedLessons / lessonsCount).toFixed(1));
        }

        Student.prototype.summary = function () {
            const avgGrade = this.calcAvgGrade();
            const avgAttendance = this.calcAvgAttendance();

            if (avgGrade > 90 && avgAttendance > 0.9) {
                return "Молодець!";
            } else if (avgGrade <= 90 && avgAttendance <= 0.9) {
                return "Редиска!";
            } else {
                return "Добре, але можна краще";
            }
        }
    }


    const student1 = new Student('Alice', 'Doe', 1989)

    student1.present()
    student1.setGrade(100)

    student1.absent()
    student1.absent()

    student1.present()
    student1.setGrade(100)

    student1.present()
    student1.present()
    student1.present()

    student1.setGrade(80)

    console.log(student1.summary());


    console.log(student1)

    const student2 = new Student('Oleg', 'Doe', 1991);

    student2.present()
    student2.setGrade(100)

    student2.absent()
    student2.absent()

    student2.present()
    student2.setGrade(70)

    student2.present()
    student2.setGrade(30)

    console.log(student2.summary());


    console.log(student2)

    const student3 = new Student('Nastya', 'Doe', 1987);

    student3.present()
    student3.setGrade(50)

    student3.absent()
    student3.absent()

    student3.present()
    student3.setGrade(70)

    student3.present()
    student3.setGrade(30)

    console.log(student3.summary());


    console.log(student3)

}());