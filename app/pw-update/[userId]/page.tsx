import PasswordUpdate from "../../../components/PasswordUpdate/PasswordUpdate";

export default function PwUpdate({ params }) {
  return <PasswordUpdate userId={params.userId} />;
}
