import { SignupForm } from "@/components/layout/signup-form";
const page = () => {
  return (
    <div className="section">
      <h1>
        {" "}
        Let us Get you <span className="text-primary">Setup</span>
      </h1>
      <section className="my-8">
        <SignupForm />
      </section>
    </div>
  );
};

export default page;
