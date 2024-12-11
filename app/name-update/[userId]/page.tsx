import NameUpdate from "../../../components/NameUpdate/NameUpdate";

export default function Profile({ params }) {
  return <NameUpdate userId={params.userId} />;
}
