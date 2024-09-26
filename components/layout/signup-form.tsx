"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import Input from "../ui/input";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { FileUpload } from "@/components/ui/file-upload";

export function SignupForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Form submitted");
  };
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (file: File[]) => {
    setFiles(file);
    console.log(files);
    toast.success("File uploaded");
  };

  return (
    <div className="max-w-3xl text-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold  text-neutral-800 dark:text-neutral-200">
        CreativeWing is glad to have you
      </h2>
      <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300">
        We will reach out to you with a proposed schedule for a meeting afer
        reviewing your work.
      </p>

      <form className="my-8" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="contact">Contact</Label>
          <Input id="contact" placeholder="+91 987XX-XXXXX" type="tel" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="title">Topic</Label>
          <Input
            id="title"
            placeholder="what is your research topic"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="document">Document</Label>
          <div
            id="document"
            className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg"
          >
            <FileUpload onChange={(files: File[]) => handleFileUpload(files)} />
          </div>
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
