const aloneBoyHistory = {
    'Ти б хотів завести дівчину?': {
        'Так': {
            'Яку б ти хотів дівчину?': {
                'Худу, маленьку': {
                    'Є такі варіанти': {
                        'Катя': {
                            'Трошки про Катю: вона добра, бідна, не високий, любить спорт і музику, тобі така підходить?': {
                                'Так': {
                                    'Гру закінчено!': '',
                                },
                                'Ні': {
                                    'Гру закінчено!': ''
                                },
                            },
                        },
                        'Настя': {
                            'Трошки про Настю: вона гаряча, може зрадити, любить багатих, тобі така підходить?': {
                                'Так': {
                                    'Гру закінчено!': '',
                                },
                                'Ні': {
                                    'Гру закінчено!': ''
                                },
                            },
                        },
                        'Олена': {
                            'Трошки про Олену: вона бешкетниця, любить розваги, з чоловіками дуже сором\'язлива, тобі така підходить?': {
                                'Так': {
                                    'Гру закінчено!': '',
                                },
                                'Ні': {
                                    'Гру закінчено!': ''
                                },
                            },
                        }
                    }
                },
                'Велику, товстеньку': {
                    'Є такі варіанти': {
                        'Ірина': {
                            'Трошки про Ірину: За останній рік вона набрала аж 5кг, тобі така підходить?': {
                                'Так': {
                                    'Гру закінчено!': '',
                                },
                                'Ні': {
                                    'Гру закінчено!': ''
                                },
                            },
                        },
                        'Ольга': {
                            'Трошки про Ольгу: Вона дуже прискіплива до ваги, але загалом намагається триматися у форма від 80кг-95кг, любить солодощі, тобі така підходить?': {
                                'Так': {
                                    'Гру закінчено!': '',
                                },
                                'Ні': {
                                    'Гру закінчено!': ''
                                },
                            }
                        },
                    }
                }
            }
        },
        'Ні': {
            'Давай тоді підемо на роботу': {
                'Так': {
                    'Гру закінчено!': '',
                },
                'Ні': {
                    'Гру закінчено!': ''
                },
            }
        }
    }
    // ... інші питання та гілки
};

let currentBranch = aloneBoyHistory;
let currentQuestionIndex = 0;
let currentQuestion; // Додано змінну для поточного питання

function showQuestion() {
    currentQuestion = Object.keys(currentBranch)[currentQuestionIndex];

    // Додайте перевірку на існування поточного питання
    if (currentQuestion) {
        const options = Object.keys(currentBranch[currentQuestion]);

        document.getElementById('question').textContent = currentQuestion;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        options.forEach((option) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => nextQuestion(option);
            optionsContainer.appendChild(button);
        });
    } else {
        console.log('Кінець історії. Дякуємо за участь!');
    }
}

function nextQuestion(answer) {
    if (answer && currentBranch[currentQuestion] && currentBranch[currentQuestion][answer]) {
        currentBranch = currentBranch[currentQuestion][answer];
        currentQuestionIndex = 0; // Починаємо знову з першого питання для нової гілки
        showQuestion();
    } else if (currentBranch[currentQuestion]) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        console.log('Кінець історії. Дякуємо за участь!');
    }
}

// Початок гри
showQuestion();