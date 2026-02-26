import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define Zod schema
const schema = z
  .object({
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const FormUsingRHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
          {errors.email && <span style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input
            id="password"
            type="password"
            {...register("password")}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
          {errors.password && <span style={{ color: "red", fontSize: "12px" }}>{errors.password.message}</span>}
        </div>

        <div>
          <label htmlFor="confirmPassword" style={{ display: "block", marginBottom: "5px" }}>Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
          {errors.confirmPassword && (
            <span style={{ color: "red", fontSize: "12px" }}>{errors.confirmPassword.message}</span>
          )}
        </div>

        <button type="submit" disabled={isSubmitting} style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          {isSubmitting ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default FormUsingRHF;