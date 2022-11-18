import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}
        className="my-16 bg-gradient-to-r from-cyan-800 to-gray-700 py-10 px-10 rounded-lg">
          <input {...register("firstName", { required: true, maxLength: 20 })}/>
          <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })}/>
          <input type="number" {...register("age", { min: 18, max: 99 })} class="number"/>
          <input type="submit"/>
        </form>
      );
}

export default Form;