const students = {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37,
    },
  };
  
  const studentsWithAverages = Object.entries(students).map(([studentName, subjects]) => {
    const totalScore = Object.values(subjects).reduce((acc, score) => acc + score, 0);
    const average = totalScore / Object.keys(subjects).length;
    return { [studentName]: { average } };
  });
  
  console.log(studentsWithAverages);
  