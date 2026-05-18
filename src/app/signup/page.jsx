"use client";

import {  Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

const SignUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

      const userData = Object.fromEntries(formData.entries())
      
    console.log(userData)
  };

  return (
    <div className="mx-auto w-full max-w-lg shadow-sm py-5 px-10 my-10 bg-white rounded-2xl border border-zinc-100 ">
      <div className="text-center">
        <div className="bg-blue-50 w-fit mx-auto rounded-full">
          <h4 className="px-4 py-3 font-black text-xl">
            D<span className="text-blue-600">F</span>
          </h4>
        </div>
        <h3 className="text-3xl font-bold tracking-tight text-zinc-900">
          Create Account
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
        <TextField
          isRequired
          name="name"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input
            className="h-11 rounded-lg border border-zinc-100"
            placeholder="Enter your name"
          />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="image"
          type="url"
          validate={(value) => {
            if (value.length < 5) {
              return "Image URL must be at least 3 characters";
            }

            try {
              new URL(value);
            } catch {
              return "Please enter a valid URL";
            }

            const imageExtensions =
              /\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?.*)?$/i;
            if (!imageExtensions.test(value)) {
              return "Please enter a valid image URL (jpg, jpeg, png, gif, webp, bmp, svg)";
            }

            return null;
          }}
        >
          <Label>Image URL</Label>
          <Input
            className="h-11 rounded-lg border border-zinc-100"
            placeholder="Enter a valid image url"
          />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input
            className="h-11 rounded-lg border border-zinc-100"
            placeholder="john@example.com"
          />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 6) {
              return "Password must be at least 6 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[a-z]/.test(value)) {
              return "Password must contain at least one lowercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
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
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </div>
      </Form>
      <p className="text-sm text-center mt-2">
        Already have an account{" "}
        <Link href="/login" className="text-blue-600">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
