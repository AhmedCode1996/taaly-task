import AuthGreetings from "../_components/AuthGreetings";
import SignupForm from "../_components/SignupForm";

const SignupPage = () => {
  return (
    <section className="flex bg-white rounded-[13.98px]">
      <AuthGreetings />
      <SignupForm />
    </section>
  );
};

export default SignupPage;
