// 	1) System must share a list of people that visit the dog park.
//	2) We must share a list of each person's pet. Pet must contain breed, name, and is chipped.
//	3) Admissions: System must store a list of daily admissions. Admission rest is $5.00 per pet. A visitor may on any givin day bring all or one of their dogs
//	4) System must give a weekly report of sales.

const output = document.getElementById("output")


const visitors = {
    name1: "Sean",
    petName: "Joe",

    name: "Cory",
    petName: "Jackson"
}

const registeredPets = {
    petName1: "Joe",
    breed: "Pug",
    isChipped: true,
    ownerName1: visitors.name1,

    petName2: "Jackson",
    breed: "Sherpard",
    isChipped: false,
    ownerName2: visitors.name

}

const dailyAdmissions = 5.00