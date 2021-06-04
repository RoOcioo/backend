use students


db.createCollection("students")

show collections

db.students.insertMany([
  {name: 'Véronique', city: 'Paris'},
  {name: 'Steeven', city: 'Lyon'},
  {name: 'Marc', city:'Marseille'},
  {name: 'Nour', city: 'Lyon'},
  {name: 'Romain', city: 'Paris'},
  {name: 'Sophie', city: 'Paris'}
])

db.students.find()
  
db.createCollection("languages")

show collections

db.languages.insertMany([
  {name: 'French'},
  {name: 'English'},
  {name: 'German'},
  {name: 'Spanish'},
  {name: 'Mandarin'}
])

db.languages.find()

db.createCollection("favorites")

show collections

db.favorites.insertMany([
  {class: 'Maths', sport: 'Cricket', student_id: 2 },
  {class: 'Music', sport: 'Hip-hop', student_id: 6 },
  {class: 'Arts', sport: 'Boxing', student_id: 1 },
  {class: 'Littérature', sport: 'Tennis', student_id: 3 },
  {class: 'Computer Science', sport: 'Tennis', student_id: 5 },
  {class: 'Arts', sport: 'Baseball', student_id: 4 }
])
  
db.favorites.find()

db.createCollection("students_languages")

show collections

db.students_languages.insertMany([
  { student_id: 1, language_id: 1},
  { student_id: 1, language_id: 2},
  { student_id: 2, language_id: 1},
  { student_id: 2, language_id: 3},
  { student_id: 3, language_id: 1},
  { student_id: 4, language_id: 1},
  { student_id: 4, language_id: 2},
  { student_id: 4, language_id: 4},
  { student_id: 4, language_id: 5},
  { student_id: 5, language_id: 1},
  { student_id: 5, language_id: 5},
  { student_id: 6, language_id: 1},
  { student_id: 6, language_id: 2},
  { student_id: 6, language_id: 3}
])

//  lvl1
db.students.find({ id: 3 })

db.students.find({ id: 6 })

db.students.find({ id: 1 })

db.students.find({ id: 2 },{ name:"Véronique", id:0 }) 

db.students.find({ city: 'Paris' })

db.students.find({ city: 'Lyon' })

