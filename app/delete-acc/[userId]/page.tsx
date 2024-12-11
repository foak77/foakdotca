import DeleteAcc from "./../../../components/DeleteAcc/DeleteAcc";

export default function Page(idUser) {
  // console.log("USER ID DO DELETE", idUser.params.userId);
  const userIdTBD: string = idUser.params.userId;
  return <DeleteAcc userId={userIdTBD} />;
}
