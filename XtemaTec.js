var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

function verificar_dados(){
  
  let nome = document.getElementsByTagName("name").value;
  let email = document.getElementsByTagName("email").value;
  let msg = document.getElementsByTagName("message").value;

  if(nome.length > 0 && email.length > 0 && msg.length > 0 ){
    window.alert("Mensagem enviada com sucesso./nComfirme que seu e-mail está correto!");
  }

} 
