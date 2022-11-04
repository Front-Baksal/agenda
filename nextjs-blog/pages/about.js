import { DongilAtom } from "../atom/atom";
import { useRecoilValue } from "recoil";

export default function About() {
    const _age = useRecoilValue(DongilAtom);
  return (
    <>
      <h1>About</h1>
      <h2>{_age.age}</h2>
    </>
  );
}