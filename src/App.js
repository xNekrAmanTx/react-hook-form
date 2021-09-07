import "./App.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import styled from "styled-components";

const LayOutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-evenly;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 25%;
`;


function App() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(getValues("example"));
  };

  // console.log(watch("example")); // watch input value by passing the name of it

  useEffect(() => {
    console.log(getValues("example"));
  }, []);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <LayOutWrapper>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </Form>
    </LayOutWrapper>
  );
}

export default App;
