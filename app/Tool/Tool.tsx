"use client";

import styles from "./Tool.module.css";
import { useEffect, useState } from "react";

const About = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [imageData, setImageData] = useState("");

  const fetchImage = async () => {
    try {
      setImageData("");
      const params = new URLSearchParams({
        repo_url: repoUrl,
      });
      const image_res = await fetch(
        `/github-social-image-generator/api/getImage?` + params,
        {
          headers: {
            "Content-Type": "image/png",
          },
        }
      );
      if (!image_res.ok) {
        const data = await image_res.json();
        throw new Error(JSON.stringify(data));
      }
      const imageBlob = await image_res.blob();
      setImageData(URL.createObjectURL(imageBlob));
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>GitHub Social Image Generator</h1>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            fetchImage();
          }}
        >
          <input
            className={styles.input}
            type={"url"}
            placeholder={"Enter Guthub repo url"}
            pattern={
              "^(?:https://)?(?:www.)?github.com/([A-Za-z0-9_-]+/[A-Za-z0-9_.-]+)/?$"
            }
            required
            onChange={(e) => {
              setRepoUrl(e.target.value);
            }}
            autoComplete={"on"}
          />

          <button className={styles.button}>Click To Generate</button>
        </form>
        {imageData && (
          <div className={styles.imgBox}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${imageData}`}
              width={"100%"}
              alt={"Repo Social Image"}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default About;
