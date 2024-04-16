'use strict';
(function () {
    class Student {
        constructor(firstName, lastName, birthDate, lessonsCount = 25) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.birthDate = birthDate;
            this._lessonsCount = lessonsCount - 1;
            this._attendance = new Array(this._lessonsCount);
            this._grades = new Array(this._lessonsCount);
            this._lessonIndex = 0;
        }

        get lessonsCount() {
            return this._lessonsCount;
        }

        get attendance() {
            return this._attendance;
        }

        get grades() {
            return this._grades;
        }

        set attendance(value) {
            this._attendance = value;
        }

        set grades(value) {
            this._grades = value;
        }

        present() {
            this.setAttendance(true);
        }

        absent() {
            this.setAttendance(false);
        }

        setAttendance(isPresent = true) {
            if (this._lessonIndex > this._lessonsCount) return;

            if (typeof isPresent !== 'boolean') {
                throw new Error('Student.setAttendance isPresent should be in boolean type');
            }

            this._attendance[this._lessonIndex] = isPresent;
            this._lessonIndex += 1;
        }

        setGrade(grade) {
            const currentLessonIndex = this._lessonIndex - 1;
            if (currentLessonIndex > this._lessonsCount) return;

            if (!this._attendance[currentLessonIndex]) {
                throw new Error(`You cannot set grade for this lesson! Lesson index ${currentLessonIndex}`);
            }

            if (grade >= Student.gradesConfig.minGrade && grade <= Student.gradesConfig.maxGrade) {
                this._grades[currentLessonIndex] = grade;
            } else {
                throw new Error(`Grade is wrong. Grade: ${grade}`);
            }
        }

        calcAvgGrade() {
            const gradeStatistic = this._grades.reduce((acc, item) => {
                acc.lessonsCountWithGrade += 1;
                acc.gradeSummary += item;
                return acc;
            }, { lessonsCountWithGrade: 0, gradeSummary: 0 });

            return Math.floor(gradeStatistic.gradeSummary / gradeStatistic.lessonsCountWithGrade);
        }

        calcAvgAttendance() {
            let lessonsCount = 0;
            let visitedLessons = 0;
            for (let i = 0; i < this._attendance.length; i++) {
                if (typeof this._attendance[i] !== 'boolean') break;
                this._attendance[i] && (visitedLessons += 1);
                lessonsCount += 1;
            }

            return Number((visitedLessons / lessonsCount).toFixed(1));
        }

        summary() {
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

        static gradesConfig = {
            minGrade: 0,
            maxGrade: 100,
        };
    }

    const student1 = new Student('Alice', 'Doe', 1989);

    student1.present();
    student1.setGrade(100);

    student1.absent();
    student1.absent();

    student1.present();
    student1.setGrade(100);

    student1.present();
    student1.present();
    student1.present();

    student1.setGrade(80);

    console.log(student1.summary());
    console.log(student1);

    const student2 = new Student('Oleg', 'Doe', 1991);

    student2.present();
    student2.setGrade(100);

    student2.absent();
    student2.absent();

    student2.present();
    student2.setGrade(70);

    student2.present();
    student2.setGrade(30);

    console.log(student2.summary());
    console.log(student2);

    const student3 = new Student('Nastya', 'Doe', 1987);

    student3.present();
    student3.setGrade(50);

    student3.absent();
    student3.absent();

    student3.present();
    student3.setGrade(70);

    student3.present();
    student3.setGrade(30);

    console.log(student3.summary());
    console.log(student3);
}());