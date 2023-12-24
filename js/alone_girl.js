const aloneBoyHistory = {
    'Ти б хотіла мати хлопця?': {
        'Так': {
            'Якого б хлопця ти хотіла мати?': {
                'Худого, малого': {
                    'Є такі варіанти': {
                        'Олег': {
                            'Трошки про Олега: Він добрий, багатий, високий, любить спорт і музику, тобі такий підходить?': {
                                'Так': {
                                    'Гру закінчено!': '',
                                },
                                'Ні': {
                                    'Гру закінчено!': ''
                                },
                            },
                        },
                        'Андрій': {
                            'Трошки про Андрія: він звісно не зірка, але має багато хороших з\'язків + романтик від Бога, тобі такий підходить?': {
                                'Так': {
                                    'Гру закінчено!': '',
                                },
                                'Ні': {
                                    'Гру закінчено!': ''
                                },
                            },
                        },
                        'Іван': {
                            'Трошки про Івана: Рибалка? Танці? Весілля? Забава? Розваги? - там він завжди є, з ним не засумуєш, але пам\'ятай він багато п\'є, тобі такий підходить?': {
                                'Так': {
                                    'Гру закінчено!': '',
                                },
                                'Ні': {
                                    'Гру закінчено!': ''
                                },
                            },
                        },
                    }
                },
                'Великий, спортивний': {
                    'Є такі варіанти': {
                        'Ярослав': {
                            'Трошки про Ярослава: Танцюрист, гімнаст, і каратист, біля нього тобі ніжоден хлопець не страшний, тільки скажи і він по твоєму наказу виб\'є всі йому зуби, тобі така підходить?': {
                                'Так': {
                                    'Гру закінчено!': '',
                                },
                                'Ні': {
                                    'Гру закінчено!': ''
                                },
                            },
                        },
                        'Роман': {
                            'Трошки про Романа: має 5 олімпійських винагород, любить дітей, тобі такий підходить?': {
                                'Так': {
                                    'Гру закінчено!': '',
                                },
                                'Ні': {
                                    'Гру закінчено!': ''
                                },
                            },
                        },
                    }
                }
            }
        },
        'Ні': {
            'Тоді давай підемо в кафе?': {
                'Так': {
                    'Гру закінчено!': '',
                },
                'Ні': {
                    'Гру закінчено!': ''
                },
            }
        }
    }
};

let currentBranch = aloneBoyHistory;
let currentQuestionIndex = 0;
let currentQuestion;

function showQuestion() {
    currentQuestion = Object.keys(currentBranch)[currentQuestionIndex];

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
        alert('Кінець історії. Дякуємо за участь!');
    }
}

function nextQuestion(answer) {
    if (answer && currentBranch[currentQuestion] && currentBranch[currentQuestion][answer]) {
        currentBranch = currentBranch[currentQuestion][answer];
        currentQuestionIndex = 0;
        showQuestion();
    } else if (currentBranch[currentQuestion]) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        alert('Кінець історії. Дякуємо за участь!');
    }
}

showQuestion();