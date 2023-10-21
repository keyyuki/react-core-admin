import { useParams } from "react-router-dom";

export function ProductDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>ProductDetailPage #{id}</h1>
    </div>
  );
}