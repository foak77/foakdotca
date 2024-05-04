import ImageProfile from "@/components/ImageProfile/ImageProfile";

export default function page({ params }) {
  return <ImageProfile userId={params.userId} />;
}
