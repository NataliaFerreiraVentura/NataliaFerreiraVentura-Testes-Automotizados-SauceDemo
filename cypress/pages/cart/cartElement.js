// Seletores dos Itens do Carrinho
const CartElements = {
  // #region Seletores dos Itens do Carrinho
  cartItem: '.cart_item',           // Seleciona um item individual no carrinho
  itemPriceBar: '.item_pricebar',    // Seleciona a barra de preço de um item no carrinho
  removeButton: '.btn_secondary',    // Seleciona o botão para remover um item
  // #endregion
};

// Seletores da Interface do Carrinho
const CartInterface = {
  // #region Seletores da Interface do Carrinho
  cartBadge: '.shopping_cart_badge',  // Badge que exibe o número de itens no carrinho
  cartLink: 'a.shopping_cart_link.fa-layers.fa-fw', // Link para a página do carrinho
  cartList: '.cart_list',  // Lista de itens no carrinho
  // #endregion
};

export { CartElements, CartInterface };