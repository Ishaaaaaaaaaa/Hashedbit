import React, { useState, useEffect } from 'react';
import Survey from 'survey-react';
import 'survey-react/survey.css'; 


function SurveyForm() {
  const [surveyJson, setSurveyJson] = useState(null);

  
  useEffect(() => {
    fetch('survey.json') 
      .then(response => response.json())
      .then(data => setSurveyJson(data))
      .catch(error => console.error('Error loading survey:', error));
  }, []);

  const handleSurveyCompleted = (survey) => {
    const results = survey.data;
    console.log('Survey results:', results);
   
  };

  return (
    <div>
      <h1>Survey</h1>
      {surveyJson && (
        <Survey
          json={surveyJson}
          onComplete={handleSurveyCompleted}
        />
      )}
    </div>
  );
}

export default SurveyForm;
