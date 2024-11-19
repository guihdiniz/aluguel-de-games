function alterarStatus(games) {
    const gameItem = document.getElementById(`game-${games}`);
    const button = gameItem.querySelector('a.dashboard__item__button');
    const imageDiv = gameItem.querySelector('div.dashboard__item__img');

    if (button.textContent === 'Alugar') {
        //Altera para "Devolver"
        button.textContent = 'Devolver';
        button.classList.add('dashboard__item__button--return');
        imageDiv.classList.add('dashboard__item__img--rented');
    } else {
        //Altera para "Alugar"
        button.textContent = 'Alugar';
        button.classList.remove('dashboard__item__button--return');
        imageDiv.classList.remove('dashboard__item__img--rented');
    }
}        