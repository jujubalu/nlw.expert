const perguntas = [
    {
        pergunta: "Qual foi o significado do batismo de Jesus conforme descrito em Mateus 3:16-17?",
        respostas: [
            "Demonstrar sua submissão aos líderes religiosos da época",
            "Mostrar sua devoção ao templo de Jerusalém",
            "Declarar sua identidade como filho de Deus",
        ],
        correto: 2
    },

    {
        pergunta: "Qual dos apóstolos de Jesus foi conhecido por seu zelo e fervor religioso antes de se tornar um seguidor de Cristo?",
        respostas: [
            "João",
            "Paulo",
            "Pedro",
        ],
        correto: 1
    },

    {
        pergunta: "Qual desses personagens bíblicos construiu a arca?",
        respostas: [
            "Noé",
            "Moisés",
            "Abraão",
        ],
        correto: 0
    },

    {
        pergunta: "Qual foi o primeiro milagre de Jesus?",
        respostas: [
            "Curou um leproso",
            "Transformou água em vinho",
            "Ressuscitou pessoas",
        ],
        correto: 1
    },

    {
        pergunta: "Quem foram os primeiros filhos de Eva?",
        respostas: [
            "Jacó e Esaú",
            "Cain e Abel",
            "Pedro e João",
        ],
        correto: 1
    },

    {
        pergunta: "Qual foi o primeiro casal humano que Jeová criou?",
        respostas: [
            "Abraão e Sara",
            "Isaque e Rebeca",
            "Adão e Eva",
        ],
        correto: 2
    },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

const corretas = new Set();
const mostrarTotal = document.querySelector('#acertos span');
let totalDeAcertos = 0;

for (const [index, item] of perguntas.entries()) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector('h3').textContent = item.pergunta;

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        dt.querySelector('input').setAttribute('name', 'pergunta-' + index);
        dt.querySelector('input').value = item.respostas.indexOf(resposta);
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = parseInt(event.target.value) === item.correto;

            if (estaCorreta) {
                corretas.add(item);
                totalDeAcertos++;
            } else {
                corretas.delete(item);
                totalDeAcertos--;
            }
            
            mostrarTotal.textContent = totalDeAcertos + ' de ' + perguntas.length;
        };

        quizItem.querySelector('dl').appendChild(dt);
    }

    quizItem.querySelector('dl dt').remove();
    quiz.appendChild(quizItem);
}