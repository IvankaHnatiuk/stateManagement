import Button from "./Button";
import Input from "./Input";

export default function Section({children}){
  return (
    <>
        <section>
          {children}
        </section>
    </>
  )
}

Section.Input = Input;
Section.Button = Button;