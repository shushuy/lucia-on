import React, { useState } from 'react';
import './CSM.css';
import { Typography } from '@mui/material';

interface QuestionState {
  question1: boolean;
  question2: boolean;
  question3: boolean;
  question4: boolean;
  question5: boolean;
  question6: boolean;
  question7: boolean;
  question8: boolean;
  question9: boolean;
  question10: boolean;
}

const preguntas = {
  "1": "¿Recibió un servicio al cliente satisfactorio?",
  "2": "¿El personal de atención al cliente fue amable y atento?",
  "3": "¿La respuesta a su consulta fue rápida y eficiente?",
  "4": "¿Se sintió valorado como cliente?",
  "5": "¿El proceso de compra fue sencillo y sin problemas?",
  "6": "¿Recibió ayuda o asesoramiento cuando lo necesitaba?",
  "7": "¿El producto o servicio cumplió con sus expectativas?",
  "8": "¿Hubo algún problema que no se resolvió satisfactoriamente?",
  "9": "¿Consideraría volver a utilizar nuestros servicios?",
  "10": "¿Recomendaría nuestros servicios a otras personas?"
}

const CustomerServiceSurvey = () => {
  const [questions, setQuestions] = useState<QuestionState>({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
    question5: false,
    question6: false,
    question7: false,
    question8: false,
    question9: false,
    question10: false,
  });

  const handleChange = (question: keyof QuestionState, value: boolean) => {
    setQuestions({
      ...questions,
      [question]: value,
    });
  };

  const handleSubmit = () => {
    const emailBody = Object.keys(questions)
      .map((question, index) => `Pregunta ${index + 1}: ${preguntas[(index + 1).toString() as keyof typeof preguntas]}: ${questions[question as keyof QuestionState] ? 'Si' : 'No'}`)
      .join('\n');

    const emailSubject = 'Servicio al cliente';

    const emailTo = 'anamunguia033@gmail.com';

    const mailtoLink = `mailto:${emailTo}?subject=${emailSubject}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

return (
    <div className='csm-container'>
      <h1>Customer Service Survey</h1>
      <form>
        {Object.keys(questions).map((question, index) => (
          <div key={question}>
            <Typography variant='subtitle1'>
              {`Pregunta ${index + 1}: ${preguntas[(index + 1).toString() as keyof typeof preguntas]}`}
            </Typography>
            <label>
              Yes
              <input
                type="radio"
                value="yes"
                checked={questions[question as keyof QuestionState]}
                onChange={() => handleChange(question as keyof QuestionState, true)}
              />
            </label>
            <label>
              No
              <input
                type="radio"
                value="no"
                checked={!questions[question as keyof QuestionState]}
                onChange={() => handleChange(question as keyof QuestionState, false)}
              />
            </label>
          </div>
        ))}
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};


export default CustomerServiceSurvey;
