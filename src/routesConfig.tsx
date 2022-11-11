import { ProductDetail } from "./Components/ProductDetail";
import { Products } from "./Components/Products";

export const routesConfig = [
  {
    path: "products",
    title: "Produtos",
    component: <Products />,
  },
  {
    path: "products/:id",
    title: "Detalhe do Produto",
    component: <ProductDetail />,
    hiddenOnTab: true,
  },
  {
    path: "customers",
    title: "Clientes",
    component: <p>Pagina de Clientes</p>,
  },
  {
    path: "sell",
    title: "Vendas",
    component: <p>Pagina de Vendas</p>,
  },
  {
    path: "stock",
    title: "Estoque",
    component: <p>Pagina de Estoque</p>,
  },
];
