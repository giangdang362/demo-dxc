import DetailProject from "@/components/DetailProject";

export default function ProductDetail({params}: { params: { slug: string }}) {
  return (
    <DetailProject slug={params.slug} />
  );
}
