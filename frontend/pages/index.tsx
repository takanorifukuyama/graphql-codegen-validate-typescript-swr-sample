import { useCallback } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { UserInput, UserInputSchema } from "../lib/graphql";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextForm } from "../components/form";
import { Button, Stack } from "@chakra-ui/react";

const Home: NextPage = () => {
  const { register, handleSubmit } = useForm<UserInput>({
    resolver: zodResolver(UserInputSchema()),
  });
  const onSubmit = useCallback((data: UserInput) => {
    console.log(data);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Form validation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={10}>
            <TextForm
              placeholder="email"
              label="email"
              {...register("email")}
            />
            <TextForm
              placeholder="message"
              label="message"
              {...register("message")}
            />

            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </main>
    </div>
  );
};

export default Home;
