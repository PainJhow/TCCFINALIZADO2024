function copyCode() {
    const codeElement = document.getElementById('code-example','code-example2','code-example3');
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Código copiado para a área de transferência!');
}
function copyCode2() {
    const codeElement = document.getElementById('code-example2');
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Código copiado para a área de transferência!');
}
function copyCode3() {
    const codeElement = document.getElementById('code-example3');
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Código copiado para a área de transferência!');
}