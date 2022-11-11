import { useNavigate, useParams } from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <a
        onClick={() => {
          navigate(-1);
        }}
      >
        Voltar
      </a>
      <h1>Detalhe do produto #{params.id}</h1>
    </div>
  );
};
