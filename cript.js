document.addEventListener("DOMContentLoaded", function () {
  ativarBotoesDetalhes();
  ativarBotaoSaibaMais();
});

function ativarBotoesDetalhes() {
  const botoes = document.querySelectorAll(".btn-detalhes");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const caixa = document.getElementById(botao.dataset.alvo);
      const estaVisivel = caixa.classList.toggle("visivel");

      botao.textContent = estaVisivel ? "Esconder detalhes" : "Ver detalhes";
      botao.setAttribute("aria-expanded", estaVisivel);
    });
  });
}

function ativarBotaoSaibaMais() {
  const botao = document.getElementById("btn-saiba-mais");
  const mensagem = document.getElementById("mensagem-saiba-mais");

  if (!botao || !mensagem) return;

  botao.addEventListener("click", function () {
    const estaVisivel = mensagem.classList.toggle("visivel");
    botao.textContent = estaVisivel ? "Mostrar menos" : "Saiba mais";
    botao.setAttribute("aria-expanded", estaVisivel);
  });
}