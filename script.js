function addInput(value = '') {
    const inputList = document.getElementById('input-list');

    const container = document.createElement('div');
    container.className = 'input-container';

    const input = document.createElement('input');
    input.type = 'text';
    input.value = value;
    container.appendChild(input);

    const addButton = document.createElement('button');
    addButton.innerText = '추가';
    container.appendChild(addButton);

    const removeButton = document.createElement('button');
    removeButton.innerText = '제거';
    container.appendChild(removeButton);

    inputList.appendChild(container);

    // 이벤트 핸들러 등록
    input.addEventListener('input', saveInputs);
    addButton.addEventListener('click', () => addInput());
    removeButton.addEventListener('click', () => {
        inputList.removeChild(container);
        saveInputs();
    });
}

function saveInputs() {
    const inputs = Array.from(document.getElementsByTagName('input'));
    const values = inputs.map(input => input.value);
    localStorage.setItem('inputs', JSON.stringify(values));
}

function loadInputs() {
    const values = JSON.parse(localStorage.getItem('inputs')) || [];
    values.forEach(value => addInput(value));
}

// 초기 로드
loadInputs();

// 추가 버튼에 이벤트 핸들러 등록
document.getElementById('add-button').addEventListener('click', () => addInput());
