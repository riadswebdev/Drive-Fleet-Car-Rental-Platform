"use client";

import { authClient, signIn } from "@/lib/auth-client";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  Spinner,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [signInError, setSignInError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSignInError("");
    try {
      const formData = new FormData(e.currentTarget);

      const userData = Object.fromEntries(formData.entries());

      const { data, error } = await authClient.signIn.email({
        email: userData.email,
        password: userData.password,
      });
      console.log(error, data);
      if (error) {
        setSignInError(error.message);
        toast.error(error.message);
        return;
      }

      toast.success("Successfully login");

      setSignInError("");

      // e.target.reset();

      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1000);
    } catch (err) {
      console.log(err);

      setSignInError("Something went wrong");

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto w-full max-w-md shadow p-10 my-20 bg-white rounded-2xl border border-zinc-100  ">
      <div className="text-center">
        <div className="bg-blue-50 w-fit mx-auto rounded-full">
          <h4 className="px-4 py-3 font-black text-xl">
            D<span className="text-blue-600">F</span>
          </h4>
        </div>
        <h3 className="text-3xl font-bold tracking-tight text-zinc-900">
          Login
        </h3>
        <p className="text-sm text-zinc-500 my-2">
          Start renting premium cars in minutes.
        </p>
      </div>
      <Button
        className="w-full h-11 border rounded-lg border-zinc-100  mb-2"
        variant="ghost"
      >
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
      <div className="flex items-center gap-1  mb-2">
        <Separator className="w-[50%]" />
        <span className="text-blue-600 ">or</span>
        <Separator className="w-[50%]" />
      </div>

      <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input
            className="h-11 rounded-lg border border-zinc-100"
            placeholder="john@example.com"
          />
          <FieldError />
        </TextField>

        <TextField isRequired minLength={6} name="password" type="password">
          <Label>Password</Label>
          <InputGroup className="h-11 rounded-lg border border-zinc-100">
            <InputGroup.Input
              className=""
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ?
                  <Eye className="size-4" />
                : <EyeSlash className="size-4" />}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
          <FieldError />
        </TextField>

        <div>
          <Button isDisabled={loading} type="submit" className="w-full">
            {loading ?
              <div className="flex  items-center gap-2">
                <span className="">Login</span>
                <Spinner color="default" />
              </div>
            : "Sign In"}
          </Button>
        </div>
      </Form>
      <p className="text-sm text-center mt-2">
        Don`t have an account?
        <Link href="/signup" className="text-blue-600">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
