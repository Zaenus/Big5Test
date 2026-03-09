let name, age, sex;

let currentLang = 'en';

const translations = {
    en: {
        title: 'Big Five Personality Test',
        phrase: 'Please provide some basic information to start the test.',
        nameLabel: 'Name:',
        ageLabel: 'Age:',
        sexLabel: 'Sex:',
        selectOption: 'Select',
        male: 'Male',
        female: 'Female',
        other: 'Other',
        preferNot: 'Prefer not to say',
        startButton: 'Start Test',
        quizInstr: 'Answer honestly on a scale of 1 (Very Inaccurate) to 5 (Very Accurate).',
        submitButton: 'Submit',
        resultsH2: 'Your Results',
        traitLabels: ['Extraversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism', 'Openness'],
        chartLabel: 'Personality Traits (%)',
        getExtDesc: (percent) => `Extraversion: ${percent}% (High: Outgoing and energetic; Low: Reserved and solitary)`,
        getAgrDesc: (percent) => `Agreeableness: ${percent}% (High: Compassionate and cooperative; Low: Competitive and detached)`,
        getConDesc: (percent) => `Conscientiousness: ${percent}% (High: Organized and dependable; Low: Easy-going and careless)`,
        getNeuDesc: (percent) => `Neuroticism: ${percent}% (High: Sensitive and nervous; Low: Secure and confident)`,
        getOpeDesc: (percent) => `Openness: ${percent}% (High: Creative and curious; Low: Conventional and practical)`,
        questions: [
            'Am the life of the party.',
            'Feel little concern for others.',
            'Am always prepared.',
            'Get stressed out easily.',
            'Have a rich vocabulary.',
            'Don\'t talk a lot.',
            'Am interested in people.',
            'Leave my belongings around.',
            'Am relaxed most of the time.',
            'Have difficulty understanding abstract ideas.',
            'Feel comfortable around people.',
            'Insult people.',
            'Pay attention to details.',
            'Worry about things.',
            'Have a vivid imagination.',
            'Keep in the background.',
            'Sympathize with others\' feelings.',
            'Make a mess of things.',
            'Seldom feel blue.',
            'Am not interested in abstract ideas.',
            'Start conversations.',
            'Am not interested in other people\'s problems.',
            'Get chores done right away.',
            'Am easily disturbed.',
            'Have excellent ideas.',
            'Have little to say.',
            'Have a soft heart.',
            'Often forget to put things back in their proper place.',
            'Get upset easily.',
            'Do not have a good imagination.',
            'Talk to a lot of different people at parties.',
            'Am not really interested in others.',
            'Like order.',
            'Change my mood a lot.',
            'Am quick to understand things.',
            'Don\'t like to draw attention to myself.',
            'Take time out for others.',
            'Shirk my duties.',
            'Have frequent mood swings.',
            'Use difficult words.',
            'Don\'t mind being the center of attention.',
            'Feel others\' emotions.',
            'Follow a schedule.',
            'Get irritated easily.',
            'Spend time reflecting on things.',
            'Am quiet around strangers.',
            'Make people feel at ease.',
            'Am exacting in my work.',
            'Often feel blue.',
            'Am full of ideas.',
            'Make friends easily.',
            'Take charge.',
            'Know how to captivate people.',
            'Feel at ease with people.',
            'Am skilled in handling social situations.',
            'Find it difficult to approach others.',
            'Often feel uncomfortable around others.',
            'Bottle up my feelings.',
            'Am a very private person.',
            'Wait for others to lead the way.',
            'Inquire about others\' well-being.',
            'Know how to comfort others.',
            'Love children.',
            'Am on good terms with nearly everyone.',
            'Have a good word for everyone.',
            'Show my gratitude.',
            'Think of others first.',
            'Love to help others.',
            'Am hard to get to know.',
            'Am indifferent to the feelings of others.',
            'Do things according to a plan.',
            'Continue until everything is perfect.',
            'Make plans and stick to them.',
            'Love order and regularity.',
            'Like to tidy up.',
            'Neglect my duties.',
            'Waste my time.',
            'Do things in a half-way manner.',
            'Find it difficult to get down to work.',
            'Leave a mess in my room.',
            'Get angry easily.',
            'Panic easily.',
            'Feel threatened easily.',
            'Get overwhelmed by emotions.',
            'Take offense easily.',
            'Get caught up in my problems.',
            'Grumble about things.',
            'Am not easily bothered by things.',
            'Rarely get irritated.',
            'Seldom get mad.',
            'Carry the conversation to a higher level.',
            'Catch on to things quickly.',
            'Can handle a lot of information.',
            'Love to think up new ways of doing things.',
            'Love to read challenging material.',
            'Am good at many things.',
            'Try to avoid complex people.',
            'Have difficulty imagining things.',
            'Avoid difficult reading material.',
            'Will not probe deeply into a subject.'
        ]
    },
    pt: {
        title: 'Teste de Personalidade Big Five',
        phrase: 'Forneça algumas informações básicas para iniciar o teste.',
        nameLabel: 'Nome:',
        ageLabel: 'Idade:',
        sexLabel: 'Sexo:',
        selectOption: 'Selecionar',
        male: 'Masculino',
        female: 'Feminino',
        other: 'Outro',
        preferNot: 'Prefiro não dizer',
        startButton: 'Iniciar Teste',
        quizInstr: 'Responda honestamente em uma escala de 1 (Muito Impreciso) a 5 (Muito Preciso).',
        submitButton: 'Enviar',
        resultsH2: 'Seus Resultados',
        traitLabels: ['Extroversão', 'Amabilidade', 'Consciosidade', 'Neuroticismo', 'Abertura'],
        chartLabel: 'Traços de Personalidade (%)',
        getExtDesc: (percent) => `Extroversão: ${percent}% (Alto: Extrovertido e enérgico; Baixo: Reservado e solitário)`,
        getAgrDesc: (percent) => `Amabilidade: ${percent}% (Alto: Compassivo e cooperativo; Baixo: Competitivo e distante)`,
        getConDesc: (percent) => `Consciosidade: ${percent}% (Alto: Organizado e confiável; Baixo: Despreocupado e descuidado)`,
        getNeuDesc: (percent) => `Neuroticismo: ${percent}% (Alto: Sensível e nervoso; Baixo: Seguro e confiante)`,
        getOpeDesc: (percent) => `Abertura: ${percent}% (Alto: Criativo e curioso; Baixo: Convencional e prático)`,
        questions: [
            'Eu sou a alma da festa.',
            'Eu sinto pouca preocupação pelos outros.',
            'Eu estou sempre pronto(a).',
            'Eu me estresso facilmente.',
            'Eu tenho um vocabulário rico.',
            'Eu não falo muito.',
            'Eu desejo saber mais sobre as pessoas.',
            'Eu largo minhas coisas em qualquer lugar.',
            'Eu me sinto descontraído(a), leve, solto(a) a maior parte do tempo.',
            'Eu tenho dificuldade para entender idéias abstratas.',
            'Eu me sinto confortável quando junto das pessoas.',
            'Eu sou grosseiro(a) com as pessoas.',
            'Eu presto atenção aos detalhes.',
            'Eu me preocupo com as coisas.',
            'Eu tenho uma imaginação viva.',
            'Eu não costumo me expor muito.',
            'Eu sou solidário(a) aos sentimentos dos outros.',
            'Eu faço uma bagunça com as minhas coisas.',
            'Raramente eu me sinto triste.',
            'Eu não me interesso por idéias abstratas.',
            'Eu inicio conversas.',
            'Eu nao tenho interesse pelo problemas dos outros.',
            'Eu cumpro minhas tarefas imediatamente.',
            'Eu me sinto facilmente incomodado(a).',
            'Eu tenho idéias excelentes.',
            'Eu tenho pouco a dizer.',
            'Eu tenho um coração mole.',
            'Frequentemente eu me esqueço de devolver as coisas aos seus devidos lugares.',
            'Eu me aborreço facilmente.',
            'Eu não tenho uma boa imaginação.',
            'Eu converso com várias pessoas em festas ou outras reuniões sociais.',
            'Eu não estou realmente interessado(a) nos outros.',
            'Eu gosto de ordem, de organização.',
            'Meu humor muda frequentemente.',
            'Eu entendo as coisas rapidamente.',
            'Eu não gosto de chamar atenção para mim mesmo.',
            'Eu dedico tempo aos outros.',
            'Eu não cumpro com minhas obrigações.',
            'Eu tenho mudanças frequentes de humor.',
            'Eu faço uso de palavras difíceis ou incomuns.',
            'Eu não me importo de ser o centro das atenções.',
            'Eu sou sensível as emoções das outras pessoas.',
            'Eu sigo uma agenda, uma rotina de tarefas.',
            'Eu me irrito facilmente.',
            'Eu passo meu tempo refletindo sobre as coisas.',
            'Eu fico quieto(a) quando perto de estranhos.',
            'Eu faço as outras pessoas se sentirem à vontade.',
            'Eu sou preciso no meu trabalho.',
            'Frequentemente eu me sinto triste.',
            'Eu sou cheio(a) de idéias.',
            'Eu faço amigos facilmente.',
            'Eu tomo a liderança.',
            'Eu sei como cativar as pessoas.',
            'Eu me sinto bem com as pessoas.',
            'Eu tenho habilidade para lidar com situações sociais.',
            'Eu acho difícil abordar (falar com) as pessoas.',
            'Eu frequentemente me sinto desconfortável perto de outras pessoas.',
            'Eu guardo minhas emoções para mim.',
            'Eu sou uma pessoa muito reservada.',
            'Eu espero para que outras pessoas liderem.',
            'Eu pergunto sobre o bem-estar dos outros.',
            'Eu sei como confortar as pessoas.',
            'Eu adoro crianças.',
            'Eu estou de bem com a maioria das pessoas.',
            'Eu tenho boas palavras para todo mundo.',
            'Eu demonstro minha gratidão.',
            'Eu coloco os outros em primeiro lugar.',
            'Eu adoro ajudar aos outros.',
            'Eu dificilmente me abro com as pessoas.',
            'Eu sou indiferente quanto ao sentimento dos outros.',
            'Eu faço as coisas de acordo com o planejado.',
            'Eu vou até o final, até que as coisas estarem perfeitas.',
            'Eu faço plano e os sigo.',
            'Eu gosto de ordem e rotinas.',
            'Eu gosto de limpeza e ordem.',
            'Eu nao cumpro com minhas obrigações.',
            'Eu perco meu tempo.',
            'Eu faço as coisas pela metade.',
            'Eu acho difícil me concentrar no trabalho.',
            'Eu faço uma bagunça no meu quarto.',
            'Eu fico bravo(a) facilmente.',
            'Eu entro em pânico facilmente.',
            'Eu me sinto ameaçado(a) facilmente.',
            'Eu fico sufocado pelas emoções.',
            'Eu me ofendo facilmente.',
            'Eu me prendo aos meus problemas.',
            'Eu reclamo das coisas.',
            'Eu nao me aborreço facilmente.',
            'Eu raramente me irrito.',
            'Eu raramente fico bravo(a).',
            'Eu levo a conversa para um alto-nível.',
            'Eu entendo as coisas facilmente.',
            'Eu consigo lidar com muitas informações.',
            'Eu adoro pensar em novas formas de fazer as coisas.',
            'Eu adoro ler materiais desafiadores, difíceis.',
            'Eu sou bom(boa) em muitas coisas.',
            'Eu tento evitar pessoas complicadas.',
            'Eu tenho dificuldade em imaginar as coisas.',
            'Eu evito ler material de difícil leitura.',
            'Eu não me aprofundo em nenhum assunto.'
        ]
    }
};

function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('phrase').innerText = translations[lang].phrase;
    document.getElementById('name-label').innerText = translations[lang].nameLabel;
    document.getElementById('age-label').innerText = translations[lang].ageLabel;
    document.getElementById('sex-label').innerText = translations[lang].sexLabel;
    document.getElementById('select-option').innerText = translations[lang].selectOption;
    document.getElementById('male-option').innerText = translations[lang].male;
    document.getElementById('female-option').innerText = translations[lang].female;
    document.getElementById('other-option').innerText = translations[lang].other;
    document.getElementById('prefer-option').innerText = translations[lang].preferNot;
    document.getElementById('start-button').innerText = translations[lang].startButton;
    document.getElementById('quiz-instr').innerText = translations[lang].quizInstr;
    document.getElementById('submit-button').innerText = translations[lang].submitButton;
    document.getElementById('results-h2').innerText = translations[lang].resultsH2;

    // Update question texts if quiz is loaded
    const questionPs = document.querySelectorAll('#personality-form .question p');
    if (questionPs.length > 0) {
        questionPs.forEach((p, index) => {
            p.innerText = `${index + 1}. ${translations[lang].questions[index]}`;
        });
    }

    // If results are shown, update them (though chart may need recreation, but for simplicity, assume language change before submit)
}

// Initial update
updateLanguage('en');

// Listen for language change
document.getElementById('lang-select').addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});

// Handle personal info submission
document.getElementById('personal-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    name = document.getElementById('name').value.trim();
    age = parseInt(document.getElementById('age').value);
    sex = document.getElementById('sex').value;
    
    if (!name || isNaN(age) || !sex) {
        alert('Please fill in all personal information!');
        return;
    }
    
    // Hide personal section with fade
    const personalSection = document.getElementById('personal-section');
    const subt = document.getElementById('phrase');
    personalSection.classList.add('hidden');
    subt.classList.add('hidden');
    setTimeout(() => {
        personalSection.style.display = 'none';
        subt.style.display = 'none';
        // Show quiz section with fade
        const quizSection = document.getElementById('quiz-section');
        quizSection.style.display = 'block';
        setTimeout(() => quizSection.classList.remove('hidden'), 10);
    }, 500);
});

// Handle quiz submission
document.getElementById('personality-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    // Map questions to traits
    const extraversionItems = {1: '+', 6: '-', 11: '+', 16: '-', 21: '+', 26: '-', 31: '+', 36: '-', 41: '+', 46: '-', 51: '+', 52: '+', 53: '+', 54: '+', 55: '+', 56: '-', 57: '-', 58: '-', 59: '-', 60: '-'};
    const agreeablenessItems = {2: '-', 7: '+', 12: '-', 17: '+', 22: '-', 27: '+', 32: '-', 37: '+', 42: '+', 47: '+', 61: '+', 62: '+', 63: '+', 64: '+', 65: '+', 66: '+', 67: '+', 68: '+', 69: '-', 70: '-'};
    const conscientiousnessItems = {3: '+', 8: '-', 13: '+', 18: '-', 23: '+', 28: '-', 33: '+', 38: '-', 43: '+', 48: '+', 71: '+', 72: '+', 73: '+', 74: '+', 75: '+', 76: '-', 77: '-', 78: '-', 79: '-', 80: '-'};
    const neuroticismItems = {4: '+', 9: '-', 14: '+', 19: '-', 24: '+', 29: '+', 34: '+', 39: '+', 44: '+', 49: '+', 81: '+', 82: '+', 83: '+', 84: '+', 85: '+', 86: '+', 87: '+', 88: '-', 89: '-', 90: '-'};
    const opennessItems = {5: '+', 10: '-', 15: '+', 20: '-', 25: '+', 30: '-', 35: '+', 40: '+', 45: '+', 50: '+', 91: '+', 92: '+', 93: '+', 94: '+', 95: '+', 96: '+', 97: '-', 98: '-', 99: '-', 100: '-'};
    
    // Function to calculate score for a trait
    function calculateTraitScore(items) {
        let sum = 0;
        for (let q in items) {
            const radio = document.querySelector(`input[name="q${q}"]:checked`);
            if (!radio) {
                alert('Please answer all questions!');
                return null;
            }
            let score = parseInt(radio.value);
            if (items[q] === '-') score = 6 - score; // Reverse scoring
            sum += score;
        }
        return sum;
    }
    
    const eScore = calculateTraitScore(extraversionItems);
    const aScore = calculateTraitScore(agreeablenessItems);
    const cScore = calculateTraitScore(conscientiousnessItems);
    const nScore = calculateTraitScore(neuroticismItems);
    const oScore = calculateTraitScore(opennessItems);
    
    if (eScore === null) return;
    
    // Convert to percentile
    function toPercentile(score) {
        return Math.round((score - 20) / 80 * 100);
    }
    
    const ePercent = toPercentile(eScore);
    const aPercent = toPercentile(aScore);
    const cPercent = toPercentile(cScore);
    const nPercent = toPercentile(nScore);
    const oPercent = toPercentile(oScore);
    
    // Send to server for saving
    try {
        const response = await fetch('/save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                age,
                sex,
                extraversion: ePercent,
                agreeableness: aPercent,
                conscientiousness: cPercent,
                neuroticism: nPercent,
                openness: oPercent
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to save results');
        }
        
        // Hide quiz section with fade
        const quizSection = document.getElementById('quiz-section');
        const pagePhrase = document.getElementById('phrase');
        quizSection.classList.add('hidden');
        pagePhrase.classList.add('hidden');
        setTimeout(() => {
            quizSection.style.display = 'none';
            pagePhrase.style.display = 'none';
            // Show results with fade
            const resultsDiv = document.getElementById('results');
            resultsDiv.style.display = 'block';
            setTimeout(() => resultsDiv.classList.add('visible'), 10);
            
            // Create chart
            const ctx = document.getElementById('personalityChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: translations[currentLang].traitLabels,
                    datasets: [{
                        label: translations[currentLang].chartLabel,
                        data: [ePercent, aPercent, cPercent, nPercent, oPercent],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    },
                    animation: {
                        duration: 2000
                    }
                }
            });
            
            // Display descriptions
            document.getElementById('extraversion-desc').innerText = translations[currentLang].getExtDesc(ePercent);
            document.getElementById('agreeableness-desc').innerText = translations[currentLang].getAgrDesc(aPercent);
            document.getElementById('conscientiousness-desc').innerText = translations[currentLang].getConDesc(cPercent);
            document.getElementById('neuroticism-desc').innerText = translations[currentLang].getNeuDesc(nPercent);
            document.getElementById('openness-desc').innerText = translations[currentLang].getOpeDesc(oPercent);
        }, 500);
    } catch (error) {
        alert('Error saving results: ' + error.message);
    }
});

// Initial state: quiz and results hidden, personal visible without hidden class
document.getElementById('quiz-section').classList.add('hidden');
document.getElementById('results').classList.remove('visible');