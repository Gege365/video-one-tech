// Expõe o ponto de pouso da bolinha do globo na seção de modelos
// (mesmo contrato que a busca tinha: { luz, pousar }).

export function iniciarModelos() {
  const pouso = document.querySelector('[data-pouso]');
  // sem a seção: o voo do ponto não tem alvo
  if (!pouso) return null;

  return {
    luz: pouso.querySelector('.modelos__luz'),
    /** a bolinha do globo pousada no ponto do destaque */
    pousar: (v) => pouso.classList.toggle('is-pousado', v),
  };
}
