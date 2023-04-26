"use client";

import styles from "./Tool.module.css";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const About = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [queryUrl, setQueryUrl] = useState("");
  const [imageData, setImageData] = useState("");
  const [status, setStatus] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
  //   console.log(pathname);
  // }, [pathname]);

  const searchParams = useSearchParams();
  const fallBackUrl =
    "https://github.com/JohnVersus/github-social-image-generator";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      if (searchParams) {
        const params = new URLSearchParams(searchParams);
        params.set(name, value);

        return params.toString();
      }
    },
    [searchParams]
  );

  useEffect(() => {
    const query_url = searchParams?.get("repo_url");
    // console.log(query_url);
    if (query_url) {
      setQueryUrl(query_url);
    } else {
      setQueryUrl(fallBackUrl);
    }
  }, []);

  useEffect(() => {
    if (queryUrl) {
      fetchImage(queryUrl);
    }
  }, [queryUrl]);

  // const basePath = process.env.NEXT_PUBLIC_BASEPATH;
  const fetchImage = async (url: string) => {
    setStatus("Generating");
    try {
      setImageData("");
      const params = new URLSearchParams({
        repo_url: url,
      });
      const image_res = await fetch(`/api/getImage?` + params, {
        headers: {
          "Content-Type": "image/png",
        },
      });
      if (!image_res.ok) {
        const data = await image_res.json();
        throw new Error(JSON.stringify(data));
      }
      const imageBlob = await image_res.blob();
      setImageData(URL.createObjectURL(imageBlob));
      setStatus("");
    } catch (error) {
      setStatus("");
      if (error instanceof Error) {
        if (!error.message.includes("<")) {
          alert(error.message);
        }
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
            // router.push("/?" + createQueryString("repo_url", repoUrl), {
            //   forceOptimisticNavigation: true,
            // });
            fetchImage(repoUrl);
            router.push(`/?repo_url=${repoUrl}`);
            // router.refresh();
          }}
        >
          <input
            className={styles.input}
            type={"text"}
            placeholder={"Enter a Github repo url"}
            pattern={
              "^(?:https://)?(?:www.)?github.com/([A-Za-z0-9_-]+/[A-Za-z0-9_.-]+)/?$"
            }
            required
            onChange={(e) => {
              setRepoUrl(e.target.value);
            }}
            // value={repoUrl ? repoUrl : fallBackUrl}
          />

          <button className={styles.button} disabled={status ? true : false}>
            Click To Generate
          </button>
        </form>
        {imageData && (
          <>
            <div className={styles.imgBox}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${imageData}`}
                width={"100%"}
                alt={"Repo Social Image"}
              />
            </div>
            <div className={styles.save}>
              <a download={"image.png"} href={imageData}>
                💾
              </a>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default About;
