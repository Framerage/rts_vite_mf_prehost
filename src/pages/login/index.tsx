import {useForm} from "react-hook-form";
import styles from "./login.module.css";
import {useAuthStore} from "store/authStore";
import {useNavigate} from "react-router-dom";
import {homePath} from "utils/routeConfig";
interface ILoginForm {
  userName: string;
}
export const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors: formErrors},
  } = useForm<ILoginForm>({
    defaultValues: {userName: ""},
  });
  const {setUser} = useAuthStore(s => s.actions);

  const onSubmitForm = (data: ILoginForm) => {
    setUser(data.userName);
    navigate(`${homePath}/rooms`);
  };
  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmitForm)}>
      <div className={styles.inputWrapper}>
        <input type="text" {...register("userName", {required: true})} />
      </div>
      <p className={styles.errorText}>{formErrors.userName && "must fill"}</p>
      <button>Login</button>
    </form>
  );
};
