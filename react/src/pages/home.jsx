import RegisterForm from "../components/form";
import FormUsingRHF from "../components/formusingRHF";
import Login from "../components/login";
import ParentComponent from "../components/propsDrill";
import FormWithAllInput from "../components/FormWithAllInput";

export default function Home() {
  return (
    <>
      <ParentComponent />
      {/* <Login/> */}
      <RegisterForm />
      <FormUsingRHF />
      <div className="">{/* <FormWithAllInput /> */}</div>
    </>
  );
}
