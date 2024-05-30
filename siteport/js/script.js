document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validação básica
    if (name === '' || email === '' || message === '') {
        displayStatus('Por favor, preencha todos os campos.', false);
        return;
    }

    // Simula o envio do formulário (por exemplo, você pode usar fetch para enviar os dados para um servidor)
    displayStatus('Mensagem enviada com sucesso!', true);

    // Limpar formulário
    document.getElementById('contactForm').reset();
});

function displayStatus(message, success) {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = message;
    statusDiv.style.color = success ? '#28a745' : '#d9534f';
}
