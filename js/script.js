function somar() {
    const input1 = Number(document.getElementById('input1').value);
    const input2 = Number(document.getElementById('input2').value);
    const resultado = input1 + input2;
    document.getElementById('resultado').innerHTML = `O resultado é: ${resultado}`;
  }
  
  function subtrair() {
    const input1 = Number(document.getElementById('input1').value);
    const input2 = Number(document.getElementById('input2').value);
    const resultado = input1 - input2;
    document.getElementById('resultado').innerHTML = `O resultado é: ${resultado}`;
  }
  
  function multiplicar() {
    const input1 = Number(document.getElementById('input1').value);
    const input2 = Number(document.getElementById('input2').value);
    const resultado = input1 * input2;
    document.getElementById('resultado').innerHTML = `O resultado é: ${resultado}`;
  }
  
  function dividir() {
    const input1 = Number(document.getElementById('input1').value);
    const input2 = Number(document.getElementById('input2').value);
    const resultado = input1 / input2;
    document.getElementById('resultado').innerHTML = `O resultado é: ${resultado}`;
  }
  